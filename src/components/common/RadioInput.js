
import { useState } from 'react';
import styles from './RadioInput.module.css'


export const RadioInput = ({
    name,
    getValues,
    inValue,
    checkedCondition,
    children,
}) => {
    const [value, setValue] = useState(checkedCondition || '');

    // 'correctAns', checkedCondition

    const onChangeHandler = (e) => {
        console.log(inValue);
        setValue(e.target.value);
        getValues(name, e.target.value);
    };

    return (
        <label htmlFor={name}>
            <input
                className={styles.inputRadio}
                type="radio"
                name={name}
                // checked={getValues.correctAns === checkedCondition}
                value={checkedCondition}
                onChange={(e) => onChangeHandler(e)}
            />
            {children}
        </label>
    )
}