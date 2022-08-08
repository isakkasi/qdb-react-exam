import styles from './Header.module.css'
import { Rates } from './rates/Rates';

export const Header = (props) => {
   
    return (
        <div className={styles.header} >
            
            <span className={styles.title}>
                Plane Care Academy
                &nbsp; &nbsp; <img className={styles.flag} src="/us2.png" alt="USD" /> <Rates />
            </span>
        </div>
    );
};

