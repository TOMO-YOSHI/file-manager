import React, { useEffect, useState } from 'react';
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
    const [files, setFiles] = useState<File[]|[]>([]);
    const dispatch = useDispatch();
    const filesState = useSelector((state: StoreState) => state.filesState);
    const { data, loading, error } = useQuery(GET_FILES);

    useEffect(()=>{
        if(data) {
            dispatch(fetchFiles(data.files));
        }
    }, [data])

    useEffect(() => {
        setFiles(
            sortFiles(
                filesState.orderRuleOption.orderRule,
                filesState.orderRuleOption.orderOption,
                filesState.files
            )
        );
    }, [filesState]);

    // console.log(filesState.orderRuleOption)

    // console.log(files)

    const sortFiles = (rule: string, option: string, arr: File[]): File[] => {
        const arrayForSort = [...arr];
        if(rule === 'date') {
            switch(option) {
                case 'new':
                    return  arrayForSort.sort((a, b) => parseInt(a.upload_date) - parseInt(b.upload_date));
                case 'old':
                    return  arrayForSort.sort((a, b) => parseInt(b.upload_date) - parseInt(a.upload_date));
                default:
                    return arrayForSort;
            };
        };
        if(rule === 'name') {
            switch(option) {
                case 'asc':
                    return arrayForSort.sort((a: any, b: any) => {
                        if (a.file_name.toLowerCase() < b.file_name.toLowerCase()) return -1;
                        if (a.file_name.toLowerCase() > b.file_name.toLowerCase()) return 1;
                        return 0
                    });
                case 'des':
                    return arrayForSort.sort((a: any, b: any) => {
                        if (
                            a.file_name.toLowerCase() >
                            b.file_name.toLowerCase()
                        )
                            return -1;
                        if (
                            a.file_name.toLowerCase() <
                            b.file_name.toLowerCase()
                        )
                            return 1;
                        return 0;
                    });
                default:
                    return arrayForSort;
            }
        }
        return arrayForSort;
    }

    // const filterOption = ['image', 'video', 'audio', 'others']

    // useEffect(()=>{
    //     const filteredFiles = filesState.files.filter(file => filesState.filterOption.includes(file.file_type.slice(0, file.file_type.indexOf('/'))));
    //     console.log(filteredFiles);
    // }, [filesState])

    return (
        <div className={styles.tileListDiv}>
            {
                loading ? 
                    < div className={styles.loadingDiv}>
                        <p>Loading...</p>
                    </div>
                    : filesState ?
                        files.map((item: File, index: number) => {

                            if(filesState.filterOption.includes(item.file_type.slice(0, item.file_type.indexOf('/')))) {
                                return (
                                    <TileListItem key={item.file_id} file={item} />
                                )
                            } else {
                                return null;
                            }

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