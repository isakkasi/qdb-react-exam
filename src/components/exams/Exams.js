import { Title } from '../common/Title';
// import appStyles from '../../App.module.css';
import styles from './Exams.module.css';
import { useContext, useState } from 'react';
// import { useContext } from 'react';
// import { AuthContext } from '../../contexts/AuthContext';
// import { NewItemBtn } from '../common/NewItemBtn';
import { AddExamForm } from './form/AddExamForm';
import { Filter } from './filter/Filter';
import { NewItemBtn } from '../common/NewItemBtn';
import { useEffect } from 'react';

import * as examServices from '../../services/examServices';
import * as configurationServices from '../../services/configurationServices';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../contexts/DataContext';

export const Exams = () => {
    const statusStyles = {
        Planned: styles.yellow,
        Executed: styles.green,
        Cancelled: styles.red,
    };

    // const { auth } = useContext(AuthContext);

    const [formOpen, setFormOpen] = useState(false);
    const [exams, setExams] = useState([]);
    const [courses, setCourses] = useState([]);

    const {data} = useContext(DataContext)
    

    const navigate = useNavigate();

    useEffect(() => {
        examServices.getAll().then((result) => {
            // console.log(result);
            setExams((state) => result);
        });
        setCourses(state => data.course || [])
    }, [data]);

    // const addNew = () => {
    //     setFormOpen(true);
    // };

    const onClose = () => {
        setFormOpen(false);
    };

    const createNewExamBtn = () => {
        setFormOpen((state) => true);
    };

    const addExam = (exam) => {
        setExams((state) => [...state, exam]);
    };

    const selectExam = (id) => {
        // console.log(id);
        navigate('/exams/' + id);
    };

    return (
        <div className={styles.container}>
            <Title icon="fa fa-graduation-cap fa-fw">Exams</Title>
            <Filter />
            In progress ...
            <div className={styles.courses}>
                {courses.map((x) => (
                    <div className={styles.courseElement} key={x._id}>
                        {x.internalRef} - {x.title}
                        <div className={styles.exams}>
                            {exams.map((y) => {
                                if (y.course === x._id) {
                                    return (
                                        <div className={`${styles.exam} ${statusStyles[y.status]}`} key={y._id} onClick={() => selectExam(y._id)}>
                                            {y.ref} - Phase: {y.phase}
                                        </div>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </div>
                    </div>
                ))}
            </div>
            {/* <NewItemBtn onClick={addNew}>Add Exam</NewItemBtn> */}
            {formOpen && (
                <AddExamForm
                    onClose={onClose}
                    addExam={addExam}
                    // returnResult={(question, func) => returnResult(setQuestions, question, func)}
                    // func="add"
                />
            )}
            <NewItemBtn onClick={createNewExamBtn}>Add Exam</NewItemBtn>
        </div>
    );
};
