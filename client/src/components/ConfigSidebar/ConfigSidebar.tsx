import React from 'react';
import styles from './ConfigSidebar.module.scss';
import UploadButton from '../UploadButton/UploadButton';
import Filter from '../Filter/Filter';
import Order from '../Order/Order';

const ConfigSidebar: React.FC = () => {

    return (
        <div className={styles.configSidebarDiv}>
            <UploadButton />
            <div className={styles.filterOrderDiv}>
                <Filter />
                <Order />
            </div>
        </div>
    );
};

export default ConfigSidebar;