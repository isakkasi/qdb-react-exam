import { useEffect, useState } from 'react';

import { AddAtaForm } from './AddAtaForm';
import { NewItemBtn } from '../../common/NewItemBtn';
import { DetailsButtons } from '../../common/DetailsButtons';

import * as configurationServices from '../../../services/configurationServices';
import { returnResult } from '../functions/returnResult';

import styles from './Ata.module.css';
import { useContext } from 'react';
import { DataContext } from '../../../contexts/DataContext';

export const Ata = () => {
    const [ata, setAta] = useState([]);

    const [formOpen, setFormOpen] = useState(false);
    
    const [details, setDetails] = useState({ id: null, display: false });

    const {data} = useContext(DataContext)

    useEffect(() => {
        setAta(state => data.ata || [])
        // configurationServices.getAllAta().then((result) => setAta(result));
    }, [data]);

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
            {ata.sort((a,b) => a.ata.localeCompare(b.ata)).map((x) => 
            
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
                                returnResult={(course, func) => returnResult(setAta, course, func)}
                                Form={AddAtaForm}
                                itemType="ata"
                            />
                    ) : (<span>{x.title}</span>)}
                    
                </div>
            
        )}
    
            </div>
            <NewItemBtn onClick={addNew}>Add Ata</NewItemBtn>


            {formOpen && <AddAtaForm onClose={onClose} returnResult={(course, func) => returnResult(setAta, course, func)} func="add" />}
        </div>
    );
};
