import React, { useState, useEffect, useRef, useCallback } from 'react';


const Scroll100vh = ({ children }) => {
    const scrollDistance = window.innerHeight;
    const scrollDuration = 700;

    const [isScrolling, setIsScrolling] = useState(false);
    const touchStartY = useRef(null);

    const smoothScrollBy = useCallback((amount, duration) => {
        setIsScrolling(true);
        const start = window.scrollY;
        const target = start + amount;
        const startTime = performance.now();

        const animateScroll = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime < duration) {
            const ease = easeInOutQuad(elapsedTime, 0, 1, duration);
            window.scrollTo(0, start + ease * amount);
            requestAnimationFrame(animateScroll);
        } else {
            window.scrollTo(0, target);
            setIsScrolling(false);
        }
    };  

    requestAnimationFrame(animateScroll);
  }, []); // smoothScrollBy 함수를 종속성 배열에서 비워둠

    const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const handleTouchStart = useCallback((event) => {
        if (isScrolling) return;
        touchStartY.current = event.touches[0].clientY;
    }, [isScrolling]);

    const handleTouchMove = useCallback(
        (event) => {
        if (isScrolling || touchStartY.current === null) return;
        const touchY = event.touches[0].clientY;
        const deltaY = touchY - touchStartY.current;
        const scrollAmount = deltaY > 0 ? -scrollDistance : scrollDistance; 
        smoothScrollBy(scrollAmount, scrollDuration);
        touchStartY.current = touchY;
        },
        [isScrolling, scrollDistance, scrollDuration, smoothScrollBy]
    );

    const handleScroll = useCallback(
        (event) => {
        if (isScrolling) return;
        const scrollAmount = event.deltaY > 0 ? scrollDistance : -scrollDistance;
        smoothScrollBy(scrollAmount, scrollDuration);
        },
        [isScrolling, scrollDistance, scrollDuration, smoothScrollBy]
    );

    useEffect(() => {
        const container = document.getElementById('scroll-container');
        container.addEventListener('wheel', handleScroll, { passive: false });
        container.addEventListener('touchstart', handleTouchStart, { passive: false });
        container.addEventListener('touchmove', handleTouchMove, { passive: false });

        return () => {
        container.removeEventListener('wheel', handleScroll);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        };
    }, [handleScroll, handleTouchStart, handleTouchMove]);

    return (
        <div id="scroll-container">
            {children}
        </div>
    );
};

export default Scroll100vh;