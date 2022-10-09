import styles from './Logo.module.css'


export const Logo = () => {
    return (
        <div className={styles.imgContainer}>
            <img
                src="/logo.png"
                alt="Logo"
                className={styles.avatar}
            />
        </div>
    );
};
