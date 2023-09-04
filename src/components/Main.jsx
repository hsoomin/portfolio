import React from 'react';
import About from './About';
import Contact from './Contact';
// import Project from './Project';  
import Cover from './Cover';
import Project2 from './Project2';  
import About2 from './About2';

const MainPage = () => {
    
    return (
        <div>
            <Cover />
            <About />
            <About2 />
            {/* <Project /> */}
            <Project2 />
            <Contact />
        </div>
    );
};

export default MainPage;