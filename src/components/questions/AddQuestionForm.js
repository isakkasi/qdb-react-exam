import { useState } from 'react';

import { FormOverlay } from '../common/FormOverlay';
import { TextInput } from '../common/Inputs';
import { Logo } from '../common/Logo';

import * as questionServices from '../../services/questionServices';

import styles from './AddQuestionForm.module.css';

export const AddQuestionForm = ({ onClose, returnResult, data, func }) => {
    const [formData, setFormData] = useState(data || {
        question: '',
        ansA: '',
        ansB: '',
        ansC: '',
        correctAns: '',
        level: '',
    
    });
    const [isCorrect, setIsCorrect] = useState('');

    const disabled = func === 'details';

    console.log(formData);

    let functionTitle = func.charAt(0).toUpperCase() + func.slice(1);

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            // Parse to number for proper database storage
            setFormData((state) => ({
                ...state,
                level: Number(state.level),
            }));
            let question;
            if (func === 'edit') {
                question = await questionServices.edit(formData);
                // returnResult(course, 'edit')
                returnResult({ ...formData, _id: data._id }, 'edit');
                // console.log(course);
                // console.log(formData);
            } else if (func === 'add' || func === 'addSimilar') {
                if (formData._id) {
                    delete formData._id;
                }
                question = await questionServices.create({ ...formData, author: localStorage.getItem('userId') });
                returnResult(question, 'add');
            }
            onClose();
        } catch (error) {
            throw new Error(error);
        }
    };

    const getFormData = (field, value) => {
        setFormData((state) => {
            console.log(state);
            
                return {
                    ...state,
                    [field]: value,
                };
            })
       
    };

    const radioOnChangeA = (e) => {
        console.log('A');
        setFormData(state => ({
                ...state,
                ansA: {
                    ...state.ansA,
                    isCorrect:  true,
                }
        })
        )
        
    }
    const radioOnChangeB = (e) => {
        console.log('B');
        setFormData(state => ({
            ...state,
            ansB: {
                isCorrect: true,
            }
            }
    
    ))
    }
    const radioOnChangeC = (e) => {
        console.log('C');
        setFormData(state => ({
            ...state,
            ansC: {
                ...state.ansC,
                isCorrect:  true,
            }
    })
    )
    }

    return (
        <FormOverlay onClose={onClose}>
            <form onSubmit={submitHandler}>
                <Logo />

                <h2 className={styles.centered}>{functionTitle} Course</h2>

                <TextInput name="question" getValues={getFormData} inValue={formData.question} disabled={disabled}>
                    Question
                </TextInput>

                <div className={styles.grid}>
                    <TextInput name="ansA" getValues={getFormData} inValue={formData.ansA} disabled={disabled}>
                        AnsA
                    </TextInput>
                   <input type="radio" name='correctAns' checked={formData.correctAns === 'ansA'} value={formData.correctAns} onChange={(e) => getFormData('correctAns', 'ansA')}/>

                    <TextInput name="ansB" getValues={getFormData} inValue={formData.ansB} disabled={disabled}>
                        AnsB
                    </TextInput>
                   <input type="radio" name='correctAns' checked={formData.correctAns === 'ansB'} value={formData.correctAns} onChange={(e) => getFormData('correctAns', 'ansB')}/>
                    

                    <TextInput name="ansC" getValues={getFormData} inValue={formData.ansC} disabled={disabled}>
                        AnsC
                    </TextInput>
                   <input type="radio" name='correctAns' checked={formData.correctAns === 'ansC'} value={formData.correctAns} onChange={(e) => getFormData('correctAns', 'ansC')}/>
                    

                    {/* <div></div> */}

                    <TextInput name="level" type="number" getValues={getFormData} inValue={formData.level} disabled={disabled}>
                        Level
                    </TextInput>
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
