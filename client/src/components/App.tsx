import React from 'react';
import ConfigSidebar from './ConfigSidebar/ConfigSidebar';
import Headr from './Header/Header';
import ListSidebar from './ListSidebar/ListSidebar';
import TileList from './TileList/TileList';
import styles from './App.module.scss';

const App: React.FC = () => {
    return (
        <div className={styles.body}>
            <Headr />
            <ConfigSidebar />
            <TileList />
            <ListSidebar />
        </div>
    )
}

export default App;