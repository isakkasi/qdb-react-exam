import { useState } from 'react';
import { useEffect } from 'react';
// import { useContext } from 'react';

// import { AuthContext } from '../../../contexts/AuthContext';
import * as request from '../../../services/utils/requester';
import * as examServices from '../../../services/examServices';
import stringParser from '../../../utils/stringParser';
import { FormOverlay } from '../../common/FormOverlay';
import { SelectInput, TextInput } from '../../common/Inputs';
import { Logo } from '../../common/Logo';

import styles from './AddExamForm.module.css';

export const AddExamForm = ({ onClose, data, func, addExam }) => {
    func = 'add';

    // const { auth } = useContext(AuthContext);
    const [formData, setFormData] = useState(
        data || {
            ref: '',
            course: '',
            // title: '',
            date: '',
            students: 0,
            phase: '',
            status: '', //['Planned', 'Executed', 'Cancelled'] },
            // author: '',
            examiner: '',
            invigilator: '',
            // questions: [],
            // questionsJSON: '',
        }
    );

    let exam = {};

    const [course, setCourse] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        request.get('/course').then((result) => {
            setCourse((state) => result);
            setFormData(state => {
                return {...state, ref: result.length + 1}
            })
        });
    }, []);

    useEffect(() => {
        request.get('/user/details').then((result) => setUser((state) => result));
    }, []);

    let functionTitle = stringParser.capFirst(func);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            let exam = {};
            exam = await examServices.create(formData);
            addExam(exam);
            console.log(formData);
            onClose();
        } catch (error) {
            throw new Error(error);
        }
    };

    const getFormData = (field, value) => {
        setFormData((state) => {
            // console.log(state);

            return {
                ...state,
                [field]: value,
            };
        });
        
    };

    return (
        <FormOverlay onClose={onClose}>
            <form onSubmit={submitHandler}>
                <Logo />

                <h2 className={styles.centered}>{functionTitle} Exam</h2>

                <div className={`${styles.grid} ${styles['grid-column-80']}`}>
                    <div>
                        <TextInput name="ref" type="text" getValues={getFormData} inValue={formData.ref}>
                            Internal ID
                        </TextInput>

                        <SelectInput name="course" inValue={formData.course} getValues={getFormData} options={course} />
                    </div>
                    <div>
                        <TextInput name="date" type="date" getValues={getFormData} inValue={formData.date}>
                            Date
                        </TextInput>
                        <TextInput name="students" type="number" getValues={getFormData} inValue={formData.students}>
                            Students
                        </TextInput>
                        <TextInput name="phase" type="text" getValues={getFormData} inValue={formData.phase}>
                            Phase
                        </TextInput>
                    </div>
                </div>

                <SelectInput name="examiner" inValue={formData.examiner} getValues={getFormData} options={user} />
                <SelectInput name="invigilator" inValue={formData.invigilator} getValues={getFormData} options={user} />
                <SelectInput
                    name="status"
                    inValue={formData.status}
                    getValues={getFormData}
                    options={[
                        { _id: 'Planned', title: 'Planned' },
                        { _id: 'Executed', title: 'Executed' },
                        { _id: 'Cancelled', title: 'Cancelled' },
                    ]}
                />

                <div className={styles['form-submit']}>
                    <button className={styles['save-btn']} type="submit">
                        {functionTitle}
                    </button>

                    <button className={styles['cancel-btn']} type="button" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </form>
        </FormOverlay>
    );
};
