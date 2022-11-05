import { useEffect } from 'react';
import { useState } from 'react';
import stringParser from '../../utils/stringParser';

import styles from './Inputs.module.css';

export const TextInput = ({ name, children, getValues, type, inValue, disabled, minMax }) => {
    const [value, setValue] = useState(inValue || '');

    useEffect(() => {
        setValue((state) => inValue);
    }, [inValue]);

    const onChangeHandler = (e) => {
        setValue(e.target.value);
        getValues(name, e.target.value);
    };

    return (
        <div className={styles.textInput}>
            <label htmlFor={name} className={styles.textInput + ' ' + styles.label}>
                {children}
            </label>
            <input
                type={type || 'text'}
                name={name}
                id={name}
                value={value}
                onChange={onChangeHandler}
                disabled={disabled}
                className={name === 'question' ? styles.question : null}
                min={minMax[0] || 0}
                max={minMax[1] || 100}
            />
        </div>
    );
};

export const SelectInput = ({ name, inValue, options, getValues }) => {
    const [value, setValue] = useState(inValue || '');

    useEffect(() => {
        setValue((state) => inValue);
    }, [inValue]);

    const onChangeHandler = (e) => {
        setValue((state) => e.target.value);
        getValues(name, e.target.value);
    };

    return (
        <label htmlFor={name} className={styles.label}>
            {stringParser.capFirst(name)}
            <select htmlFor={name} name={name} className={styles.select} value={value} onChange={onChangeHandler}>
                {[{ _id: 0, [name]: '', title: `Select ${name} ...` }, ...options].map((x) => (
                    <option key={x._id} value={name === 'examiner' || name === 'invigilator' ? x.userId : x._id}>
                        {x.name || x.title || x.fullName}
                    </option>
                ))}
            </select>
        </label>
    );
};

export const TextArea = ({ name, children, getValues, type, inValue, disabled }) => {
    const [value, setValue] = useState(inValue || '');

    useEffect(() => {
        setValue((state) => inValue);
    }, [inValue]);

    const onChangeHandler = (e) => {
        setValue(e.target.value);
        getValues(name, e.target.value);
    };

    return (
        <div className={styles.textArea}>
            <label htmlFor={name} className={styles.textArea + ' ' + styles.label}>
                <b>{children}</b>
            </label>
            <textarea
                rows={name === 'question' ? 5 : 3}
                type={type || 'text'}
                name={name}
                id={name}
                value={value}
                onChange={onChangeHandler}
                disabled={disabled}
            />
        </div>
    );
};
