import { useState } from 'react';

import { FormOverlay } from '../../common/FormOverlay';
import { TextInput } from '../../common/Inputs';
import { Logo } from '../../common/Logo';

import * as configurationServices from '../../../services/configurationServices';

import styles from './AddAtaForm.module.css';

export const AddAtaForm = ({ onClose, getNewAta }) => {
    const [formData, setFormData] = useState({});

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const ata = await configurationServices.createAta(formData);
            console.log(ata);
            onClose();
            getNewAta(ata);
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

                <h2 className={styles.centered}>Add Ata</h2>

                <TextInput name="ata" getValues={getFormData}>
                    ATA
                </TextInput>

                    <TextInput name="title" getValues={getFormData}>
                        Title
                    </TextInput>

                <div className={styles['form-submit']}>
                    <button className={styles['save-btn']} type="submit">
                        Add ATA
                    </button>
                    <button className={styles['cancel-btn']} type="button" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </form>
        </FormOverlay>
    );
};
