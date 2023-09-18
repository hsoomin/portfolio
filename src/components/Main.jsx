import React from 'react';
import About from './About';
import Contact from './Contact';
import Cover from './Cover';
import Project from './Project';  

const Main = () => {
    
    return (
        <div>
            <Cover />
            <About />
            <Project />
            <Contact />
        </div>
    );
};

export default Main;