import { useState } from 'react';
import styles from './AtaInput.module.css';

export const AtaInput = ({
    name,
    value,
    ataId,
    min,
    max,
    onChangeHandler
}) => {
    const [formName, setFormName] = useState(name);
    const [formValue, setFormValue] = useState(value);

    let style = `${styles.ataInput} ${formValue === 0 ? styles.zero : ''} ${styles[name]}`

    const change = (e) => {
        setFormName((state) => e.target.name);
        setFormValue((state) => e.target.value);
        onChangeHandler(ataId, e.target.name, e.target.value);
    };

    return <input
        className={style}
        type="number"
        name={formName}
        min={min}
        max={max}
        value={formValue}
        onChange={change}
    />;
};
