import { BiDownArrowAlt } from "react-icons/bi"; 
import React from 'react';
import { animateScroll as scroll } from 'react-scroll'; // react-scroll에서 필요한 부분 
import 'animate.css';

const Cover = () => {
    
    // 다음 섹션으로 스크롤 이동
    const scrollToNextSection = () => {
        scroll.scrollTo(window.innerHeight, { smooth: true, duration: 1000 }); 
    };

    return (
        <div className='Cover' id='section1'>
            <div className='cover-container'>
                <div className="title">
                    <h1 className="animate__animated animate__fadeInDownBig">SOOMIN</h1>
                    <h1 className="animate__animated animate__fadeInDownBig animate__delay-1s">PORTFOLIO</h1>
                </div>
                <div className='cover-arrow'>
                    <div className="arrow-down" onClick={scrollToNextSection}>
                        <BiDownArrowAlt className="animate__animated animate__fadeInDownBig animate__delay-2s"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;