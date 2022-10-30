import styles from './Header.module.css';
import { Rates } from './rates/Rates';

export const Header = (props) => {
    return (
        <div className={styles.header}>
            <div className={styles.title}>
                Plane Care Academy
            </div>
            <div className={styles.rates}>
                {/* <img className={styles.flag} src="/us2.png" alt="USD" /> */}
                {/* <Rates /> */}
            </div>
        </div>
    );
};
