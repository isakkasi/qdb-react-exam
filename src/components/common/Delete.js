import { useState } from 'react';

import { FormOverlay } from '../common/FormOverlay';

import * as configurationServices from '../../services/configurationServices';

import styles from './Delete.module.css';

export const Delete = ({
    onClose,
    returnResult,
    data,
    func
}) => {

    let functionTitle = func.charAt(0).toUpperCase() + func.slice(1);
    let disabled = localStorage.getItem('userId') !== data.createdBy;

    //This shall be removed when user limitations are applied
    disabled = false;

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
                await configurationServices.deleteCourse(data);
                returnResult(data, 'delete');
            onClose();
        } catch (error) {
            throw new Error(error);
        }
    };


    return (
        <FormOverlay onClose={onClose}>
            <form onSubmit={submitHandler}>

                <h2 className={styles.centered}>{functionTitle} Course</h2>

                <h3>Are you sure you want to delete course "{data.title}"?</h3>


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
