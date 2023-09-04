import React from 'react';
import { Link } from 'react-scroll';
import './About.scss'

const About = () => {
    return (
        <div className='about' id='section2'>
            <div className='container'>
                <div className="about-item">
                    <img src="" alt="" />
                    사진
                </div>
                <div className="about-item">
                    <p>Skills</p>
                    <img src="/img/skills/" alt="" />
                </div>
                <div className="about-item">
                    <div className="about-contact">
                        <p>010</p>
                        <p>@메일</p>
                        <p>git</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;