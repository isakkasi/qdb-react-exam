import { useEffect, useState } from 'react';

import { AddQuestionForm } from './AddQuestionForm';
import { NewItemBtn } from '../common/NewItemBtn';
import { Title } from '../common/Title';

import * as questionServices from '../../services/questionServices';
import { returnResult } from './functions/returnResult';

import styles from './Questions.module.css';
import { Card } from './question-form/Card/Card';

export const Questions = () => {
    const [questions, setQuestions] = useState([]);

    const [formOpen, setFormOpen] = useState(false);

    useEffect(() => {
        questionServices.getAll().then((result) => setQuestions(result));
    }, []);

    const addNew = () => {
        setFormOpen(true);
    };

    const onClose = () => {
        setFormOpen(false);
    };


    return (
        <div className={styles.panel}>
            <Title icon="fa-solid fa-circle-question">Questions</Title>

            {questions.map((x) => (
                
                    <Card
                    key={x._id}
                    question={x}
                    returnResult={(question, func) => returnResult(setQuestions, question, func)}
                    Form={AddQuestionForm}
                    itemType="question"
                    />
                
            ))}
            <NewItemBtn onClick={addNew}>Add Question</NewItemBtn>
            {formOpen &&
                <AddQuestionForm
                    onClose={onClose}
                    returnResult={(question, func) => returnResult(setQuestions, question, func)}
                    func="add"
                />
            }
        </div>
    );
};

