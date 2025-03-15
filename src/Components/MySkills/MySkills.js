import React, {useEffect} from "react";
import "./MySkills.css"
import adobeXd from './assets/adobe-xd.svg'
import javascript from './assets/javascript.svg'
import linux from './assets/linux.svg'
import android from './assets/android.svg'
import ethereum from './assets/ethereum.svg'
import java from './assets/java.svg'
import github from './assets/github.svg'
import sql from './assets/sql.svg'
import solidity from './assets/solidity.svg'
import npm from './assets/npm.svg'
import cpp from './assets/cpp.svg'
import python from './assets/python.svg'
import tensorflow from './assets/tensorflow.svg'
// import pycharm from './assets/pycharm.svg'
import css from './assets/css.svg'
import php from './assets/php.svg'
import react from './assets/react.svg'
import django from './assets/django.svg'
import math from './assets/math.svg'
import numpy from './assets/numpy.svg'
import html from './assets/html.svg'


const MySkills = () => {

    useEffect(() => {
        let iconWrappers = document.querySelectorAll('.skill-icon-div');
        const skillsHeader = document.querySelector('.skills-wrapper h1');
        const skillsText = document.querySelector('.skills-text');
        iconWrappers = Array.prototype.slice.call(iconWrappers);
        iconWrappers = [skillsHeader, skillsText].concat(iconWrappers);


        let i = 0;
        let x = setInterval(() => {
            if (i === 22 || i >= iconWrappers.length) {
                clearInterval(x);
            } else if (iconWrappers[i]) {
                iconWrappers[i].style.opacity = 1;
                iconWrappers[i].style.paddingTop = '0px';
                i++;
            } else {
                clearInterval(x);
            }
        }, 80);
        
        // Clean up on unmount
        return () => clearInterval(x);
    }, []);

    const icons = [
        ['HTML', html],
        ['CSS', css],
        ['Python', python],
        ['C++', cpp],
        ['Django', django],
        ['React', react],
        ['JavaScript', javascript],
        ['MySQL', sql],
        ['Tensorflow', tensorflow],
        ['JAVA', java],
        ['Android', android],
        ['Adobe XD', adobeXd],
        ['GitHub', github],
        ['NPM', npm],
        ['Numpy', numpy],
        ['Ethereum', ethereum],
        ['Solidity', solidity],
        ['Linux', linux],
        ['PHP', php],
        ['Math', math]
    ]

    return (
        <div className="skills-wrapper">
            <h1>My <span>Skills</span></h1>
            <p className="skills-text">Here are some of my <span className="skills-special">skills</span> and <span
                className="skills-special">technologies</span> I've been working with</p>
            <div className="skills-icons">
                {
                    icons.map((x, i) => {
                        return (
                            <div className="icon-wrapper" key={i}>
                                <div className="skill-icon-div">
                                    {x[0] === 'Math' ? (
                                        <div className="math-icon">
                                            <span>∑</span>
                                        </div>
                                    ) : (
                                        <img className="skill-icon" src={x[1]} alt={x[0]} />
                                    )}
                                    <p className="icon-text">{x[0]}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MySkills
