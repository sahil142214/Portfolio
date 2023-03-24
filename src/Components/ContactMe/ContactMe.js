import React, {useEffect, useState} from "react";
import "./ContactMe.css"

const ContactMe = () => {

    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        let H1 = [document.querySelector('.contact-wrapper h1')];
        const inputs = Array.prototype.slice.call(document.querySelectorAll('.contact-inputs input'));
        const textAreaButton = [document.querySelector('.contact-inputs textarea'), document.querySelector('.contact-inputs button')];
        const rightDivs = Array.prototype.slice.call(document.querySelectorAll('.contact-info div'))

        const H2 = [document.querySelector('.contact-footer h1')];
        const followIcons = Array.prototype.slice.call(document.querySelectorAll('.contact-footer svg'))
        const total = H1.concat(inputs).concat(textAreaButton).concat(rightDivs).concat(H2).concat(followIcons);
        let i = 0;
        let x = setInterval(() => {
            if (i === total.length) {
                total.forEach((el) => {
                    el.style.transition = "none";
                })
                console.log(i);
                clearInterval(x);
            }
            total[i].style.opacity = 1;
            total[i].style.transform = 'translate(0, 0)';
            i++;

        }, 80);

    })

    function handleSubmit(){
        
    }


    return (<div className="contact-wrapper">
            <h1>Contact <span>Me</span></h1>
            <div className="contact-main">
                <div className="contact-inputs">
                    <input type="text" value={name} placeholder="Your Name" className="name-input"
                           onChange={(e) => setName(e.target.value)}/>
                    <input type="text" value={subject} placeholder="Subject" className="name-subject"
                           onChange={(e) => setSubject(e.target.value)}/>
                    <input type="text" value={email} placeholder="Your Email" className="name-email"
                           onChange={(e) => setEmail(e.target.value)}/>
                    <textarea className="name-message" value={message} name="" rows="5" placeholder="Your Message"
                              onChange={(e) => setMessage(e.target.value)} resizable={false}></textarea>
                    <button className="send-button" onClick={handleSubmit}>
                        SUBMIT
                    </button>
                </div>
                <div className="contact-info">
                    <div className="contact-mail">
                        <svg className="w-6 h-6" fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <path fill-rule="evenodd"
                                  d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z"
                                  clip-rule="evenodd" fill="#B3C5EF"></path>
                        </svg>

                        <p className="contact-info-header">navjeetbharti8877@gmail.com</p>
                        <p className="contact-info-text">Mail me for any questions and inquiries.</p>
                    </div>
                    <div className="line-break"></div>
                    <div className="contact-call">
                        <svg className="w-6 h-6" fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <path
                                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                                fill="#B3C5EF"></path>
                        </svg>

                        <p className="contact-info-header">+91 6200075051</p>
                        <p className="contact-info-text">Call me for any questions and inquiries.</p>
                    </div>
                    <div className="line-break"></div>
                    <div className="contact-location">
                        <svg className="w-6 h-6" fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <path fill-rule="evenodd"
                                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                  clip-rule="evenodd" fill="#B3C5EF"></path>
                        </svg>

                        <p className="contact-info-header">IIT Roorkee, Uttarakhand, India</p>
                        <p className="contact-info-text">Visit me for any questions and inquiries.</p>
                    </div>
                </div>

            </div>

            <div className="contact-footer">
                <h1>Follow me on</h1>
                <div className="follow-icons">
                    <svg onClick={() => window.open('', '_blank')}
                         viewBox="0 0 24 24" stroke-width="1.5"
                         className="w-8 h-8 transition delay-75 hover:text-primary hover:scale-125" fill="none"
                         stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="32"
                         height="32">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" stroke-width="1.5px"></path>
                        <rect className="icon-stroke" x="4" y="4" width="16" height="16" rx="2" stroke="#B3C5EF"
                              fill="none"
                              stroke-width="1.5px"></rect>
                        <line className="icon-stroke" x1="8" y1="11" x2="8" y2="16" stroke="#B3C5EF" fill="none"
                              stroke-width="1.5px"></line>
                        <line className="icon-stroke" x1="8" y1="8" x2="8" y2="8.01" stroke="#B3C5EF" fill="none"
                              stroke-width="1.5px"></line>
                        <line className="icon-stroke" x1="12" y1="16" x2="12" y2="11" stroke="#B3C5EF" fill="none"
                              stroke-width="1.5px"></line>
                        <path className="icon-stroke" d="M16 16v-3a2 2 0 0 0 -4 0" stroke="#B3C5EF" fill="none"
                              stroke-width="1.5px"></path>
                    </svg>
                    <svg onClick={() => window.open('https://github.com/navjeet-py', '_blank')}
                         viewBox="0 0 24 24" stroke-width="1.5"
                         className="w-8 h-8 transition delay-75 hover:text-primary hover:scale-125" fill="none"
                         stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="32"
                         height="32">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" stroke-width="1.5px"></path>
                        <path className="icon-stroke"
                              d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                              stroke="#B3C5EF" fill="none" stroke-width="1.5px"></path>
                    </svg>

                    <svg onClick={() => window.open('https://instagram.com/namvjeet', '_blank')}
                         viewBox="0 0 24 24" stroke-width="1.5"
                         className="w-8 h-8 transition delay-75 hover:text-primary hover:scale-125" fill="none"
                         stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="32"
                         height="32">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" stroke-width="1.5px"></path>
                        <rect className="icon-stroke" x="4" y="4" width="16" height="16" rx="4" stroke="#B3C5EF"
                              fill="none"
                              stroke-width="1.5px"></rect>
                        <circle className="icon-stroke" cx="12" cy="12" r="3" stroke="#B3C5EF" fill="none"
                                stroke-width="1.5px"></circle>
                        <line className="icon-stroke" x1="16.5" y1="7.5" x2="16.5" y2="7.501" stroke="#B3C5EF"
                              fill="none"
                              stroke-width="1.5px"></line>
                    </svg>

                    <svg onClick={() => window.open('', '_blank')}
                         viewBox="0 0 24 24" stroke-width="1.5"
                         className="w-8 h-8 transition delay-75 hover:text-primary hover:scale-125" fill="none"
                         stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="32"
                         height="32">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" stroke-width="1.5px"></path>
                        <path className="icon-stroke"
                              d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
                              stroke="#B3C5EF" fill="none" stroke-width="1.5px"></path>
                    </svg>

                </div>
            </div>
        </div>

    )
}

export default ContactMe