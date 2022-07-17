import styles from './Questions.module.css'

export const AddQuestionBtn = ({
    getIsOpen,
}) => {
    

    const addHandler = () => {
        getIsOpen();
    }

    return (
        <div className='w3-right'>

        <button className={styles.addBtn} onClick={addHandler}>
            {/* <strong>+</strong> */}
            <strong>New Question</strong>
        </button>
        </div>
    )
}