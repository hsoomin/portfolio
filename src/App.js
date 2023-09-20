import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import { Route , Routes } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import FollowCursor from './components/FollowCursor';
import QuickButton from './components/QuickButton';
// import Scroll100vh from './components/Scroll100vh';
// import AnimatedCursor from "react-animated-cursor"

function App() {

    //다크모드 
    const [isDarkMode, setIsDarkMode] = useState(false);
    const handleToggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };


    return (
        <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
            <Header onToggleMode={handleToggleMode} isDarkMode={isDarkMode}/>
            <CustomCursor />
            <FollowCursor />
            <QuickButton />
            <Routes>
                <Route path='/' element={<Main/>}/>
            </Routes>
        </div>
    );
}

export default App;


