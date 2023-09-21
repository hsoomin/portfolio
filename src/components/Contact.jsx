import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import FlowText from './FlowText';


const Contact = () => {
    const [state, handleSubmit] = useForm("xqkvbywp");
    
    // 폼 제출이 성공적이면, alert 창 띄우기
    useEffect(() => {
        if (state.succeeded) {
        alert('Thank You😎');
        }
    }, [state.succeeded]);

    return (
        <div className='Contact' id='section4'>
            <div className='container'>
                <div className='contact-left'>
                    <h2 className="contact-title">
                        <Typewriter
                        options={{
                            strings: ['CONTACT'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                    </h2> 
                    <div className="contact-qr">
                        <img src={process.env.PUBLIC_URL + '/img/QR.png'} alt="" />
                    </div>
                    {/* <div className="hover">
                        <img src={process.env.PUBLIC_URL + '/img/hoverbg.png'} alt="" />
                    </div> */}
                    <div className='contact-info'>
                        <p>Tel. 010-2966-9281</p>
                        <p>E-Mail. wnghkdsns@naver.com</p>
                        <p>Git. hsoomin</p>
                    </div>
                </div>
                <div className='contact-right'>
                    <form onSubmit={handleSubmit} className='contact-form'>
                        <div className='title'>
                            <h4>E-MAIL</h4>
                        </div>
                        <div className='info'>
                            <input 
                            type="text" 
                            name="name" 
                            placeholder="이름" 
                            />
                            <input
                                id="email"
                                type="email" 
                                name="email"
                                placeholder="보내시는 분 email 주소" 
                            />
                            {/* Email에 대한 오류 메시지 표시 */}
                            <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                            />
                            <textarea
                                id="message"
                                name="message"
                                placeholder="message" 
                            />
                            <ValidationError 
                                prefix="Message" 
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                        <button type="submit" disabled={state.submitting} className='btn'>
                            Send
                        </button>
                    </form>
                </div>
            </div>
            <FlowText />
        </div>
    );
};

export default Contact;


