import styles from './Logo.module.css'


export const Logo = () => {
    return (
        <div className={styles['img-container']}>
            <img
                src="https://media.istockphoto.com/vectors/thinking-emoticon-question-face-emoji-with-eyeglasses-vector-vector-id1310060658"
                alt="Logo"
                className={styles.avatar}
            />
        </div>
    );
};
