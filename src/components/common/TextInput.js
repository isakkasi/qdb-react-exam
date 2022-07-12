import { useState } from 'react';

export const TextInput = ({ name, children, getValues, type }) => {
    const [value, setValue] = useState('');

    const onChangeHandler = (e) => {
        setValue(prevValue => e.target.value);
        getValues(name, e.target.value);
    };

    return (
        <div>
            <label htmlFor={name}>
                <b>{children}</b>
            </label>
            <input type={type || "text"}  name={name} id={name} value={value} onChange={onChangeHandler} />
        </div>
    );
};
