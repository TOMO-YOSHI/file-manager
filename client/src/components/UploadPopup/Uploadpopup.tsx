import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Uploadpopup.module.scss';
import { useMutation } from '@apollo/client';
import { CREATE_FILE } from '../../graphql/request';
import Dropzone from '../Dropzone/Dropzone';
import { uploadHandler } from '../../services/s3Handler';
import { addFile, File } from '../../redux/files/files.actions';

interface Props {
    onClick: () => void;
}

const Uploadpopup: React.FC<Props> = ({ onClick }) => {
    const dispatch = useDispatch();
    const [files, setFiles] = useState<any[]>([]);
    const [uploading, setUploading] = useState<boolean>(false);
    const [uploadingProgress, setUploadingProgress] = useState<number>(0);
    const [uploadedFilesNum, setUploadedFilesNum] = useState<number>(0);
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [createFile] = useMutation(CREATE_FILE, {
        onError: (err) => {
            // setError(err);
            console.log(err)
        }
    });

    const preventClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
    }

    const deleteExtention = (fileName: string): string => {
        let name: string | string[] = fileName.split('');
        name = name.slice(0, name.indexOf('.')).join('');
        return name;
    }

    const removeFiles = (): void => {
        setFiles([]);
    }

    const fileUploadHandler = async () => {
        setUploading(true);

        const uploadTracker = async (fileName: string, percent: number) => {
            setUploadingProgress(Math.floor(percent));
            if (percent === 100) {
                // setFiles([]);
                // setUploading(false);

                setUploadingProgress(0);
                setUploadedFilesNum(prev => prev + 1);
            }
        }

        for(let file of files) {
            const file_url = await uploadHandler(file, uploadTracker);

            // Upload record to GraphQL
            const date: any[] = new Date(new Date().getTime()).toLocaleDateString().split('/');
            date.unshift(date.pop());
            const upload_date = date.join('-');
            const file_name = file.name.slice(0, file.name.indexOf('.'));
            const file_type = file.type;
            const file_size_kb = Math.floor(file.size / 1000);

            const addedFile = await createFile({
                variables: {
                    input: {
                        file_name,
                        upload_date,
                        file_url,
                        image_url: file_url,
                        file_type,
                        file_size_kb
                    }
                }
            });

            setUploadedFiles(prev => [...prev, addedFile.data.createFile])

        }
    }

    useEffect(()=>{
        if (files.length === uploadedFilesNum) {

            for(let uploadedFile of uploadedFiles) {
                dispatch(addFile(uploadedFile))
            }

        }
    }, [uploadedFilesNum])
    
    return (
        <div
            className={styles.uploadBackgroundDiv}
            onClick={uploading && uploadedFilesNum !== files.length ? ()=>{} : onClick}>
            <div
                className={styles.uploadPopupDiv}
                onClick={preventClose}>
                    {
                        uploading ?
                        // true ?
                        <div className={styles.uploadingDiv}>
                            {
                                uploadedFilesNum === files.length ?
                                <>
                                    <p className={styles.uploadCompleted}>Upload Completed!</p>
                                    <p className={styles.close} onClick={onClick}>close</p>
                                </>
                                :
                                <>
                                    <p>Uploading...</p>
                                    <p>{uploadedFilesNum} / {files.length} file(s) uploaded</p>
                                    <div style={{ backgroundColor: '#ccc', width: "80%", height: "2rem", textAlign: "center", margin: "0 auto" }}>
                                        <div style={
                                            {
                                                backgroundColor: 'red',
                                                height: "2rem",
                                                width: uploadingProgress / 100 * 100 + '%'
                                            }
                                        }></div>
                                    </div>
                                </>
                            }
                        </div>
                        : files.length > 0 ?
                        <div className={styles.uploadFilesListDiv}>
                            <ul className={styles.filesUl}>
                                {
                                    files.map((item, index) => (
                                        <li key={index} className={styles.fileLi}>
                                            <p>File_{index + 1} - {deleteExtention(item.name)}
                                                &nbsp;,&nbsp;
                                                <span>{Math.floor(item.size / 1000)} KB</span>
                                                &nbsp;,&nbsp;
                                                <span>{item.type}</span>
                                            </p>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className={styles.buttonsDiv}>
                                <button onClick={fileUploadHandler}>Upload File(s)</button>
                                <p
                                    className={styles.selectAgainP}
                                    onClick={removeFiles}>
                                        Select file(s) again
                                    </p>
                            </div>
                        </div>
                        :
                        <Dropzone setFiles={setFiles} />
                    }
            </div>
        </div>
    );
};

export default Uploadpopup;