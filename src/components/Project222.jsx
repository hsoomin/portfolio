import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import React, { useState } from 'react';
import './Project222.scss'

const Project = () => {
    const images = [
        {
            imgSrc: '/img/pro01.png',
            projectName: '국중박',
            projectLink: '#',
            projectDescript: '클론코딩~~~~~~~~'
        },
        {
            imgSrc: '/img/pro02.png',
            projectName: '맥도날드',
            projectLink: '#',
            projectDescript: '부트스트랩을~~~'
        },
        {
            imgSrc: '/img/pro03.png',
            projectName: '설빙',
            projectLink: '#',
            projectDescript: '리디자인~~~~~'
        },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const currentImage = images[currentImageIndex];


    return (
        <div className="project" id='section3'>
            <div className='project-slide'>
                <div className="left-img" style={{ transform: `translateY(-${currentImageIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <img key={index} src={image.imgSrc} alt={`Image ${index}`} />
                    ))}
                </div>
                <div className="right-info">
                    <div className="info-txt">
                        <h2>{currentImage.projectName}</h2>
                        <p>{currentImage.projectDescript}</p>
                        <a href="#"></a>
                    </div>
                </div>
            </div>
            <div className="page-btn">
                <button className="btn_prev" onClick={handlePrevClick}><BiLeftArrowAlt /></button>
                <button className="btn_next" onClick={handleNextClick}><BiRightArrowAlt /></button>
                {/* <div className="paging">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div> */}
            </div>
        </div>
    );
};

export default Project;

