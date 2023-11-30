import React from 'react';
import { Link } from 'react-router-dom';
import ProjectData from '../data/ProjectData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Typewriter from 'typewriter-effect';


const Project = () => {
    console.log(ProjectData);
    
    return (
        <div className="Project" id='section3'>
            <div className='container'>
                <h2 className="title">
                    <Typewriter
                    options={{
                        strings: ['PROJECT'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </h2> 
                <Swiper 
                    className="mySwiper"
                    navigation={true} 
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1.3,
                        },
                        1024: {
                            slidesPerView: 2.4,
                        }
                    }}
                >
                {ProjectData.map((project, index) => {
                    if (!Array.isArray(project.projectSkills)) {
                        console.error(`Project at index ${index} has no skills array.`);
                        return null; 
                    }
                    return (
                        <SwiperSlide key={index}>
                            <div className='project-item'>
                                <div className="project-img">
                                    <img src={process.env.PUBLIC_URL + project.imgSrc} alt="" />
                                </div>
                                <div className="project-info">
                                    <div className='project-skills' >
                                    {project.projectSkills.map((skill, skillIndex) => (
                                        <img key={skillIndex} src={process.env.PUBLIC_URL + skill} alt="Skill" />
                                    ))}
                                    </div>
                                    <h3>{project.projectName}</h3>
                                    <p>{project.projectDescript}</p>
                                    <p className='project-work'>작업 기여도: 100%</p>
                                    <div className='project-btn'>
                                        <Link to={project.projectCode} target="_blank">CODE</Link>
                                        <Link to={project.projectLink} target="_blank">VIEW</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
                </Swiper>
            </div>
        </div>
    );
};

export default Project;