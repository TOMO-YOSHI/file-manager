import React from 'react';
import styles from './UploadButton.module.scss';
import { FaPlus } from "react-icons/fa";

interface Props {
    onClick: () => void;
}

const UploadButton: React.FC<Props> = ({onClick}) => {
    return (
        <label>
            <div className={styles.uploadButtonDiv} onClick={onClick}>
                <FaPlus className={styles.icon} />New
            </div>
            {/* <input className={styles.inputFile} type='file' /> */}
        </label>
    );
};

export default UploadButton;