import { useState, useEffect } from 'react';
import * as questionServices from '../../services/questionServices';
import { FormOverlay } from '../common/FormOverlay';

import styles from './QuestionForm.module.css';

export const QuestionForm = ({ getIsOpen, addRow }) => {
    const [question, setQuestion] = useState({
        question: '',
        ansA: {
            text: '',
            isCorrect: false,
        },
        ansB: {
            text: '',
            isCorrect: false,
        },
        ansC: {
            text: '',
            isCorrect: false,
        },
    });

    console.log(question);

    const changeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name + ' ' + value);
        setQuestion((q) => {
            if (name === 'question') {
                return { ...q, question: value };
            } else if (name === 'correct') {
                return {
                    ...q,
                    ansA: { ...q.ansA, isCorrect: false },
                    ansB: { ...q.ansB, isCorrect: false },
                    ansC: { ...q.ansC, isCorrect: false },
                    [value]: { ...q[value], isCorrect: true },
                };
            } else {
                return { ...q, [name]: { ...q[name], text: value } };
            }
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        questionServices.create(question).then((result) => {
            getIsOpen();
            addRow(result);
        });
    };

    return (
        <FormOverlay onClose={getIsOpen}>
            <form onSubmit={submitHandler}>
                <div>
                    <div className="w3-container">
                        <label className="w3-left w3-show-inline-block  w3-xlarge w3-margin-right">Question</label>
                        <textarea className="w3-input" type="text" onChange={changeHandler} name="question" value={question.question}></textarea>
                    </div>
                    <div className="w3-container w3-margin-top">
                        <label className="w3-left w3-show-inline-block  w3-xlarge w3-margin-right">A. </label>
                        <div className="w3-twothird">
                            <textarea className="w3-input" type="text" onChange={changeHandler} name="ansA" value={question.ansA.text}></textarea>
                        </div>
                        <div className="w3-quarter">
                            <input className="w3-radio w3-margin-left" type="radio" name="correct" value="ansA" onChange={changeHandler} />
                        </div>
                    </div>
                    <div className="w3-container w3-margin-top">
                        <label className="w3-left w3-show-inline-block  w3-xlarge w3-margin-right">B. </label>
                        <div className="w3-twothird">
                            <textarea className="w3-input" type="text" onChange={changeHandler} name="ansB" value={question.ansB.text}></textarea>
                        </div>
                        <div className="w3-quarter">
                            <input className="w3-radio w3-margin-left" type="radio" name="correct" value="ansB" onChange={changeHandler} />
                        </div>
                    </div>
                    <div className="w3-container w3-margin-top">
                        <label className="w3-left w3-show-inline-block  w3-xlarge w3-margin-right">C. </label>
                        <div className="w3-twothird">
                            <textarea className="w3-input" type="text" onChange={changeHandler} name="ansC" value={question.ansC.text}></textarea>
                        </div>
                        <div className="w3-quarter">
                            <input className="w3-radio w3-margin-left" type="radio" name="correct" value="ansC" onChange={changeHandler} />
                        </div>
                    </div>
                </div>

                <input type="submit" className={styles['save-btn']} value="Save" />
            </form>
        </FormOverlay>
    );
};
