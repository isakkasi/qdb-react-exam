import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import * as examServices from '../../../services/examServices';
import userService from '../../../services/userService';
import * as configurationServices from '../../../services/configurationServices';

import styles from './SingleExam.module.css';
import { AtaInput } from './ata-input/AtaInput';

export const SingleExam = () => {
    let { id } = useParams();

    const [exam, setExam] = useState({});
    const [examiner, setExaminer] = useState({ username: 'not loaded' });
    const [invigilator, setInvigilator] = useState({ username: 'not loaded' });
    const [ata, setAta] = useState([]);
    const [selectedAta, setSelectedAta] = useState([]);

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

    useEffect(() => {
        configurationServices.getAllAta().then((res) => setAta((state) => res));
    }, []);

    const selectAta = (ataId) => {
        setSelectedAta((state) => {
            let index = state.findIndex((a) => a.id === ataId);
            if (index < 0) {
                return [...state, { id: ataId, l1: 0, l2: 0, l3: 0 }];
            } else {
                return state.filter((x) => x.id !== ataId);
            }
        });
        // console.log(selectedAta);
    };

    const ataFilter = (id) => {
        return ata.filter((x) => x._id === id)[0];
    };

    const changeAtaSettings = (ataId, name, value) => {
        setSelectedAta((state) => {
            let arr = state.slice();
            let index = arr.findIndex((x) => x.id === ataId);
            console.log(index);
            arr[index][name] = Number(value);
            console.log(arr);
            return arr;
        });
        // console.log(ataId, name, value);
        // console.log(selectedAta);
    };

    return (
        <div>
            <div className={styles.header}>
                <h1>Exam internal reference: {exam.ref}</h1>
                <div className={styles.headerDetails}>
                    <p>Course: {exam.course?.title}</p>
                    <p>Examiner: {examiner?.fullName}</p>
                    <p>Invigilator: {invigilator?.fullName}</p>
                </div>
                <Link to={'/exams'}>
                    {' '}
                    <i className="fa-solid fa-circle-arrow-left"></i>{' '}
                </Link>
            </div>
            <div className={styles.settings}>
                <p>Select ATA:</p>
                <div className={styles.ataList}>
                    {ata
                        .sort((a, b) => a.ata.localeCompare(b.ata))
                        .map((x) => (
                            <div
                                key={x._id}
                                className={`${styles.ata} ${selectedAta.some((y) => x._id === y.id) ? styles.selectedAta : null}`}
                                onClick={() => selectAta(x._id)}
                            >
                                {x.ata}
                            </div>
                        ))}
                </div>
                <div className={styles.defineAta}>
                    <div className={styles.defineAtaHeader}>
                        <span>ATA</span>
                        <span>Level 1</span>
                        <span>Level 2</span>
                        <span>Level 3</span>
                        <span>Total</span>
                    </div>
                    <div className={styles.defineAtaBody}>
                        {selectedAta.map((x) => (
                            <div key={x.id} className={styles.defineAtaRow}>
                                <span>
                                    {ataFilter(x.id).ata} - {ataFilter(x.id).title}
                                </span>
                                <AtaInput name="l1" ataId={x.id} value={x.l1} onChangeHandler={changeAtaSettings} />
                                <AtaInput name="l2" ataId={x.id} value={x.l2} onChangeHandler={changeAtaSettings} />
                                <AtaInput name="l3" ataId={x.id} value={x.l3} onChangeHandler={changeAtaSettings} />
                                <span>{x.l1 + x.l2 + x.l3}</span>
                                {/* <AtaInput name="qty" ataId={x.id} value={x.qty} onChangeHandler={changeAtaSettings} /> */}
                                {/* <AtaInput name="level" ataId={x.id} max={3} min={1} value={x.level} onChangeHandler={changeAtaSettings} /> */}
                            </div>
                        ))}
                    </div>
                    <div className={styles.total}>
                        <span>Total questions: {selectedAta.map((x) => x.l1 + x.l2 + x.l3).reduce((s, a) => s + a, 0)}</span>
                        <button className={styles.generateBtn}>Generate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
