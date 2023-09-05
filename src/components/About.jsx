import React from 'react';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';


const About = () => {
    
    return (
        <div className='About' id='section2'>
            <div className='container'>
                <div className="about-left">
                    <div className="about-img">
                        <img src="/img/1.jpg" alt="" />
                    </div>
                    <div className='about-info'>
                        <p>01012345678</p>
                        <p>sdfsdfsdf@</p>
                        <p>hsoomin</p>
                    </div>
                </div>
                <div className="about-right">
                    <div className="about-top">
                        <h2 className="about-title">
                            <Typewriter
                            options={{
                                strings: ['ABOUT ME'],
                                autoStart: true,
                                loop: true,
                            }}
                            />
                        </h2> 
                    </div>
                    <div className="about-bottom">
                        <div className="about-explain">
                            <div className='ex-top explain'>
                                <p>123</p>
                            </div>
                            <div className='ex-center explain'>
                                <p>456</p>
                            </div>
                            <div className='ex-bottom explain'>
                                <p>789</p>
                            </div>
                        </div>
                        <div className='about-explain'>
                            <div className="about-skill">
                                <h3>Skills</h3>
                                <div className='skills-img'>
                                    <img width={100} src="/img/skills/HTML.svg" alt="" />
                                    <img width={100} src="/img/skills/CSS.svg" alt="" />
                                    <img width={100} src="/img/skills/Sass.svg" alt="" />
                                    <img width={100} src="/img/skills/Bootstrap.svg" alt="" />
                                    <img width={100} src="/img/skills/JQuery.svg" alt="" />
                                    <img width={100} src="/img/skills/JavaScript.svg" alt="" />
                                    <img width={100} src="/img/skills/Figma-Light.svg" alt="" />
                                    <img width={100} src="/img/skills/React-Dark.svg" alt="" />
                                    <img width={100} src="/img/skills/VueJS-Light.svg" alt="" />
                                    <img width={100} src="/img/skills/TypeScript.svg" alt="" />
                                    <img width={100} src="/img/skills/NodeJS-Dark.svg" alt="" />
                                    <img width={100} src="/img/skills/Git.svg" alt="" />
                                    <img width={100} src="/img/skills/Github-Dark.svg" alt="" />
                                    <img width={100} src="/img/skills/VSCode-Light.svg" alt="" />
                                </div>
                            </div>
                            <div className="about-etc">
                                <p>fdgdfgdfg</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;