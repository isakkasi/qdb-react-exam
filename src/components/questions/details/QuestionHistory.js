import { useEffect } from 'react';
import { useState } from 'react';
// import userService from '../../../services/userService';
import * as questionService from '../../../services/questionServices';
import dateParser from '../../../utils/dateParser'
import { CreatedBy } from './CreatedBy';
import styles from './QuestionHistory.module.css'

export const QuestionHistory = ({ questionId }) => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        if (questionId) {
            questionService.getHistory(questionId).then((result) => setHistory(result));
        }
    }, [questionId]);

    console.log(history);
    console.log(questionId);

    return (
        <div>
            {history.map((x) => (
                <p className={styles[x.action]} key={x._id}>
                    [{dateParser.toShort(x.createdAt)}] <CreatedBy author={x.actionBy} />: {x.action}
                </p>
            ))}
        </div>
    );
};
