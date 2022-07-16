
import styles from './NotFound.module.css'

export const NotFound = () => {
    return (
        <div className={styles.error}>
            <h1 className={styles.title}>404</h1>
            <h3 className={styles.subTitle}>Page not found</h3>
            <h1 className={styles.title}>&#10060;</h1>
        </div>
    );
};
