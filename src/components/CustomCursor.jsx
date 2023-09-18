import React, { useState, useEffect } from 'react';

const CustomCursor = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // 마우스의 현재 위치(clientX, clientY)
        const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", setFromEvent);
    
        return () => {
            window.removeEventListener("mousemove", setFromEvent);
        };
    }, []);

    return (
        <div 
        className="custom-cursor"
        style={{
            left: `${position.x}px`,
            top: `${position.y}px`
        }}
        ></div>
    );
};

export default CustomCursor;