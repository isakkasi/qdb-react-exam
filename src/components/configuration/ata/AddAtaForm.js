import { useState } from 'react';

import { FormOverlay } from '../../common/FormOverlay';
import { TextInput } from '../../common/Inputs';
import { Logo } from '../../common/Logo';

import * as configurationServices from '../../../services/configurationServices';

import styles from './AddAtaForm.module.css';

export const AddAtaForm = ({
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
            
            let ata;

            if (func === 'edit') {
                ata = await configurationServices.editAta({...formData, lastUpdatedBy: localStorage.getItem('userId')});
                
                returnResult({...formData, _id: data._id}, 'edit');
            
            
            } else if (func === 'add' || func === 'addSimilar') {
                if(formData._id){
                    delete formData._id;
                }
                ata = await configurationServices.createAta({...formData, createdBy: localStorage.getItem('userId')});
                returnResult(ata, 'add')
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

                <h2 className={styles.centered}>{functionTitle} Ata</h2>

                <TextInput name="ata" getValues={getFormData} inValue={formData.ata} disabled={disabled}>
                    ATA
                </TextInput>

                <TextInput name="title" getValues={getFormData} inValue={formData.title} disabled={disabled}>
                    Title
                </TextInput>

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
