import React from 'react';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import Front from './Front';

const MainPage = () => {
    return (
        <div>
            <Front />
            <About />
            <Project />
            <Contact />
        </div>
    );
};

export default MainPage;