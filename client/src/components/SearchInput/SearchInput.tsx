import React from 'react';
import styles from './SearchInput.module.scss';
import { FaSearch } from 'react-icons/fa';

const SearchInput: React.FC = () => {
    return (
        <div className={styles.searchInputDiv}>
            <FaSearch className={styles.searchIcon} />
            <input className={styles.searchInput} placeholder='Enter keyword' />
        </div>
    );
};

export default SearchInput;