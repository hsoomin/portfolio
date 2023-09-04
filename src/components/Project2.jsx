import React from 'react';
import './Project2.scss';
import { Link } from 'react-router-dom';
import ProjectData from '../data/ProjectData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Project2 = () => {
    console.log(ProjectData);
    
    return (
        <div className="project2" id='section3'>
            <div className='container'>
                <Swiper 
                    className="mySwiper"
                    navigation={true} 
                    modules={[Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 4,
                        }
                    }}
                    style={{
                        "--swiper-navigation-color": "#888",
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
                                    <h2>{project.projectName}</h2>
                                    <p>{project.projectDescript}</p>
                                    <div className='project-skills' >
                                    {project.projectSkills.map((skill, skillIndex) => (
                                            <img key={skillIndex} src={skill} alt="Skill"/>
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

export default Project2;
