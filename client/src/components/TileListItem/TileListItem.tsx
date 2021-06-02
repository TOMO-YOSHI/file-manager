import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../redux/root-reducer';
import styles from './TileListItem.module.scss';
import { File, selectFile } from '../../redux/files';

interface Props {
    file: File;
}

const TileListItem: React.FC<Props>= ({file}) => {
    const dispatch = useDispatch();
    const [imgSrc, setImgSrc] = useState<string>(file.image_url);
    const selectedFileId = useSelector((state: StoreState) => state.filesState.selectedFileId);

    const onClickHandler = () => {
        dispatch(selectFile(file.file_id));
    }

    const onError = () => {
        setImgSrc('error');
    }

    return (
        <div className={selectedFileId === file.file_id ? styles.cardItemDivActive : styles.cardItemDiv} onClick={onClickHandler}>
            <div className={styles.fileImageDiv}>
                {
                    imgSrc === 'error'  ?
                        <div className={styles.noImage}>
                            <p className={styles.faildText}>
                            Failed to load<br/>Please refresh browser
                            </p>
                        </div>
                    : imgSrc ?
                        <img
                            className={styles.fileImage}
                            src={imgSrc}
                            onError={onError}
                        />
                    :
                    <div className={styles.noImage}>No Image</div>
                }
            </div>
            <div className={styles.captionDiv}>
                <p className={styles.fileType}>{
                    // file.file_type.split('').splice(0, file.file_type.indexOf('/')).join('')
                    file.file_type.split('').slice(file.file_type.indexOf('/') + 1).join('')
                }</p>
                <p className={styles.caption}>{file.file_name}</p>
            </div>
        </div>
    );
};

export default TileListItem;