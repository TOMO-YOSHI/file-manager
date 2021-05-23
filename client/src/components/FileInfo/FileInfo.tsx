import React from 'react';
import styles from './FileInfo.module.scss';
import { File } from '../../redux/files';

interface Props {
    file: File | null
};

const FileInfo: React.FC<Props> = ({file}) => {

    if(!file) {
        return null;
    }

    return (
        <>
            <img src={file.image_url} />
            <p className={styles.fileName}><span className={styles.tag}>Name:</span> {file.file_name}</p>
            <p><span className={styles.tag}>Type:</span> {file.file_type}</p>
            <p><span className={styles.tag}>Size:</span> {file.file_size_kb} KB</p>
            <p><span className={styles.tag}>Upload:</span> {file.upload_date}</p>
            <p><span className={styles.tag}>Editted:</span> {file.last_edit_date}</p>
            <p><span className={styles.tag}>Memo:</span> </p>
            <p>{file.memo_text}</p>
        </>
    );
};

export default FileInfo;