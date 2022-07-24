import { Link } from 'react-router-dom';

import styles from './Box.module.css';

export const Box = ({options} ) => {
    return (
        <Link to="options?.link">
        <div  className={`${styles.box}`}>
            <div className={`${styles.container} ${styles[options?.color || '']}`}>
                <div className={styles.left}>
                    <i className={`${options?.icon} ${styles.icon}`}></i>
                </div>
                <div className={styles.right}>
                    <h3 className={styles.count}>{options?.count}</h3>
                </div>
                <div className={styles.clear}></div>
                <h4 className={styles.name}>{options?.name}</h4>
            </div>
        </div>
        </Link>
    );
};
