import React from 'react';
import './SideNav.scss';
import { Link } from 'react-scroll';

const SideNav = () => {
    
    //active
    
    return (
        <div className='sideNav'>
            <ul>
                <li>
                    <Link to='section1' spy={true} smooth={true}> COVER</Link>
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
            </ul>
        </div>
    );
};

export default SideNav;

