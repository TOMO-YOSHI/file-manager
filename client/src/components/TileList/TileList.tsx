import React from 'react';
import styles from './TileList.module.scss';
import TileListItem from '../TileListItem/TileListItem';
import data from '../../data/files.data.json';

const TileList: React.FC = () => {
    console.log(data);
    return (
        <div className={styles.tileListDiv}>
            {
                data.map((item, index) => {
                    return (
                        <TileListItem key={item.file_id} file={item} />
                    )
                })
            }
        </div>
    );
};

export default TileList;