import { useEffect, useState } from 'react';

import { AddQuestionForm } from './question-form/QuestionForm';
import { NewItemBtn } from '../common/NewItemBtn';
import { Title } from '../common/Title';

import * as questionServices from '../../services/questionServices';
import { returnResult } from './functions/returnResult';

import styles from './Questions.module.css';
import { Card } from './card/Card';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

export const Questions = () => {
    const [questions, setQuestions] = useState([]);

    const { auth } = useContext(AuthContext)

    const [formOpen, setFormOpen] = useState(false);

    useEffect(() => {
        if (auth.accessToken) {

            questionServices.getAll()
            .then((result) => setQuestions(result))
            
        } else {
            setQuestions([])
        }
    }, [auth]);

    const addNew = () => {
        setFormOpen(true);
    };

    const onClose = () => {
        setFormOpen(false);
    };


    return (
        <div className={styles.panel}>
            <Title icon="fa-solid fa-circle-question">Questions</Title>

            {questions.length> 0 ? questions.map((x) => (
                
                    <Card
                    key={x._id}
                    question={x}
                    returnResult={(question, func) => returnResult(setQuestions, question, func)}
                    Form={AddQuestionForm}
                    itemType="question"
                    />
                
            )) : <h2>No questions loaded</h2> }
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

