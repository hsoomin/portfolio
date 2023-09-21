import { BsFillSunFill , BsFillMoonFill  } from "react-icons/bs"; 
import React from 'react';
import { Link } from 'react-scroll';

const Header = ({ onToggleMode, isDarkMode }) => {
    
    return (
        <div className='Header'>
            <ul>
                <li>
                    <Link to='section1' spy={true} smooth={true}> HOME</Link>
                </li>
                <li>
                    <Link to='section2' spy={true} smooth={true}>ABOUT</Link>
                </li>
                <li>
                    <Link to='section3' spy={true} smooth={true}>PROJECT</Link>
                </li>
                <li>
                    <Link to='section4' spy={true} smooth={true}>CONTACT</Link>
                </li>            
                {isDarkMode 
                    ? (<li className='mode' onClick={onToggleMode}>🌞</li>) 
                    : (<li className='mode' onClick={onToggleMode}>🌛</li>)
                }
            </ul> 
        </div>
    );
};

export default Header;