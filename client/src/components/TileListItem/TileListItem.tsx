import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../redux/root-reducer';
import styles from './TileListItem.module.scss';
import { File, selectFile } from '../../redux/files';

interface Props {
    file: File;
}

const TileListItem: React.FC<Props>= ({file}) => {
    const dispatch = useDispatch();
    const selectedFileId = useSelector((state: StoreState) => state.filesState.selectedFileId);

    const onClickHandler = () => {
        dispatch(selectFile(file.file_id));
    }

    return (
        <div className={selectedFileId === file.file_id ? styles.cardItemDivActive : styles.cardItemDiv} onClick={onClickHandler}>
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