import React from 'react';
import styles from './UploadButton.module.scss';
import { FaPlus } from "react-icons/fa";

const UploadButton: React.FC = () => {
    return (
        <label>
            <div className={styles.uploadButtonDiv}>
                <FaPlus className={styles.icon} />New
            </div>
            <input className={styles.inputFile} type='file' />
        </label>
    );
};

export default UploadButton;