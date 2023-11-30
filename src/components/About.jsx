import React from 'react';
import Typewriter from 'typewriter-effect';


const About = () => {
    
    return (
        <div className='About' id='section2'>
            <div className='container'>
                <div className="about-left">
                    <img src={process.env.PUBLIC_URL + '/img/pic.jpg'} alt="profile" />
                </div>
                <div className="about-right">
                    <h2 className="about-title">
                        <Typewriter
                        options={{
                            strings: ['ABOUT ME'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                    </h2> 
                    <div className='about-me'>
                        <h1 className='about-info'>
                            <span>안녕하세요,</span> 황수민<span>입니다.😊</span>
                        </h1>
                        <p>1994.11.08</p>
                        <div className='about-skills'>
                            <img width={100} src={process.env.PUBLIC_URL + '/img/skills/HTML.svg'} alt="HTML"/>
                            <img width={100} src={process.env.PUBLIC_URL + '/img/skills/CSS.svg'} alt="CSS" />
                            <img width={100} className="bounce-img" src={process.env.PUBLIC_URL + '/img/skills/Sass.svg'}  alt="Sass" />
                            <img width={100} src={process.env.PUBLIC_URL + '/img/skills/Bootstrap.svg'} alt="Bootstrap" />
                            <img width={100} src={process.env.PUBLIC_URL + '/img/skills/JQuery.svg'} alt="JQuery" />
                            <img width={100} src={process.env.PUBLIC_URL + '/img/skills/JavaScript.svg'} alt="JavaScript" />
                            <img width={100} className="bounce-img" src={process.env.PUBLIC_URL + '/img/skills/React-Dark.svg'} alt="React" />
                            <img width={100} src={process.env.PUBLIC_URL + '/img/skills/VueJS-Light.svg'} alt="Vue" />
                            <img width={100} src={process.env.PUBLIC_URL + '/img/skills/TypeScript.svg'} alt="TypeScript" />
                            <img width={100} src={process.env.PUBLIC_URL + '/img/skills/NextJS-Light.svg'} alt="NextJS" />
                            <img width={100} src={process.env.PUBLIC_URL + '/img/skills/NodeJS-Dark.svg'} alt="NodeJS" />
                            <img width={100} src={process.env.PUBLIC_URL + '/img/skills/Github-Dark.svg'} alt="Github" />
                            <img width={100} src={process.env.PUBLIC_URL + '/img/skills/VSCode-Light.svg'} alt="VSCode" />
                            <img width={100} className="bounce-img" src={process.env.PUBLIC_URL + '/img/skills/Figma-Light.svg'} alt="Figma" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;