import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './TileList.module.scss';
import TileListItem from '../TileListItem/TileListItem';
// import data from '../../data/files.data.json';
import { StoreState } from '../../redux/root-reducer';
import { useQuery } from '@apollo/client';
import { GET_FILES } from '../../graphql/request';
import { File } from '../../redux/files';
import { fetchFiles } from '../../redux/files/files.actions';

const TileList: React.FC = () => {
    const dispatch = useDispatch();
    const filesState = useSelector((state: StoreState) => state.filesState);
    // console.log(filesState);
    const { data, loading, error } = useQuery(GET_FILES);

    useEffect(()=>{
        if(data) {
            dispatch(fetchFiles(data.files));
        }
    }, [data])

    const filterOption = ['image', 'video', 'audio', 'others']

    useEffect(()=>{
        const filteredFiles = filesState.files.filter(file => filterOption.includes(file.file_type.slice(0, file.file_type.indexOf('/'))));
        console.log(filteredFiles);
    }, [filesState])

    return (
        <div className={styles.tileListDiv}>
            {
                loading ? 
                    < div className={styles.loadingDiv}>
                        <p>Loading...</p>
                    </div>
                    : filesState ?
                        filesState.files.map((item: File, index: number) => {
                            return (
                                <TileListItem key={item.file_id} file={item} />
                            )
                        })
                    :
                    < div className={styles.notFountDiv}>
                        <p>No data found.</p>
                    </div>
            }
        </div>
    );
};

export default TileList;