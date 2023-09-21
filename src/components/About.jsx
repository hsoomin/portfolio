import React from 'react';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';


const About = () => {
    
    return (
        <div className='About' id='section2'>
            <div className='container'>
                <div className="about-left">
                    <div className="about-img">
                        <img src={process.env.PUBLIC_URL + '/img/1.jpg'} alt="" />
                    </div>
                    <div className='about-info'>
                        <p>01029669281</p>
                        <p>wnghkdsns@naver.com</p>
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
                                    <img width={100} src={process.env.PUBLIC_URL + '/img/skills/HTML.svg'} alt=""/>
                                    <img width={100} src={process.env.PUBLIC_URL + '/img/skills/CSS.svg'} alt="" />
                                    <img width={100} src={process.env.PUBLIC_URL + '/img/skills/Sass.svg'}  alt="" />
                                    <img width={100} src={process.env.PUBLIC_URL + '/img/skills/Bootstrap.svg'} alt="" />
                                    <img width={100} src={process.env.PUBLIC_URL + '/img/skills/JQuery.svg'} alt="" />
                                    <img width={100} src={process.env.PUBLIC_URL + '/img/skills/JavaScript.svg'} alt="" />
                                    <img width={100} className="bounce-img" src={process.env.PUBLIC_URL + '/img/skills/React-Dark.svg'} alt="" />
                                    <img width={100} src={process.env.PUBLIC_URL + '/img/skills/VueJS-Light.svg'} alt="" />
                                    {/* <img width={100} src={process.env.PUBLIC_URL + '/img/skills/TypeScript.svg'} alt="" /> */}
                                    <img width={100} src={process.env.PUBLIC_URL + '/img/skills/NextJS-Light.svg'} alt="" />
                                    <img width={100} src={process.env.PUBLIC_URL + '/img/skills/NodeJS-Dark.svg'} alt="" />
                                    <img width={100} src={process.env.PUBLIC_URL + '/img/skills/Git.svg'} alt="" />
                                    <img width={100} src={process.env.PUBLIC_URL + '/img/skills/Github-Dark.svg'} alt="" />
                                    <img width={100} src={process.env.PUBLIC_URL + '/img/skills/VSCode-Light.svg'} alt="" />
                                    <img width={100} className="bounce-img" src={process.env.PUBLIC_URL + '/img/skills/Figma-Light.svg'} alt="" />
                                </div>
                            </div>
                            {/* <div className="about-etc">
                                <p>fdgdfgdfg</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;