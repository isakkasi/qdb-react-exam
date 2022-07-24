import { DetailsButtons } from '../../common/DetailsButtons';
import { AddQuestionForm } from '../question-form/QuestionForm';
import styles from './Card.module.css';

export const Card = ({ question, returnResult }) => {

    const red = [
        question.correctAns === 'ansA' ? styles.red : '',
        question.correctAns === 'ansB' ? styles.red : '',
        question.correctAns === 'ansC' ? styles.red : ''
    ]

    return (
        <div className={styles.card}>
            <div className={styles.main}>
                <h3 className={styles.question}>{question.question}</h3>
                <p className={`${styles.answer} ${red[0]}`}>A. &nbsp; {question.ansA}</p>
                <p className={`${styles.answer} ${red[1]}`}>B. &nbsp; {question.ansB}</p>
                <p className={`${styles.answer} ${red[2]}`}>C. &nbsp; {question.ansC}</p>
            </div>
            <div className={styles.service}>
                <h3 className={styles.level}>Level: {question.level}</h3>
                <DetailsButtons 
                    data={question}
                    returnResult={returnResult}
                    Form={AddQuestionForm}
                    itemType="question"
                />
            </div>
        </div>       
    );
};
