import { BiRightArrowAlt ,BiLeftArrowAlt } from "react-icons/bi"; 
import { AiOutlinePlusCircle } from "react-icons/ai"; 
import React, { useState } from 'react';
import './Project.scss'

const Project = () => {
    const images = [
        {
            imgSrc: '/img/pro01.png',
            projectName: '국중박',
            projectLink: '#'
        },
        {
            imgSrc: '/img/pro02.png',
            projectName: '맥도날드',
            projectLink: '#'
        },
        {
            imgSrc: '/img/pro03.png',
            projectName: '설빙',
            projectLink: '#'
        },
    ];

    const [currentImage, setCurrentImage] = useState(0);

    const goToPreviousImage = () => {
        setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    
    const goToNextImage = () => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    };    

    const currentImageData = images[currentImage];

    return (
        <div className="project" id='section3'>
            <ul className='project-slide'>
                {images.map((image, index) => (
                    <li
                    key={index}
                    style={{
                        opacity: index === currentImage ? 1 : 0,
                        visibility: index === currentImage ? 'visible' : 'hidden'
                    }}
                    >
                        <div className="left-img">
                            <img src={process.env.PUBLIC_URL + image.imgSrc} alt="" />
                        </div>
                        <div className="right-info">
                            <div className='info-txt'>
                                <p>{image.projectName}</p>
                                <a href={image.projectLink} className="more-btn">
                                    <span><AiOutlinePlusCircle /></span> 더 알아보기
                                </a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="page-btn">
                <button className="btn_prev" onClick={goToPreviousImage}><BiLeftArrowAlt /></button>
                <button className="btn_next" onClick={goToNextImage}><BiRightArrowAlt /></button>
            </div>
            <div className="paging">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
            </div>
        </div>
    );
};

export default Project;


