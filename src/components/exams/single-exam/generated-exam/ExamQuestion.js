import styles from './ExamQuestion.module.css'

export const ExamQuestion = ({ question, start, all }) => {
    return (
        <div className={styles.general}>
            <div className={styles.question} >
                {start}. {question.question}
            </div>

            <div className={styles.answer} >A. {question.ansA}</div>
            <div className={styles.answer} >B. {question.ansB}</div>
            <div className={styles.answer} >C. {question.ansC}</div>
        </div>
    );
};
