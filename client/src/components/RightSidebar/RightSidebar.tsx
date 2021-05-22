import React, {useState} from 'react';
import styles from './RightSidebar.module.scss';
import data from '../../data/files.data.json';
import { File } from '../../redux/files/files.actions';
import { FaEdit, FaFileDownload, FaTrashAlt, FaExternalLinkAlt } from 'react-icons/fa';

interface Props {
    file: File
}

const RightSidebar: React.FC = () => {
    const [file, setFile] = useState(data[3]);

    return (
        <div className={styles.fileInfoDiv}>
            <h2 className={styles.fileInfoH2}>File Info</h2>
            <div className={styles.fileInfoIconsDiv}>
                <FaExternalLinkAlt className={styles.icon} />
                {/* <FaEdit className={styles.icon} /> */}
                <FaFileDownload className={styles.icon} />
                <FaTrashAlt className={styles.icon} />
            </div>
            {
                file ?
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
                :
                <p>No file selected.</p>
            }
        </div>
    );
};

export default RightSidebar;