import React from 'react';
import styles from './ConfigSidebar.module.scss';
import UploadButton from '../UploadButton/UploadButton';
import { FaFilter } from 'react-icons/fa';
import { FaSortAmountDown } from 'react-icons/fa';

const ConfigSidebar: React.FC = () => {

    return (
        <div className={styles.configSidebarDiv}>
            <UploadButton />
            <div className={styles.filterOrderDiv}>
                <div className={styles.filterDiv}>
                    <p className={styles.filterOrderP}><FaFilter className={styles.icon} />Filter</p>
                    <label>
                        <input type="checkbox" id="all" name="filter" value="all" />
                        &nbsp;All
                    </label>
                    <div className={styles.eachCheckboxDiv}>
                        <label>
                            <input type="checkbox" id="image" name="filter" value="image" />
                            &nbsp;Image
                        </label>
                        <label>
                            <input type="checkbox" id="video" name="filter" value="video" />
                            &nbsp;Video
                        </label>
                        <label>
                            <input type="checkbox" id="document" name="filter" value="document" />
                            &nbsp;Document<br/>
                            &nbsp;&nbsp;(.docx .doc .pdf .pages)
                        </label>
                    </div>
                </div>
                <div className={styles.orderDiv}>
                    <p className={styles.filterOrderP}><FaSortAmountDown className={styles.icon} />Order</p>
                    <div>
                        <label>
                            <input type="radio" id="date" name="order" value="date" checked />
                            &nbsp;Date
                        </label>
                        <div className={styles.eachRadioButtonDiv}>
                            <label>
                                <input type="radio" id="new" name="dateDetail" value="new" checked />
                                &nbsp;New
                            </label>
                            <label>
                                <input type="radio" id="old" name="dateDetail" value="old" />
                                &nbsp;Old
                            </label>
                        </div>

                        <label>
                            <input type="radio" id="name" name="order" value="name" />
                            &nbsp;Name
                        </label>
                        <div className={styles.eachRadioButtonDiv}>
                            <label>
                                <input type="radio" id="new" name="nameDetail" value="asc" checked />
                                &nbsp;Ascending
                            </label>
                            <label>
                                <input type="radio" id="old" name="nameDetail" value="des" />
                                &nbsp;Descending
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfigSidebar;