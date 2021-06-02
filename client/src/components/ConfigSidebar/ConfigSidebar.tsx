import React, { useState } from 'react';
import styles from './ConfigSidebar.module.scss';
import UploadButton from '../UploadButton/UploadButton';
import Filter from '../Filter/Filter';
import Order from '../Order/Order';
import UploadPopup from '../UploadPopup/Uploadpopup';

const ConfigSidebar: React.FC = () => {
    const [upload, setUpload] = useState(false)

    return (
        <div className={styles.configSidebarDiv}>
            <UploadButton onClick={() => setUpload(!upload)} />
            {
                upload ?
                    <UploadPopup onClick={() => setUpload(false)} />
                : null
            }
            <div className={styles.filterOrderDiv}>
                <Filter />
                <Order />
            </div>
        </div>
    );
};

export default ConfigSidebar;