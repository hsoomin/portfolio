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
                        return null; // Return null or some default element
                    }
                    return (
                        <SwiperSlide key={index}>
                            <div className='project-item'>
                                <div className="project-img">
                                    <img src={process.env.PUBLIC_URL + project.imgSrc} alt="" />
                                </div>
                                <div className="project-info">
                                    <h3>{project.projectName}</h3>
                                    <p>{project.projectDescript}</p>
                                    <div className='project-skills' >
                                    {project.projectSkills.map((skill, skillIndex) => (
                                        <img key={skillIndex} src={process.env.PUBLIC_URL + skill} alt="Skill" />
                                    ))}
                                    </div>
                                    <Link to={project.projectLink} target="_blank" className="more-btn">자세히 보기</Link>
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