import React from 'react';
import styles from "@/styles/StatBar.module.css";

interface Props {
    value: number;
}

const StatBar: React.FC<Props> = ({ value }) => {
    return (
        <div className={styles.statBarContainer}>
            {[...Array(10)].map((_, i) => (
                <div
                    key={i}
                    className={`${styles.statBar} ${i < value ? styles.filled : ''}`}
                ></div>
            ))}
        </div>
    );
}

export default StatBar;
