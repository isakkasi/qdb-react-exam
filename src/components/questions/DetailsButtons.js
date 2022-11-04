import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

//Context
import { RoleContext } from '../../contexts/RoleContext';

//Components
import { Delete } from '../common/Delete';

//Styling
import styles from './DetailsButtons.module.css';

export const DetailsButtons = ({ returnResult, data, Form, Details, itemType }) => {
    const { roleConfig } = useContext(RoleContext);

    const [deleteOpen, setDeleteOpen] = useState(false);

    const clickHandlerDelete = (e) => {
        setDeleteOpen((state) => !state);
    };

    const onClose = () => {
        setDeleteOpen((state) => false);
    };

    return (
        <div className={styles.detBtns}>
            <Link to={`/questions/details/${data._id}`} className={`${styles.icon} ${styles.details}`}>
                <i className="fa-solid fa-bars"></i>
            </Link>
            {roleConfig.question.create && (
                <Link to={`/questions/similar/${data._id}`} className={`${styles.icon} ${styles.addSimilar}`}>
                    <i className="fa-solid fa-square-plus"></i>
                </Link>
            )}
            {roleConfig.question.create && (
                <Link to={`/questions/edit/${data._id}`} className={`${styles.icon} ${styles.edit}`}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </Link>
            )}
            {roleConfig.question.del && (
                <button className={`${styles.icon} ${styles.delete}`} name="delete" onClick={clickHandlerDelete}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            )}
            {deleteOpen && <Delete data={data} func="delete" onClose={onClose} returnResult={returnResult} itemType={itemType} />}
        </div>
    );
};

// <button className={`${styles.icon} ${styles.details}`} name="details" onClick={clickHandlerDetails} disabled = {itemType === 'ata' || itemType === 'type' || itemType === 'course'}>
//                <i className="fa-solid fa-bars"></i>
//            </button>
// {roleAccess.create && (
//     <button className={`${styles.icon} ${styles.addSimilar}`} name="addSimilar" onClick={clickHandlerAddSimilar}>
//         <i className="fa-solid fa-square-plus"></i>
//     </button>
// )}
// {roleAccess.create && (
//     <button className={`${styles.icon} ${styles.edit}`} name="edit" onClick={clickHandlerEdit}>
//         <i className="fa-solid fa-pen-to-square"></i>
//     </button>
// )}
// {roleAccess.del && (
//     <button className={`${styles.icon} ${styles.delete}`} name="delete" onClick={clickHandlerDelete}>
//         <i className="fa-solid fa-trash-can"></i>
//     </button>
// )}
// {/* {detailsOpen && <Details data={data} onClose={onClose}/>} */}
//            {detailsOpen && <Details data={data} func="details" onClose={onClose} />}
//            {addOpen && <Form data={data} func="addSimilar" onClose={onClose} returnResult={returnResult} />}
//            {editOpen && <Form data={data} func="edit" onClose={onClose} returnResult={returnResult} />}
//            {deleteOpen && <Delete data={data} func="delete" onClose={onClose} returnResult={returnResult} itemType={itemType} />}
