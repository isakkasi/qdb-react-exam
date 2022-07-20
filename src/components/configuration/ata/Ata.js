import { useEffect, useState } from 'react';

import { AddAtaForm } from './AddAtaForm';
import { NewItemBtn } from '../../common/NewItemBtn';
import { DetailsButtons } from '../../common/DetailsButtons';

import * as configurationServices from '../../../services/configurationServices';
import { returnResult } from '../functions/returnResult';

import styles from './Ata.module.css';

export const Ata = () => {
    const [ata, setAta] = useState([]);

    const [formOpen, setFormOpen] = useState(false);
    const [details, setDetails] = useState({ id: null, display: false });

    useEffect(() => {
        configurationServices.getAllAta()
            .then((result) => setAta(result));
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
            display: !state.display,
        }));
    };

    let table = ata.map((x) => {
        return (
            <>
                <tr key={x._id} onClick={(e) => selectHandler(e, x._id)} className={details.id === x._id && details.display ? styles.active : 'dummy'}>
                    <td>
                        <div className={styles.center}> {x.ata} </div>{' '}
                    </td>
                    <td>{x.title}</td>
                </tr>

                {details.id === x._id && details.display && (
                    <tr className={styles.noBorder} key={x._id + 'd'}>
                        <td colSpan={6} className={styles.details}>
                            <div className={styles.right}>
                                <DetailsButtons
                                    data={x}
                                    returnResult={(course, func) => returnResult(setAta, course, func)}
                                    Form={AddAtaForm}
                                    itemType="ata"
                                />
                            </div>
                        </td>
                    </tr>
                )}
            </>
        );
    });

    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>
                            <div className={styles.center}> ATA</div>
                        </th>

                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>{table}</tbody>
            </table>
            <NewItemBtn onClick={addNew}>Add Ata</NewItemBtn>
            {formOpen && <AddAtaForm onClose={onClose} returnResult={(course, func) => returnResult(setAta, course, func)} func="add" />}
        </div>
    );
};
