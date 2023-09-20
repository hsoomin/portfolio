import React, { useState, useEffect } from 'react';
import { BiUpArrowAlt } from "react-icons/bi"; 

const QuickButton = () => {

    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({top: 0,behavior: "smooth"});
    };

    return isVisible && (
        <div 
        className="QuickButton"
        onClick={scrollToTop}>
            <button 
            className="quick_top" 
            type="button"
            >
                <BiUpArrowAlt className='quick-arrow'/>
            </button>
        </div>
    );
};

export default QuickButton;