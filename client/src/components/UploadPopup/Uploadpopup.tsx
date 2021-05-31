import React, { useState } from 'react';
import styles from './Uploadpopup.module.scss';

import Dropzone from '../Dropzone/Dropzone';

interface Props {
    onClick: () => void;
}

const Uploadpopup: React.FC<Props> = ({ onClick }) => {
    const [files, setFiles] = useState<any[]>([]);

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
    
    return (
        <div
            className={styles.uploadBackgroundDiv}
            onClick={onClick}>
            <div
                className={styles.uploadPopupDiv}
                onClick={preventClose}>
                    {
                        files.length > 0 ?
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
                                <button>Upload File(s)</button>
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