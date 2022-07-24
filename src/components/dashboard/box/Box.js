import { Link } from 'react-router-dom';

import styles from './Box.module.css';

// export const Box = ({ count, icon, name, color }) => {
export const Box = ({options} ) => {
    // console.log(options?.name);
    return (
        <Link to="options?.link">
        <div  className={`${styles.box}`}>
            <div className={`${styles.container} ${styles[options?.color || '']}`}>
                <div className="w3-left">
                    <i className={`${options?.icon} ${styles.icon}`}></i>
                </div>
                <div className="w3-right">
                    <h3>{options?.count}</h3>
                </div>
                <div className="w3-clear"></div>
                <h4>{options?.name}</h4>
            </div>
        </div>
        </Link>
    );
};
