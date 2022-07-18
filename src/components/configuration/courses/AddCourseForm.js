import { useState } from 'react';

import { FormOverlay } from '../../common/FormOverlay';
import { TextInput } from '../../common/Inputs';
import { Logo } from '../../common/Logo';

import * as configurationServices from '../../../services/configurationServices';

import styles from './AddCourseForm.module.css';

export const AddCourseForm = ({ onClose, getNewCourse }) => {
    const [formData, setFormData] = useState({});

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            setFormData((state) => ({
                ...state,
                students: Number(state.students),
            }));
            const course = await configurationServices.createCourse(formData);
            console.log(course);
            onClose();
            getNewCourse(course);
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

                <h2 className={styles.centered}>Add Course</h2>

                <TextInput name="title" getValues={getFormData}>
                    Title
                </TextInput>

                <div className={styles.grid}>

                    <TextInput name="internalRef" getValues={getFormData}>
                        Internal Reference
                    </TextInput>

                    <TextInput name="location" getValues={getFormData}>
                        Location
                    </TextInput>

                    <TextInput name="students" type="number" getValues={getFormData}>
                        Students
                    </TextInput>

                    <div></div>

                    <TextInput name="start" type="date" getValues={getFormData}>
                        Start
                    </TextInput>

                    <TextInput name="end" type="date" getValues={getFormData}>
                        End
                    </TextInput>
                </div>

                <div className={styles['form-submit']}>
                    <button className={styles['save-btn']} type="submit">
                        Add Course
                    </button>
                    <button className={styles['cancel-btn']} type="button" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </form>
        </FormOverlay>
    );
};
