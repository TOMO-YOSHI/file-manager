import React from 'react';
import styles from './TileListItem.module.scss';

interface File {
    file_id: number;
    user_id: number;
    file_name: string;
    upload_date: string; // Date
    last_edit_date: string; // Date
    memo_text: string;
    file_url: string;
    image_url: string;
    file_type: string;
}

interface Props {
    file: File;
}

const TileListItem: React.FC<Props>= ({file}) => {
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

export default TileListItem;