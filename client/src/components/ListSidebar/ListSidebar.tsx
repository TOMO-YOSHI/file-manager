import React from 'react';
import styles from './ListSidebar.module.scss';
import data from '../../data/files.data.json';
import { File } from '../../redux/files/files.actions';

interface Props {
    file: File
}

const ListSidebar: React.FC = () => {
    return (
        <div className={styles.listSidebarDiv}>
            <ul className={styles.listSidebarUl}>
            {
                data.map((item,index) => {
                    return (
                        <li className={styles.listSidebarListitem}>
                            <p className={styles.fileName}>{item.file_name}</p>
                            <p className={styles.fileLastEdit}>
                            ({item.last_edit_date})
                            </p>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    );
};

export default ListSidebar;