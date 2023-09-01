import React, { useEffect, useRef } from 'react';
import './FlowText.scss'

const FlowText = () => {
    const pTag1Ref = useRef(null);
    const pTag2Ref = useRef(null);

    useEffect(() => {
        const textArr1 = 'Yummy Tasty Delicious Useful Coding Yummy Yummmmy Yummmmmmmmmy yum'.split(' ');
        const textArr2 = 'ThankYou ThankYou ThankYou ThankYou ThankYou ThankYou'.split(' ');

        let count1 = 0;
        let count2 = 0;

        initTexts(pTag1Ref.current, textArr1);
        initTexts(pTag2Ref.current, textArr2);

        function initTexts(element, textArray) {
            if (element) {
                textArray.push(...textArray);
                for (let i = 0; i < textArray.length; i++) {
                element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`;
                }
            }
        }

        function marqueeText(count, element, direction) {
            if (element && count > element.scrollWidth / 2) {
                element.style.transform = `translate3d(0, 0, 0)`;
                count = 0;
            }
            if (element) {
                element.style.transform = `translate3d(${direction * count}px, 0, 0)`;
            }

        return count;
        }

        function animate() {
        count1++;
        count2++;

        count1 = marqueeText(count1, pTag1Ref.current, -1);
        count2 = marqueeText(count2, pTag2Ref.current, 1);

        window.requestAnimationFrame(animate);
        }

    function scrollHandler() {
        if (pTag1Ref.current && pTag2Ref.current) {
        count1 += 15;
        count2 += 15;
        }
    }

    window.addEventListener('scroll', scrollHandler);
    animate();

    // Clean up event listener on component unmount
    return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
    <div className='FlowText'>
        <div className="cover">
            <p ref={pTag1Ref} className="first-parallel"></p>
        </div>
        <div className="cover">
            <p ref={pTag2Ref} className="second-parallel"></p>
        </div>
    </div>
    );
};

export default FlowText;
