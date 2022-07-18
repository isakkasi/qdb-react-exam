import { useState } from 'react';

import styles from './Cards.module.css';

export const Card = ({ title, children }) => {
    const [isActive, setIsActive] = useState(false);

    const isActiveHandler = (e) => {
        setIsActive((state) => !state);
        console.log('clicked ' + isActive);
    };

    return (
        <div>
            <button onClick={isActiveHandler} className={styles.title}>
                <div>{title}</div>
                <div className={styles.arrows}>{isActive ? <i className="fa fa-angles-up fa-fw"></i> : <i className="fa fa-angles-down fa-fw"></i>}</div>
            </button>
            <div className={styles.panel}>
                {isActive && (
                    <div>
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
};
