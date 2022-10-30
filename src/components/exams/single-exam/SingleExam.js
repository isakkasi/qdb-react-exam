import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import * as examServices from '../../../services/examServices';
import userService from '../../../services/userService';

import styles from './SingleExam.module.css';

export const SingleExam = () => {
    let { id } = useParams();

    const [exam, setExam] = useState({});
    const [examiner, setExaminer] = useState({ username: 'not loaded' });
    const [invigilator, setInvigilator] = useState({ username: 'not loaded' });
    const [ata, setAta] = useState([])

    useEffect(() => {
        examServices.getById(id).then((res) => setExam((state) => res));
    }, [id]);

    useEffect(() => {
        if (exam.hasOwnProperty('examiner')) {
            userService
                .getUserDetails(exam.examiner)
                .then((res) => {
                    setExaminer((state) => res);
                })
                .catch((err) => console.log(err));
        }
        if (exam.hasOwnProperty('invigilator')) {
            userService
                .getUserDetails(exam.invigilator)
                .then((res) => {
                    setInvigilator((state) => res);
                })
                .catch((err) => console.log(err));
        }
    }, [exam.examiner, exam.invigilator, exam]);


    return (
        <div>
            <div className={styles.header}>
                <h1>Exam internal reference: {exam.ref}</h1>
                <div className={styles.headerDetails}>
                    <p>Course: {exam.course?.title}</p>
                    <p>Examiner: {examiner?.fullName}</p>
                    <p>Invigilator: {examiner?.fullName}</p>
                </div>
                <Link to={'/exams'}>
                    {' '}
                    <i className="fa-solid fa-circle-arrow-left"></i>{' '}
                </Link>
            </div>
            <div className={styles.settings}>
                <p>Select ATA:</p>
            </div>
        </div>
    );
};
