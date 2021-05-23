import React from 'react';
import { useSelector } from 'react-redux';
import styles from './TileList.module.scss';
import TileListItem from '../TileListItem/TileListItem';
// import data from '../../data/files.data.json';
import { StoreState } from '../../redux/root-reducer';

const TileList: React.FC = () => {
    const filesState = useSelector((state: StoreState) => state.filesState);
    // console.log(filesState);
    return (
        <div className={styles.tileListDiv}>
            {
                filesState.files.length === 0 ?
                    <div>
                        <p>No data found.</p>
                        <button>Fetch Again</button>
                    </div>
                :
                    filesState.files.map((item, index) => {
                    return (
                        <TileListItem key={item.file_id} file={item} />
                    )
                })
            }
        </div>
    );
};

export default TileList;