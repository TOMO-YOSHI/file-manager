import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './Dropzone.module.scss';

interface Props {
    setFiles: Dispatch<SetStateAction<any[]>>;
}

const Dropzone: React.FC<Props> = ({ setFiles }) => {
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
        setFiles(acceptedFiles);
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()} className={styles.dropzone}>
            <input {...getInputProps()} />
            <p className={styles.uploadInstruction}>
                Drag 'n' drop or click to select file(s)
            </p>
        </div>
    )
}

export default Dropzone;