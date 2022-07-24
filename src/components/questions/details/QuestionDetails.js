import { useEffect, useState } from 'react';

import * as questionServices from '../../../services/questionServices';

import dateParser from '../../../utils/dateParser';

import { FormOverlay } from '../../common/FormOverlay';

import styles from './QuestionDetails.module.css';

export const QuestionDetails = ({ data, onClose, func }) => {
    const [question, setQuestion] = useState({});
    const [comments, setComments] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        questionServices.getById(data._id).then((result) => setQuestion(result));
    }, [data._id]);

    useEffect(() => {
        if (question._id) {
            questionServices.getAllComments(question._id).then((result) => setComments(result));
        }
    }, [question._id]);

    const commentSubmitHandler = (e) => {
        e.preventDefault();
        questionServices.createComment({ comment: input, author: localStorage.getItem('userId') }, question._id).then(() => {
            setComments((state) => [
                ...state,
                {
                    comment: input,
                    author: {
                        username: localStorage.getItem('username'),
                    },
                },
            ]);

            setInput('');
        });
    };

    const commentChangeHandler = (e) => {
        setInput(e.target.value);
    };

    return (
        <FormOverlay onClose={onClose}>
            <div className={styles.section}>
                <div className={styles.title}>
                    <h2>Details</h2>
                </div>

                <div className={styles.container}>

                    <div className={styles.question}>
                        <p>Q: {question.question}</p>
                        <p className={`${styles.answer} ${question.correctAns === 'ansA' ? styles.correct : ''}`}>A: {question.ansA}</p>
                        <p className={`${styles.answer} ${question.correctAns === 'ansB' ? styles.correct : ''}`}>B: {question.ansB}</p>
                        <p className={`${styles.answer} ${question.correctAns === 'ansC' ? styles.correct : ''}`}>C: {question.ansC}</p>
                        <p>Level: {question.level}</p>
                        <p>ATA: {question.ata?.ata}</p>
                    </div>

                    <div className={styles.general}>
                        <div style={{ textAlign: 'right' }}>General</div>
                        <table className={styles.table}>
                            <tr>
                                <td>Created by: </td>
                                <td>{question.author?.username}</td>
                            </tr>
                            <tr>
                                <td>Created on: </td>
                                <td>{dateParser.toShort(question.createdAt)}</td>
                            </tr>
                            <tr>
                                <td>Last updated on: </td>
                                <td>{dateParser.toShort(question.updatedAt)}</td>
                            </tr>
                        </table>
                    </div>
                    <div className={styles.stats}>
                    <div style={{ textAlign: 'right' }}>Stats</div>
                    <table className={styles.table}>
                            <tr>
                                <td>Used in exams: </td>
                                <td>[no data available]</td>
                            </tr>
                            <tr>
                                <td>Total mistakes: </td>
                                <td>[no data available]</td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>active || on hold</td>
                            </tr>
                        </table>
                    </div>
                    <div className={styles.comments}>
                    <div style={{ textAlign: 'right' }}>Comments</div>
                        {comments.map((x) => (
                            <div key={x._id} className={styles.single}>
                                <span className={styles.author}>{x.author?.username}: </span>
                                {x.comment}
                            </div>
                        ))}
                        <div>
                            <form onSubmit={commentSubmitHandler}>
                                <textarea name="comment" cols="60" rows="3" placeholder="Comment ..." onChange={commentChangeHandler} value={input} className={styles.textarea}/>
                                <input type="submit" value="Add" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </FormOverlay>
    );
};
