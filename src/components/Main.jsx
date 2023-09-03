import React from 'react';
import About from './About';
import Contact from './Contact';
// import Project from './Project';  
import Cover from './Cover';
import Project2 from './Project2';  

const MainPage = () => {
    
    return (
        <div>
            <Cover />
            <About />
            {/* <Project /> */}
            <Project2 />
            <Contact />
        </div>
    );
};

export default MainPage;