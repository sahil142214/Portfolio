import React, {useEffect} from "react";
import "./AboutMe.css"
import face from "./../Phone/assets/face.png"
import {Link} from "react-router-dom";


const AboutMe = () => {

    useEffect(() => {
        let allDivs = document.querySelectorAll('.about-wrapper div');
        allDivs = Array.prototype.slice.call(allDivs);
        allDivs = [document.querySelector('h1')].concat(allDivs);


        let i = 0;
        let x = setInterval(() => {
            allDivs[i].style.opacity = 1;
            allDivs[i].style.transform = 'translate(0, 0)';
            i++;
            if (i === 6) {
                clearInterval(x);
            }
        }, 150);
    })

    function externalLink(e) {
        window.open(e.target.getAttribute('data-target'), '_blank');
    }

    return (
        <div className="about-wrapper">
            <h1>About <span>Me</span></h1>
            <div className="about-face">
                <img src={face} alt=""/>
            </div>

            <div className="about-text">
                <div className="left">
                    <p>Hello World 👋! I'm <span>Navjeet Bharti</span>, a first year undergraduate student
                        at <span>IIT Roorkee</span>. I've
                        been an enthusiast of programming my whole life. I am part of programming clubs, <span>PAG</span> and <span>MDG</span> at IIT Roorkee. I am interested in <span>web dev,
                            competitive programming, machine learning </span> and <span> blockchains </span> .



                    </p>
                </div>
                <div className="barrier"></div>
                <div className="right">
                                                                I have also been a math enthusiast since my childhood.

                    You can find me on <span data-target="https://github.com/navjeet-py" className="span-url"
                                             onClick={externalLink}>GitHub</span>.
                     You can also see my blogs on <span data-target="https://medium.com/@navjeetbharti8877"
                                                                className="span-url"
                                                                onClick={externalLink}>Medium</span>.
                    Beside, if you're interested in a project
                    or you want me to build one, you can <Link to='/contact'>contact</Link> me...😘
                    <Link to="/resume-navjeet.pdf" target="_blank">
                        <button className="resume-button">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2px"
                                      d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" stroke="white"
                                      fill="none"></path>
                            </svg>
                            DOWNLOAD RESUME
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default AboutMe
