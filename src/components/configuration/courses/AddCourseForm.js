import { useState } from 'react';

import { FormOverlay } from '../../common/FormOverlay';
import { TextInput } from '../../common/Inputs';
import { Logo } from '../../common/Logo';

import * as configurationServices from '../../../services/configurationServices';

import styles from './AddCourseForm.module.css';

export const AddCourseForm = ({
    onClose,
    returnResult,
    data,
    func
}) => {
    const [formData, setFormData] = useState(data || {});
    const disabled = func === 'details';
    
    let functionTitle = func.charAt(0).toUpperCase() + func.slice(1);
    
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            // Parse to number for proper database storage
            setFormData((state) => ({
                ...state,
                students: Number(state.students),
            }));
            let course;
            if (func === 'edit') {
                course = await configurationServices.editCourse({...formData, lastUpdatedBy: localStorage.getItem('userId')});
                console.log(formData);
                // returnResult(course, 'edit')
                returnResult({...formData, _id: data._id}, 'edit');
                // console.log(course);
                // console.log(formData);
            } else if (func === 'add' || func === 'addSimilar') {
                if(formData._id){
                    delete formData._id;
                }
                course = await configurationServices.createCourse({...formData, createdBy: localStorage.getItem('userId')});
                console.log('Submit');
                returnResult(course, 'add')
            }
            onClose();
        } catch (error) {
            throw new Error(error);
        }
    };

    const getFormData = (field, value) => {
        setFormData((state) => ({
            ...state,
            [field]: value,
        }));
    };

    return (
        <FormOverlay onClose={onClose}>
            <form onSubmit={submitHandler}>
                <Logo />

                <h2 className={styles.centered}>{functionTitle} Course</h2>

                <TextInput name="title" getValues={getFormData} inValue={formData.title} disabled={disabled}>
                    Title
                </TextInput>

                <div className={styles.grid}>
                    <TextInput name="internalRef" getValues={getFormData} inValue={formData.internalRef} disabled={disabled}>
                        Internal Reference
                    </TextInput>

                    <TextInput name="location" getValues={getFormData} inValue={formData.location} disabled={disabled}>
                        Location
                    </TextInput>

                    <TextInput name="students" type="number" getValues={getFormData} inValue={formData.students} disabled={disabled}>
                        Students
                    </TextInput>

                    <div></div>

                    <TextInput name="start" type="date" getValues={getFormData} inValue={formData.start && formData.start.split('T')[0]} disabled={disabled}>
                        Start
                    </TextInput>

                    <TextInput name="end" type="date" getValues={getFormData} inValue={formData.end && formData.end.split('T')[0]} disabled={disabled}>
                        End
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
