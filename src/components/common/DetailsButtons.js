import { useState } from 'react';
import { Delete } from './Delete';
import styles from './DetailsButtons.module.css';

export const DetailsButtons = ({
    returnResult,
    data,
    Form,
    Details,
    itemType,
}) => {
    // const Form = children;
    



    const [detailsOpen, setDetailsOpen] = useState(false);
    const [addOpen, setAddOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    const clickHandlerDetails = (e) => {
        setDetailsOpen((state) => !state);
    };
    
    const clickHandlerAddSimilar = (e) => {
        setAddOpen((state) => !state);
    };
    const clickHandlerEdit = (e) => {
        setEditOpen((state) => !state);
    };
    const clickHandlerDelete = (e) => {
        setDeleteOpen((state) => !state);
    };

    const onClose = () => {
        // console.log('Closing atempt ...');
        setDetailsOpen((state) => false);
        setAddOpen((state) => false);
        setEditOpen((state) => false);
        setDeleteOpen((state) => false);
    }

    return (
        <div className={styles.detBtns}>
            <button className={`${styles.icon} ${styles.details}`} name="details" onClick={clickHandlerDetails}>
                <i className="fa-solid fa-bars"></i>
            </button>
            <button className={`${styles.icon} ${styles.addSimilar}`} name="addSimilar" onClick={clickHandlerAddSimilar}>
                <i className="fa-solid fa-square-plus"></i>
            </button>
            <button className={`${styles.icon} ${styles.edit}`} name="edit" onClick={clickHandlerEdit}>
                <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button className={`${styles.icon} ${styles.delete}`} name="delete" onClick={clickHandlerDelete}>
                <i className="fa-solid fa-trash-can"></i>
            </button>
            {/* {detailsOpen && <Details data={data} onClose={onClose}/>} */}
            {detailsOpen && <Details data={data} func="details" onClose={onClose}/>}
            {addOpen && <Form data={data} func="addSimilar" onClose={onClose} returnResult={returnResult} />}
            {editOpen && <Form data={data} func="edit" onClose={onClose} returnResult={returnResult} />}
            {deleteOpen && <Delete data={data} func="delete" onClose={onClose} returnResult={returnResult} itemType={itemType}/>}
        </div>
    );
};
