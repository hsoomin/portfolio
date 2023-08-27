import React from 'react';
import { Link } from 'react-scroll';

const About = () => {
    return (
        <div className='about' id='section2'>
            <h2>about me</h2>
            <div className='my-img'>
                <img src="" alt="" />사진
            </div>
            <div className='my-info'>
                <h2>황수민</h2>
                <h3>010</h3>
                <h3>wnghkdsns@</h3>
            </div>
            <ul className="my-introduce">
                <li>EDUCATION.
                    <p>dfsdf</p>
                </li>
                <li>Technical Skills.
                    <img width='50' src="/img/skills/Bootstrap.svg" alt="" />
                    <img width='50' src="/img/skills/Figma-Light.svg" alt="" />
                    <img width='50' src="/img/skills/html.svg" alt="" />
                </li>
                <li>Working Experience.</li>
            </ul>
        </div>
    );
};

export default About;