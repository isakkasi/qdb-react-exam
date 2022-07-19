import { useState } from 'react';

import styles from './Inputs.module.css'

export const TextInput = ({ name, children, getValues, type, inValue, disabled }) => {
    const [value, setValue] = useState(inValue || '');

    const onChangeHandler = (e) => {
        setValue(prevValue => e.target.value);
        getValues(name, e.target.value);
    };
    // console.log(styles);

    return (
        <div className={styles.textInput}>
            <label htmlFor={name} className={styles.textInput}>
                <b>{children}</b>
            </label>
            <input type={type || "text"}  name={name} id={name} value={value} onChange={onChangeHandler} disabled={disabled}/>
        </div>
    );
};

