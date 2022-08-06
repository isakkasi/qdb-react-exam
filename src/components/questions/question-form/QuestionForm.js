import { useState } from 'react';

import { FormOverlay } from '../../common/FormOverlay';
import { TextInput } from '../../common/Inputs';
import { Logo } from '../../common/Logo';

import * as questionServices from '../../../services/questionServices';
import * as configurationServices from '../../../services/configurationServices';

import styles from './QuestionForm.module.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

export const AddQuestionForm = ({ onClose, returnResult, data, func }) => {
    const {auth} = useContext(AuthContext)
    const [formData, setFormData] = useState(
        data || {
            question: '',
            ansA: '',
            ansB: '',
            ansC: '',
            correctAns: '',
            level: '',
            ata: '',
            author: auth._id,
        }
    );
    const [ata, setAta] = useState([])

    useEffect(() => {
        configurationServices.getAllAta()
        .then(result => setAta(result))
    },[])

    const disabled = func === 'details';

    // console.log(formData);

    let functionTitle = func.charAt(0).toUpperCase() + func.slice(1);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            // Parse to number for proper database storage
            setFormData((state) => ({
                ...state,
                level: Number(state.level),
            }));
            let question;
            if (func === 'edit') {
                question = await questionServices.edit(formData);
                // returnResult({ ...formData, _id: data._id }, 'edit');
                returnResult({ ...question, _id: data._id }, 'edit');
            } else if (func === 'add' || func === 'addSimilar') {
                if (formData._id) {
                    delete formData._id;
                }
                question = await questionServices.create({...formData, author: auth._id});
                returnResult(question, 'add');
            }
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

                <h2 className={styles.centered}>{functionTitle} Course</h2>

                <div className={`${styles.grid} ${styles['grid-column-80']}`}>
                        <div>
                        <label htmlFor="ata">
                            ATA
                            <select
                                htmlFor="ata"
                                name="ata"
                                className={styles.select}
                                value={formData.ata._id}
                                onChange={(e) => getFormData('ata', e.target.value)}
                            >
                                {[{_id: 0, ata: '', title: 'Select ATA ...'}, ...ata].map(x => (
                                <option key={x._id} value={x._id}>{x.ata} {x.title}</option>

                                ))}
                            </select>
                        </label>
                        </div>
                        <div>

                        <TextInput name="level" type="number" getValues={getFormData} inValue={formData.level} disabled={disabled}>
                            Level
                        </TextInput>
                        </div>
                </div>

                <TextInput name="question" getValues={getFormData} inValue={formData.question} disabled={disabled}>
                    Question
                </TextInput>

                <div className={styles.answers}>
                    <div className={`${styles.grid} ${styles['grid-column-80']}`}>
                        <div>
                            <TextInput name="ansA" getValues={getFormData} inValue={formData.ansA} disabled={disabled}>
                                AnsA
                            </TextInput>
                        </div>
                        <div>
                            <label htmlFor="correctAns">
                                <input
                                    className={styles.inputRadio}
                                    type="radio"
                                    name="correctAns"
                                    checked={formData.correctAns === 'ansA'}
                                    value={formData.correctAns}
                                    onChange={(e) => getFormData('correctAns', 'ansA')}
                                />
                            </label>
                        </div>
                        <div>
                            <TextInput name="ansB" getValues={getFormData} inValue={formData.ansB} disabled={disabled}>
                                AnsB
                            </TextInput>
                        </div>
                        <div>
                            <label htmlFor="correctAns">
                                <input
                                    className={styles.inputRadio}
                                    type="radio"
                                    name="correctAns"
                                    checked={formData.correctAns === 'ansB'}
                                    value={formData.correctAns}
                                    onChange={(e) => getFormData('correctAns', 'ansB')}
                                />
                            </label>
                        </div>
                        <div>
                            <TextInput name="ansC" getValues={getFormData} inValue={formData.ansC} disabled={disabled}>
                                AnsC
                            </TextInput>
                        </div>
                        <div>
                            <label htmlFor="correctAns">
                                <input
                                    className={styles.inputRadio}
                                    type="radio"
                                    name="correctAns"
                                    checked={formData.correctAns === 'ansC'}
                                    value={formData.correctAns}
                                    onChange={(e) => getFormData('correctAns', 'ansC')}
                                />
                            </label>
                        </div>

                    </div>
                </div>
                

                <div className={styles['form-submit']}>
                    {!disabled && (
                        <button className={styles['save-btn']} type="submit">
                            {functionTitle}
                        </button>
                    )}
                    <button className={styles['cancel-btn']} type="button" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </form>
        </FormOverlay>
    );
};
