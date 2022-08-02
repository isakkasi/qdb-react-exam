import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { DetailsButtons } from '../../common/DetailsButtons';
import { QuestionDetails } from '../details/QuestionDetails';
import { AddQuestionForm } from '../question-form/QuestionForm';
import styles from './Card.module.css';

export const Card = ({ question, returnResult }) => {

    const {auth} = useContext(AuthContext)

    const red = auth.role === 'User' ?
    ['', '', '']
    : [
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
                <h3 className={styles.ata}>ATA: {question.ata?.ata}</h3>
                <DetailsButtons 
                    data={question}
                    returnResult={returnResult}
                    Form={AddQuestionForm}
                    Details={QuestionDetails}
                    itemType="question"
                />
            </div>
        </div>       
    );
};
