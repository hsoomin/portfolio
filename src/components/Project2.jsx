import React, { useState } from 'react';
import './Project2.scss';
import { BiRightArrowAlt, BiLeftArrowAlt, BiPlus } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ProjectData from './ProjectData';

const Project2 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const prevSlide = () => {
        setCurrentSlide(Math.max(currentSlide - 1, 0));
    };
    
    const nextSlide = () => {
        setCurrentSlide(Math.min(currentSlide + 1, Math.ceil(ProjectData.length / 3) - 1));
    };

    const navigate = useNavigate();
    const goDetail = (projectId) => {
        navigate(`/detail/${projectId}`);
    };
    
    return (
        <div className='Project2'>
            <div className='container'>
                <div className='slide-box'>
                    {ProjectData.slice(currentSlide * 3, currentSlide * 3 + 3).map((project, index) => (
                        <div className='project-item' key={index}>
                            <div className="project-img">
                                <img src={process.env.PUBLIC_URL + project.imgSrc} alt="" />
                            </div>
                            <div className="project-info">
                                <h2>{project.projectName}</h2>
                                <p>{project.projectDescript}</p>
                                <button className="more-btn" onClick={() => goDetail(project.id)}>
                                    더 알아보기 <BiPlus />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="page-btn">
                    <button className="btn_prev" onClick={prevSlide}><BiLeftArrowAlt /></button>
                    <button className="btn_next" onClick={nextSlide}><BiRightArrowAlt /></button>
                </div>
            </div>
        </div>
    );
};

export default Project2;
