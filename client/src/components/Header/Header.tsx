import React from 'react';
import HeaderCSS from './Header.module.scss';
import SearchInput from '../SearchInput/SearchInput';
import { RiCloudLine } from "react-icons/ri";

const Header: React.FC = () => {
    return (
        <div className={HeaderCSS.header}>
            <h1 className={HeaderCSS.siteName}><RiCloudLine />&nbsp;AWS S3 File Manager</h1>
            <SearchInput />
        </div>
    );
};

export default Header;