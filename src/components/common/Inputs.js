import { useState } from 'react';
import stringParser from '../../utils/stringParser';

import styles from './Inputs.module.css'

export const TextInput = ({ name, children, getValues, type, inValue, disabled }) => {
    const [value, setValue] = useState(inValue || '');

    const onChangeHandler = (e) => {
        setValue(e.target.value);
        getValues(name, e.target.value);
    };

    return (
        <div className={styles.textInput}>
            <label htmlFor={name} className={styles.textInput}>
                <b>{children}</b>
            </label>
            <input type={type || "text"}  name={name} id={name} value={value} onChange={onChangeHandler} disabled={disabled}/>
        </div>
    );
};

export const SelectInput =({
    name,
    inValue,
    options,
    getValues
})=>{
    const [value, setValue] = useState(inValue || '');

    const onChangeHandler = (e) => {
        setValue(e.target.value);
        getValues(name, e.target.value);
    };


    return (
        <label htmlFor={name}>
                    {stringParser.capFirst(name)}
                    <select
                        htmlFor={name}
                        name={name}
                        className={styles.select}
                        value={value}
                        onChange={onChangeHandler}
                    >
                        {[{ _id: 0, [name]: '', title: `Select ${name} ...` }, ...options].map((x) => (
                            <option key={x._id} value={x._id}>
                                {x.name || x.title || x.fullName}
                            </option>
                        ))}
                    </select>
                </label>
    )
}

