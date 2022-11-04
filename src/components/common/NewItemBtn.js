import { Link } from 'react-router-dom';
import styles from './NewItemBtn.module.css';

export const NewItemBtn = ({ children, onClick }) => {
    // const addHandler = () => {
    //     onClick();
    // };

    return (
        <div className={styles.right}>
            <Link to={'/questions/new'} className={styles.addBtn}>
                {children}
            </Link>
        </div>
    );
};

// <button className={styles.addBtn} onClick={addHandler}>
//     {/* <strong>+</strong> */}
//     <strong>{children}</strong>
// </button>
