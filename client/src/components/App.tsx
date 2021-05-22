import React from 'react';
import ConfigSidebar from './ConfigSidebar/ConfigSidebar';
import Headr from './Header/Header';
import RightSidebar from './RightSidebar/RightSidebar';
import TileList from './TileList/TileList';
import styles from './App.module.scss';

const App: React.FC = () => {
    return (
        <div className={styles.body}>
            <Headr />
            <ConfigSidebar />
            <TileList />
            <RightSidebar />
        </div>
    )
}

export default App;