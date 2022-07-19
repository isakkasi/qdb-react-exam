import styles from './Title.module.css'

export const Title = ({
    icon,
    children,
}) => {
    return (
        <header className={styles.title} >
            <h5>
                <b>
                    <i className={icon}></i> {children}
                </b>
            </h5>
        </header>
    );
};
