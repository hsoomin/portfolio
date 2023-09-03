import React, { useState } from 'react';


const FollowCursor = () => {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);

    const handleMouseMove = (e) => {
        setMouseX(e.clientX);
        setMouseY(e.clientY);
    };
    
    // lerp 함수 정의
    const lerp = (s, e, a) => {
        return s + (e - s) * a;
    };
    
    // frame 함수 정의
    const frame = () => {
        requestAnimationFrame(frame);
    
        setStartX((prevStartX) => lerp(prevStartX, mouseX, 0.07));
        setStartY((prevStartY) => lerp(prevStartY, mouseY, 0.07));
    };
    requestAnimationFrame(frame);
    window.addEventListener('mousemove', handleMouseMove);

    
    return (
        <div 
        id="circle" 
        style={{ 
            transform: `translate(${startX}px, ${startY}px)`,
            position: "fixed",
            width: "50px",
            height: "50px", 
            borderRadius: "50%", 
            backgroundColor: "#00ff00" ,
            zIndex:9999999999
        }}
        ></div>
    );
};


export default FollowCursor;