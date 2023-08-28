import { CgArrowDown } from "react-icons/cg"; 
import React from 'react';
import { Link } from 'react-scroll';

const Cover = () => {
    return (
        <div className='Cover' id='section1'>
            <div className='cover-container'>
                <h1>PORTFOLIO</h1>
                <h2>2023</h2>
                <div className="arrow-down">
                    <CgArrowDown />
                </div>
            </div>
        </div>
    );
};

export default Cover;