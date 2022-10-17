import { useEffect, useState } from 'react';

import { AddTypeForm } from './AddTypeForm';
import { NewItemBtn } from '../../common/NewItemBtn';
import { DetailsButtons } from '../../common/DetailsButtons';

import * as configurationServices from '../../../services/configurationServices';
import { returnResult } from '../functions/returnResult';

import styles from './Type.module.css';

export const Type = () => {
    const [type, setType] = useState([]);

    const [formOpen, setFormOpen] = useState(false);
    
    const [details, setDetails] = useState({ id: null, display: false });

    useEffect(() => {
        configurationServices.getAllType().then((result) => setType(result));
    }, []);

    const addNew = () => {
        setFormOpen((state) => !state);
    };

    const onClose = () => {
        setFormOpen(false);
    };

    const selectHandler = (e, rowId) => {
        setDetails((state) => ({
            id: rowId,
            display: true,
        }));
    };
    const unselectHandler = (e, rowId) => {
        setDetails((state) => ({
            id: null,
            display: false,
        }));
    };

    /* let list = ata.sort((a,b) => a.ata.localeCompare(b.ata)).map((x) => {
        return (
            <>
                <div
                    key={x._id}
                    onMouseEnter={(e) => selectHandler(e, x._id)}
                    onMouseLeave={(e) => unselectHandler(e, x._id)}
                    className={styles.item}
                >
                    <span>{x.ata}</span>
                    {details.id === x._id && details.display ? (
                            <DetailsButtons data={x} returnResult={(course, func) => returnResult(setAta, course, func)} Form={AddAtaForm} itemType="ata" />
                    ) : (<span>{x.title}</span>)}
                    
                </div>
            </>
        );
    }); */

    return (
        <div>
            <div className={styles.container}>
            {type.sort((a,b) => a.type.localeCompare(b.type)).map((x) => 
            
                <div
                    key={x._id}
                    onMouseEnter={(e) => selectHandler(e, x._id)}
                    onMouseLeave={(e) => unselectHandler(e, x._id)}
                    className={styles.item}
                >
                    <span>{x.ata}</span>
                    {details.id === x._id && details.display ? (
                            <DetailsButtons
                                data={x}
                                returnResult={(course, func) => returnResult(setType, course, func)}
                                Form={AddTypeForm}
                                itemType="type"
                            />
                    ) : (<span>{x.title}</span>)}
                    
                </div>
            
        )}
    
            </div>
            <NewItemBtn onClick={addNew}>Add Type</NewItemBtn>


            {formOpen && <AddTypeForm onClose={onClose} returnResult={(course, func) => returnResult(setType, course, func)} func="add" />}
        </div>
    );
};
