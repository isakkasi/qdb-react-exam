import { Title } from '../common/Title';
// import appStyles from '../../App.module.css';
import styles from './Exams.module.css';
import { useState } from 'react';
// import { useContext } from 'react';
// import { AuthContext } from '../../contexts/AuthContext';
// import { NewItemBtn } from '../common/NewItemBtn';
import { AddExamForm } from './form/AddExamForm';
import { Filter } from './filter/Filter';
import { NewItemBtn } from '../common/NewItemBtn';
import { useEffect } from 'react';

import * as examServices from '../../services/examServices';
import * as configurationServices from '../../services/configurationServices';

export const Exams = () => {
    const statusStyles = {
        'Planned': styles.yellow,
        'Executed': styles.green,
        'Cancelled': styles.red,
    };

    // const { auth } = useContext(AuthContext);

    const [formOpen, setFormOpen] = useState(false);
    const [exams, setExams] = useState([]);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        examServices.getAll().then((result) => {
            // console.log(result);
            setExams((state) => result);
        });
        configurationServices.getAllCourses().then((result) => {
            setCourses((state) => result);
        });
    }, []);

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

    return (
        <div className={styles.container}>
            <Title icon="fa fa-graduation-cap fa-fw">Exams</Title>
            <Filter />
            In progress ...
            <div className={styles.courses}>
                {courses.map((x) => (
                    <div className={styles.courseElement}>
                        {x.internalRef} - {x.title}
                        <div className={styles.exams}>
                            {exams.map((y) => {
                                if (y.course === x._id) {
                                    return (
                                        <div className={`${styles.exam} ${statusStyles[y.status]}`} key={y._id}>
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
