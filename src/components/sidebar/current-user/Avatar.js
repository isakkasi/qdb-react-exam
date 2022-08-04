import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

import styles from './Avatar.module.css'

export const Avatar = ({
    avatar
}) => {
const {auth} = useContext(AuthContext)

    return (
        <div className={styles.avatar}>
            <img src={avatar || "/avatar.png"} alt="avatar" className={styles.face} />
            <span className={styles.role}>{auth.role}</span>
        </div>
    );
};
