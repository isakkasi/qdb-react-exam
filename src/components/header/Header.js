import styles from './Header.module.css'

export const Header = (props) => {
   
    return (
        <div className={styles.header} >
            {/* <button className="w3-bar-item w3-button">
                <i className="fa fa-bars"></i> &nbsp;Menu
            </button> */}
            <span className={styles.title}>Plane Care Academy</span>
        </div>
    );
};

