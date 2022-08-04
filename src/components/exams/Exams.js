import { Title } from '../common/Title';
import appStyles from '../../App.module.css';
import styles from './Exams.module.css';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { NewItemBtn } from '../common/NewItemBtn';
import { AddExamForm } from './form/AddExamForm';

export const Exams = () => {
    const { auth } = useContext(AuthContext);

    const [formOpen, setFormOpen] = useState(false);

    const addNew = () => {
        setFormOpen(true);
    };

    const onClose = () => {
        setFormOpen(false);
    };

    return (
        <div>
            <Title icon="fa fa-graduation-cap fa-fw">Exams</Title>

            <NewItemBtn onClick={addNew}>Add Exam</NewItemBtn>
            {formOpen && 
                <AddExamForm
                    onClose={onClose}
                    // returnResult={(question, func) => returnResult(setQuestions, question, func)}
                    // func="add"
                />}
        </div>
    );
};
