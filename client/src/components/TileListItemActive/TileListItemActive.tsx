import React from 'react';
import styles from './TileListItemActive.module.scss';
import { File } from '../../redux/files/files.actions';


interface Props {
    file: File;
}

const TileListItemActive: React.FC<Props>= ({file}) => {
    return (
        <div className={styles.cardItemDiv}>
            <div className={styles.fileImageDiv}>
                <img className={styles.fileImage} src={file.image_url} />
            </div>
            <div className={styles.captionDiv}>
                <p className={styles.fileType}>{file.file_type}</p>
                <p className={styles.caption}>{file.file_name}</p>
            </div>
        </div>
    );
};

export default TileListItemActive;