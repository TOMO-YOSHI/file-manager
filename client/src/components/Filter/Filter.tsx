import React, { useEffect, useState } from 'react';
import styles from './Filter.module.scss';
import { FaFilter } from 'react-icons/fa';

// interface IsAll {
//     boolean
// }

interface FilterOptionsLocal {
    image: boolean;
    video: boolean;
    audio: boolean;
    others: boolean;
    [key: string]: boolean;
};

const filterOptionsLocalInitial = {
    image: true,
    video: true,
    audio: true,
    others: true,
};

const filterOptionsLocalClear = {
    image: false,
    video: false,
    audio: false,
    others: false,
};

const Filter: React.FC = () => {
    const [isAll, setIsAll] = useState<boolean>(false);
    const [filterOptionsLocal, setFilterOptionsLocal] = useState<FilterOptionsLocal>(filterOptionsLocalInitial);

    const checkboxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFilterOptionsLocal({
            ...filterOptionsLocal,
            [e.target.value]: e.target.checked
        })
    };

    const allCheckboxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setIsAll(e.target.checked);
        if (e.target.checked) {
            setFilterOptionsLocal(filterOptionsLocalInitial);
        } else {
            setFilterOptionsLocal(filterOptionsLocalClear);
        }
    };

    useEffect(()=>{
        for(let key in filterOptionsLocal) {
            if(!filterOptionsLocal[key]) {
                setIsAll(false);
                return;
            }
        }
        setIsAll(true);
    }, [filterOptionsLocal]);

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
                        checked={filterOptionsLocal.image}
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
                        checked={filterOptionsLocal.video}
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
                        checked={filterOptionsLocal.audio}
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
                        checked={filterOptionsLocal.others}
                        onChange={checkboxChangeHandler}
                    />
                    &nbsp;Others
                </label>
            </div>
        </div>
    );
};

export default Filter;