import React, { useState, useEffect } from 'react';
import styles from './FileInfo.module.scss';
import { File } from '../../redux/files';
import ImageComponent from '../ImageComponent/ImageComponent';

interface Props {
    file: File | null
};

const FileInfo: React.FC<Props> = ({file}) => {

    const getFileType = (type: string): string => {
        // let typeName: any = type.slice(0, type.indexOf('/')).split('');
        // typeName = typeName[0].toUpperCase() + typeName.slice(1).join('');
        let typeName: string = type.slice(0, type.indexOf('/'));
        typeName = typeName[0].toUpperCase() + typeName.slice(1);
        return typeName;
    }

    if(!file) {
        return null;
    }

    return (
        <>
            <ImageComponent file={file} />
            <p className={styles.fileName}><span className={styles.tag}>Name:</span> {file.file_name}</p>

            <p><span className={styles.tag}>Type:</span> {
                // file.file_type.slice(0, file.file_type.indexOf('/'))
                getFileType(file.file_type)
            }</p>

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