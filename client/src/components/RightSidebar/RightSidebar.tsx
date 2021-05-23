import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../redux/root-reducer';
import styles from './RightSidebar.module.scss';
import data from '../../data/files.data.json';
import { File } from '../../redux/files/files.actions';
import { FaEdit, FaFileDownload, FaTrashAlt, FaExternalLinkAlt } from 'react-icons/fa';
import FileInfo from '../FileInfo/FileInfo';

const RightSidebar: React.FC = () => {
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

    return (
        <div className={styles.fileInfoDiv}>
            <h2 className={styles.fileInfoH2}>File Info</h2>
            {
                file ?
                    <>
                        <div className={styles.fileInfoIconsDiv}>
                            <FaExternalLinkAlt className={styles.icon} />
                            {/* <FaEdit className={styles.icon} /> */}
                            <FaFileDownload className={styles.icon} />
                            <FaTrashAlt className={styles.icon} />
                        </div>
                        <FileInfo file={file} />
                    </>
                    :
                    <p>No file selected.</p>
            }
        </div>
    );
};

export default RightSidebar;