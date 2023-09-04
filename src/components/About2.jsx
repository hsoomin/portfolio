import React from 'react';
import './About2.scss'

const About2 = () => {
    return (
        <div className='About2'>
            <div className="container">
                <h2>ABOUT ME</h2>
                <div className='about-list'>
                    <div className="about-img item">
                        <img src="/img/1.jpg" alt="" />
                        <div className='about-info'>
                            <p>01012345678</p>
                            <p>sdfsdfsdf@</p>
                            <p>hsoomin</p>
                        </div>
                    </div>
                    <div className="about-me item">
                        <div className="about-intro">~~~~~~~~~~</div>
                        <div className="about-contact">
                            <p>01012345678</p>
                            <p>sdfsdfsdf@</p>
                            <p>sdfsdf</p>
                        </div>
                    </div>
                    <div className="about-skills item">
                        <h3>SKILLS</h3>
                        <div className='skills-img'>
                            <img width={120} src="/img/skills/HTML.svg" alt="" />
                            <img width={120} src="/img/skills/CSS.svg" alt="" />
                            <img width={120} src="/img/skills/Sass.svg" alt="" />
                            <img width={120} src="/img/skills/Bootstrap.svg" alt="" />
                            <img width={120} src="/img/skills/JavaScript.svg" alt="" />
                            <img width={120} src="/img/skills/JQuery.svg" alt="" />
                            <img width={120} src="/img/skills/React-Dark.svg" alt="" />
                            <img width={120} src="/img/skills/VueJS-Light.svg" alt="" />
                            <img width={120} src="/img/skills/Figma-Light.svg" alt="" />
                            <img width={120} src="/img/skills/Git.svg" alt="" />
                        </div>
                    </div>
                    <div className="about-etc item">
                        <p>기타</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About2;