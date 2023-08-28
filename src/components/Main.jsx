import React from 'react';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import Cover from './Cover';
// import Cover2 from './Cover2';
// import Project2 from './Project2';

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