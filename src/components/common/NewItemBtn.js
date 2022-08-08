import styles from './NewItemBtn.module.css'

export const NewItemBtn = ({
    children,
    onClick,
}) => {
    

    const addHandler = () => {
        onClick();
    }

    return (
        <div className={styles.right}>

        <button className={styles.addBtn} onClick={addHandler}>
            {/* <strong>+</strong> */}
            <strong>{children}</strong>
        </button>
        </div>
    )
}