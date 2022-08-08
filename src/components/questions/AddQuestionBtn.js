import styles from './Questions.module.css'

export const AddQuestionBtn = ({
    getIsOpen,
}) => {
    

    const addHandler = () => {
        getIsOpen();
    }

    return (
        <div className={styles.right}>

        <button className={styles.addBtn} onClick={addHandler}>
            <strong>New Question</strong>
        </button>
        </div>
    )
}