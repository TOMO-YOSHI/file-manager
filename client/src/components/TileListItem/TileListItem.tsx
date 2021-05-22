import React, { useState } from 'react';
import styles from './TileListItem.module.scss';
import { File } from '../../redux/files/files.actions';

interface Props {
    file: File;
}

const TileListItem: React.FC<Props>= ({file}) => {
    const [active, setActive] = useState(false); // This should be managed in Redux.

    const onClickHandler = () => {
        setActive(!active);
    }

    return (
        <div className={active ? styles.cardItemDivActive : styles.cardItemDiv} onClick={onClickHandler}>
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