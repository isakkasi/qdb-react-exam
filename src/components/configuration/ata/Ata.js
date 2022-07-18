import { useEffect } from 'react';
import { useState } from 'react';
import { NewItemBtn } from '../../common/NewItemBtn';
import { AddAtaForm } from './AddAtaForm';

import * as configurationServices from '../../../services/configurationServices';

export const Ata = () => {
    const [formOpen, setFormOpen] = useState(false);
    const [ata, setAta] = useState([]);

    useEffect(() => {
        configurationServices.getAllAta().then((result) => setAta(result));
    }, []);

    const addNewAta = () => {
        setFormOpen((state) => !state);
    };

    const getNewAta = (ata) => {
        if (ata) {
            setAta(state => [...state, ata]);
        }
    };

    return (
        <div>
            <table className="w3-table w3-striped">
                <thead>
                    <tr>
                        <th>ATA</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {ata.map((x) => {

                        return (
                            <tr key={x._id}>
                                <td> {x.ata} </td>
                                <td> {x.title} </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <NewItemBtn onClick={addNewAta}>Add Ata</NewItemBtn>

            {formOpen && <AddAtaForm onClose={addNewAta} getNewAta={getNewAta} />}
        </div>
    );
};
