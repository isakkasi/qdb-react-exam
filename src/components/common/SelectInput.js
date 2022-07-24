
import styles from './SelectInput.module.css'


export const SelectInput = ({
    options,
    name,
    getValues,
    selectedCondition,
}) => {

    function display (x)  {
        let display;
        if(name === 'ata') {
            display = `${x.ata} ${x.title}`
        }
        return display;
    };


    return (
        <label htmlFor="ata">
            ATA
            <select
                htmlFor={name}
                name={name}
                className={styles.select}
                onChange={(e) => getValues({name}, e.target.value, e)}
            >
                {options.map((x) => (
                    <option
                        key={x._id}
                        value={x._id}
                        selected={x._id === {selectedCondition}}
                    >
                        {display(x)}
                    </option>
                ))}
            </select>
        </label>
    )
}