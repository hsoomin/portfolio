import React, { useState } from 'react';


const FollowCursor = () => {
    //마우스의 현재 위치(mouseX, mouseY)
    //시작 위치(startX, startY)
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);

    const handleMouseMove = (e) => {
        setMouseX(e.clientX);
        setMouseY(e.clientY);
    };
    
    // lerp 함수 정의 (두 값 사이에 중간 값 계산)
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
            transform: `translate(${startX}px, ${startY +10}px)`,  //CustomCursor 안으로 들어올 수 있게 +10
            position: "fixed",
            width: "10px",
            height: "10px", 
            borderRadius: "50%", 
            backgroundColor: "#00ff00" ,
            zIndex:999
        }}
        ></div>
    );
};


export default FollowCursor;