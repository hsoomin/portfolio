import React from 'react';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import Cover from './Cover';

const MainPage = () => {
    return (
        <div>
            <Cover />
            <About />
            <Project />
            <Contact />
        </div>
    );
};

export default MainPage;