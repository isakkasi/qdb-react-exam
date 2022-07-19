import styles from './DetailsButtons.module.css'

export const DetailsButtons = () => {
    return (
        <div className={styles.detBtns}>
            <button className={styles.icon}><i class="fa-solid fa-bars"></i></button>
            <button className={styles.icon}><i class="fa-solid fa-square-plus"></i></button>
            <button className={styles.icon}><i class="fa-solid fa-pen-to-square"></i></button>
            <button className={styles.icon}><i class="fa-solid fa-trash-can"></i></button>
        </div>
    );
};
