import { useEffect, useState } from 'react';

import { AddQuestionForm } from './question-form/QuestionForm';
import { NewItemBtn } from '../common/NewItemBtn';
import { Title } from '../common/Title';

// import * as questionServices from '../../services/questionServices';
import { returnResult } from './functions/returnResult';

import styles from './Questions.module.css';
import { Card } from './card/Card';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { getAtaById, getTypeById } from '../../services/configurationServices';
import { Filter } from './filter/Filter';
import { DataContext } from '../../contexts/DataContext';
// import { requester } from '../../services/utils/requester';

export const Questions = () => {
    
    const { auth } = useContext(AuthContext);
    const {data} = useContext(DataContext)
    // console.log(data);
    
    const [questions, setQuestions] = useState([]);
    const [filteredQuestions, setFilteredQuestions] = useState(questions || []);
    const [formOpen, setFormOpen] = useState(false);

    useEffect(() => {
        if (auth.accessToken) {
            // questionServices.getAll().then((result) => setQuestions(result));
            setQuestions(data.questions || []);
        } else {
            setQuestions([]);
        }
    }, [auth, data.questions]);

    useEffect(() => {
        const modQuestions = questions.map((x) => async (x) => {
            if (typeof x.ata === 'string') {
                console.log('The ata is string');
                const result = await getAtaById(x.ata);
                x.ata = result;
                setQuestions((state) => modQuestions);
                return x;
            } else {
                return x;
            }
        });
    }, [questions]);

    // useEffect(() => {
    //     const modQuestions = questions.map((x) => async (x) => {
    //         if (typeof x.type === 'string') {
    //             console.log('The type is string');
    //             const result = await getTypeById(x.type);
    //             x.type = result;
    //             setQuestions((state) => modQuestions);
    //             return x;
    //         } else {
    //             return x;
    //         }
    //     });
    // }, [questions]);

    useEffect(() => {
        setFilteredQuestions((state) => questions);
    }, [questions]);

    // const addNew = () => {
    //     setFormOpen(true);
    // };

    // const onClose = () => {
    //     setFormOpen(false);
    // };

    const filterQuestions = (selectedFilter) => {
        // console.log(questions[0]);
        setFilteredQuestions((state) => {
            return questions.filter((x) => {
                return (
                    (x.type.includes(selectedFilter.type)  || selectedFilter.type === 'any') &&
                    (x.ata._id === selectedFilter.ata || selectedFilter.ata === 'any') &&
                    (x.level === Number(selectedFilter.level) || selectedFilter.level === 'any')
                );
            });
        });
    };

    return (
        <div className={styles.panel}>
            <Title icon="fa-solid fa-circle-question">Questions</Title>

            <Filter questions={questions} filterQuestions={filterQuestions} qty={filteredQuestions.length} />

            <NewItemBtn >Add Question</NewItemBtn>
            {filteredQuestions.length > 0 ? (
                filteredQuestions.sort((a,b) => a.ata.ata.localeCompare(b.ata.ata)).map((x) => (
                    <Card
                        key={x._id}
                        question={x}
                        returnResult={(question, func) => returnResult(setQuestions, question, func)}
                        Form={AddQuestionForm}
                        itemType="question"
                    />
                ))
            ) : (
                <h2>No questions loaded</h2>
            )}
            {/* {formOpen && <AddQuestionForm onClose={onClose} returnResult={(question, func) => returnResult(setQuestions, question, func)} func="add" />} */}
        </div>
    );
};
