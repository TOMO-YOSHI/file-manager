import React, { useEffect, useState } from 'react';
import styles from './ImageComponent.module.scss';
import { File } from '../../redux/files';
import { FaFileAudio, FaFileVideo, FaFile } from 'react-icons/fa';

interface Props {
    file: File | null
}

const ImageComponent: React.FC<Props> = ({file}) => {
    const [imgSrc, setImgSrc] = useState<string>();

    useEffect(() => {
        if (file?.image_url) {
            setImgSrc(file.image_url)
        }
    }, [file?.image_url])

    const onError = () => {
        setImgSrc('error');
    }

    const getType = (type: string | undefined) => {
        // console.log(type)
        if(type) {
            return type.slice(0, type.indexOf('/'));
        } else {
            return undefined;
        }
    }

    return (
        <div className={styles.fileImageDiv}>
            {
                imgSrc !== 'error' && imgSrc ?
                    <img
                        className={styles.fileImage}
                        src={imgSrc}
                        onError={onError}
                        alt=''
                    />
                    : getType(file?.file_type) === 'video' ?
                    <div className={styles.iconImage}>
                        <FaFileVideo className={styles.icon} />
                    </div>
                    : getType(file?.file_type) === 'audio' ?
                    <div className={styles.iconImage}>
                        <FaFileAudio className={styles.icon} />
                    </div>
                    : getType(file?.file_type) === 'others' ?
                    <div className={styles.iconImage}>
                        <FaFile className={styles.icon} />
                    </div>
                    : imgSrc === 'error' ?
                    <div className={styles.noImage}>
                        <p className={styles.faildText}>
                            Failed to load<br />Please refresh browser
                        </p>
                    </div>
                    :
                    <div className={styles.noImage}>No Image</div>
                // <div className={styles.noImage}>No Image</div>
                // imgSrc === 'error' ?
                //     <div className={styles.noImage}>
                //         <p className={styles.faildText}>
                //             Failed to load<br />Please refresh browser
                //         </p>
                //     </div>
                //     : imgSrc ?
                //         <img
                //             className={styles.fileImage}
                //             src={imgSrc}
                //             onError={onError}
                //         />
                //         :
                //         <div className={styles.noImage}>No Image</div>
            }
        </div>
    );
};

export default ImageComponent;