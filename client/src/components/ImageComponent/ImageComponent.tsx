import React, { useEffect, useState } from 'react';
import styles from './ImageComponent.module.scss';

interface Props {
    image_url: string | null
}

const ImageComponent: React.FC<Props> = ({image_url}) => {
    const [imgSrc, setImgSrc] = useState<string>();

    useEffect(() => {
        if (image_url) {
            setImgSrc(image_url)
        }
    }, [image_url])

    const onError = () => {
        setImgSrc('error');
    }

    return (
        <div className={styles.fileImageDiv}>
            {
                imgSrc === 'error' ?
                    <div className={styles.noImage}>
                        <p className={styles.faildText}>
                            Failed to load<br />Please refresh browser
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
    );
};

export default ImageComponent;