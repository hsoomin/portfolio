import React, { useState } from 'react';
import './App.scss';
// import Header from './components/Header';
import SideNav from './components/SideNav';
import Main from './components/Main';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
// import Detail from './pages/Detail';
import FollowCursor from './components/FollowCursor';
import QuickButton from './components/QuickButton';

function App() {

  //다크모드 
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <BrowserRouter>
      <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
        {/* <Header/> */}
        <SideNav onToggleMode={handleToggleMode} isDarkMode={isDarkMode}/>
        <QuickButton />
        <FollowCursor />
          <Routes>
            <Route path='/' element={<Main/>}/>
            {/* <Route path='/detail/:id' element={<Detail />} /> */}
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
