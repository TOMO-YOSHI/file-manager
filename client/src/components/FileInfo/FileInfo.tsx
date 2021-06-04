import React, { useState, useEffect } from 'react';
import styles from './FileInfo.module.scss';
import { File } from '../../redux/files';

interface Props {
    file: File | null
};

const FileInfo: React.FC<Props> = ({file}) => {
    const [imgSrc, setImgSrc] = useState<string>();

    useEffect(()=>{
        if (file?.image_url) {
            setImgSrc(file.image_url)
        }
    }, [file])

    const onError = () => {
        setImgSrc('error');
    }

    if(!file) {
        return null;
    }

    return (
        <>
            {
                imgSrc === 'error' ?
                    <div className={styles.noImage}>
                        <p className={styles.faildText}>
                            Failed to load<br />Please refresh browser
                        </p>
                    </div>
                    : imgSrc ?
                        <img
                            className={styles.fileImage}
                            src={imgSrc}
                            onError={onError}
                        />
                        :
                        <div className={styles.noImage}>No Image</div>
            }
            {/* <img src={file.image_url} /> */}
            <p className={styles.fileName}><span className={styles.tag}>Name:</span> {file.file_name}</p>
            <p><span className={styles.tag}>Type:</span> {file.file_type}</p>
            <p><span className={styles.tag}>Size:</span> {file.file_size_kb} KB</p>
            <p><span className={styles.tag}>Upload:</span> {new Date(parseInt(file.upload_date)).toLocaleDateString()}</p>
            <p><span className={styles.tag}>Editted:</span> {
                file.last_edit_date ?
                new Date(parseInt(file.last_edit_date)).toLocaleDateString()
                : '-'
            }</p>
            <p><span className={styles.tag}>Memo:</span> </p>
            {
                file.memo_text ?
                    <p>{file.memo_text}</p>
                    : 'No memo'
            }
        </>
    );
};

export default FileInfo;