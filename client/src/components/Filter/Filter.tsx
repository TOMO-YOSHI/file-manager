import React, { useEffect, useState } from 'react';
import styles from './Filter.module.scss';
import { FaFilter } from 'react-icons/fa';

// interface IsAll {
//     boolean
// }

interface FilterOptions {
    image: boolean;
    video: boolean;
    audio: boolean;
    others: boolean;
    [key: string]: boolean;
};

const filterOptionsInitial = {
    image: true,
    video: true,
    audio: true,
    others: true,
};

const filterOptionsClear = {
    image: false,
    video: false,
    audio: false,
    others: false,
};

const Filter: React.FC = () => {
    const [isAll, setIsAll] = useState<boolean>(false);
    const [filterOptions, setFilterOptions] = useState<FilterOptions>(filterOptionsInitial);

    const checkboxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFilterOptions({
            ...filterOptions,
            [e.target.value]: e.target.checked
        })
    };

    const allCheckboxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setIsAll(e.target.checked);
        if (e.target.checked) {
            setFilterOptions(filterOptionsInitial);
        } else {
            setFilterOptions(filterOptionsClear);
        }
    };

    useEffect(()=>{
        for(let key in filterOptions) {
            if(!filterOptions[key]) {
                setIsAll(false);
                return;
            }
        }
        setIsAll(true);
    }, [filterOptions]);

    return (
        <div className={styles.filterDiv}>
            <p className={styles.filterP}><FaFilter className={styles.icon} />Filter</p>
            <label>
                <input 
                    type="checkbox" 
                    id="all" 
                    name="filter" 
                    value="all"
                    checked={isAll}
                    onChange={allCheckboxChangeHandler}
                    />
                &nbsp;All
            </label>
            <div className={styles.eachCheckboxDiv}>
                <label>
                    <input 
                        type="checkbox" 
                        id="image" 
                        name="filter" 
                        value="image" 
                        checked={filterOptions.image}
                        onChange={checkboxChangeHandler}
                    />
                    &nbsp;Image
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        id="video" 
                        name="filter" 
                        value="video" 
                        checked={filterOptions.video}
                        onChange={checkboxChangeHandler}
                    />
                    &nbsp;Video
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        id="audio" 
                        name="filter" 
                        value="audio" 
                        checked={filterOptions.audio}
                        onChange={checkboxChangeHandler}
                    />
                    &nbsp;Audio<br />
                    {/* &nbsp;&nbsp;(.docx .doc .pdf .pages) */}
                </label>
                <label>
                    <input
                        type="checkbox"
                        id="others"
                        name="filter"
                        value="others"
                        checked={filterOptions.others}
                        onChange={checkboxChangeHandler}
                    />
                    &nbsp;Others
                </label>
            </div>
        </div>
    );
};

export default Filter;