import React from 'react';
import { AiOutlinePlusCircle } from "react-icons/ai"; 
import './Project2.scss'

const Project2 = () => {
    return (
        <div className='Project2'>
            <div className='slide-box'>
                <div className="left-box">
                    <div className='slide-item'>
                        <div className="left-img">
                            <img src={process.env.PUBLIC_URL + '/img/pro1.png'} alt="" />
                        </div>
                        <div className="right-info">
                            <div className='info-txt'>
                                <p>국중박</p>
                                <a href="#" className="more-btn">
                                    <span><AiOutlinePlusCircle /></span> 더 알아보기
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='slide-item'>
                        <div className="left-img">
                            <img src={process.env.PUBLIC_URL + '/img/pro2.png'} alt="" />
                        </div>
                        <div className="right-info">
                            <div className='info-txt'>
                                <p>국중박</p>
                                <a href="#" className="more-btn">
                                    <span><AiOutlinePlusCircle /></span> 더 알아보기
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='slide-item'>
                        <div className="left-img">
                            <img src={process.env.PUBLIC_URL + '/img/pro3.png'} alt="" />
                        </div>
                        <div className="right-info">
                            <div className='info-txt'>
                                <p>국중박</p>
                                <a href="#" className="more-btn">
                                    <span><AiOutlinePlusCircle /></span> 더 알아보기
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-box">
                </div>
            </div>
        </div>
    );
};

export default Project2;