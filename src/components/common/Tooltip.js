import React from 'react'
import styles from './Tooltip.module.css'
const Tooltip = ({message, children}) => {
    return(
        <div style={{
            textAlign:'center',
            margin:'10%'
        }}>
            <div className={styles.customTooltip}>{children}
                <span className={styles.customTooltipText}>{message}</span>
            </div>
            {/* <span style={{
                display:'block',
                marginTop:20,
                color:'blue'            
            }}>{message}</span> */}
        </div>
    )
}

export default Tooltip