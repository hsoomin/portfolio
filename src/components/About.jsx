import React from 'react';
import { Link } from 'react-scroll';

const About = () => {
    return (
        <div className='about' id='section2'>
            <h2>about</h2>
            {/* import { Link } from 'react-scroll';때문에 사용 안써도 됨
            <Link to='section1' smooth={true} duration={500}>
                Go to About Section
            </Link> */}
        </div>
    );
};

export default About;