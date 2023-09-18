import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import { Route , Routes } from 'react-router-dom';
// import Detail from './pages/Detail';
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
        // <Scroll100vh>
        <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
            <Header onToggleMode={handleToggleMode} isDarkMode={isDarkMode}/>
            <CustomCursor />
            <FollowCursor /> 
            {/* <AnimatedCursor 
            innerSize={20}
            outerSize={10}
            color='127,28,255'
            outerAlpha={0.2}
            innerScale={0.5}
            outerScale={5}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link'
            ]}
            /> */}
            <QuickButton />
            <Routes>
                <Route path='/' element={<Main/>}/>
                {/* <Route path='/detail/:id' element={<Detail />} /> */}
            </Routes>
        </div>
        // </Scroll100vh>
    );
}

export default App;


