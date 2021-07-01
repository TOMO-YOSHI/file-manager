import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../redux/root-reducer';
import styles from './RightSidebar.module.scss';
import { File } from '../../redux/files/files.actions';
import { FaEdit, FaFileDownload, FaTrashAlt, FaExternalLinkAlt } from 'react-icons/fa';
import FileInfo from '../FileInfo/FileInfo';
import { useMutation } from '@apollo/client';
import { DELETE_FILE } from '../../graphql/request';
import { deleteFile } from '../../redux/files/files.actions';
import { s3DeleteHandler } from '../../services/s3Handler';

const RightSidebar: React.FC = () => {
    const dispatch = useDispatch();
    const [file, setFile] = useState<File | null>(null);
    const filesState = useSelector((state: StoreState) => state.filesState);

    useEffect(()=>{
        if (filesState.selectedFileId === null) {
            setFile(null);
            return;
        }
        const selectedFile = filesState.files.find((file) => file.file_id === filesState.selectedFileId);
        if(selectedFile !== undefined ) {
            setFile(selectedFile);
        }
    }, [filesState.selectedFileId]);

    const [deleteFileGql] = useMutation(DELETE_FILE);

    // console.log(file)

    const deleteFileHandler = () => {
        const confirm = window.confirm('Do you really want to delete this file?');
        if (file && confirm) {
            deleteFileGql({ variables: { input: file.file_id } });
            dispatch(deleteFile(file.file_id));
            const filePath = file.file_url.replace('https://file-manager-webapp.s3.amazonaws.com/', '');
            s3DeleteHandler(filePath);
        }
    }

    const fileDownloadHandler = (fileURL : string, fileType: string, fileName: string) => {
        fetch(fileURL, {
            method: "GET",
            headers: {
                "Content-Type": fileType,
            },
        })
            .then((response) => response.blob())
            .then((blob) => {
                // Create blob link to download
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute(
                    "download",
                    fileName +
                        "." +
                        fileType
                            .slice(fileType.lastIndexOf("/") + 1)
                );

                // Append to html link element page
                document.body.appendChild(link);

                // Start download
                link.click();

                // Clean up and remove the link
                // link.parentNode.removeChild(link);
            });
    };

    return (
        <div className={styles.fileInfoDiv}>
            <h2 className={styles.fileInfoH2}>File Info</h2>
            {file ? (
                <>
                    <div className={styles.fileInfoIconsDiv}>
                        <a
                            href={file.file_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaExternalLinkAlt className={styles.icon} />
                        </a>
                        {/* <FaEdit className={styles.icon} /> */}
                        {/* <a
                            download={true}
                            href={file.file_url}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <FaFileDownload className={styles.icon} />
                        </a> */}
                        <FaFileDownload className={styles.icon} onClick={()=>{
                            fileDownloadHandler(file.file_url, file.file_type, file.file_name)
                        }} />
                        <FaTrashAlt
                            className={styles.icon}
                            onClick={deleteFileHandler}
                        />
                    </div>
                    <FileInfo file={file} />
                </>
            ) : (
                <p>No file selected.</p>
            )}
        </div>
    );
};

export default RightSidebar;