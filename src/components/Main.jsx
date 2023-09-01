import React from 'react';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import Cover from './Cover';
// import Cover2 from './Cover2';
// import Project2 from './Project2';
// import Cursor from './Cursor';

const MainPage = () => {
    
    return (
        <div>
            {/* <Cursor /> */}
            <Cover />
            <About />
            <Project />
            <Contact />
        </div>
    );
};

export default MainPage;