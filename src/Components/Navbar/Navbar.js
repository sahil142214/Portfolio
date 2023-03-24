import React, {useEffect, useState} from "react";
import "./Navbar.css"
import {useNavigate, Link} from "react-router-dom";


const Navbar = (props) => {
    const navigate = useNavigate();

    const [theme, setTheme] = useState('dark');
    function changeTheme() {
        if (theme === "dark") {
            document.documentElement.style.setProperty('--nav-bg', 'rgb(240, 214, 232)');
            document.documentElement.style.setProperty('--body-bg', 'rgb(240, 214, 232)');
            document.documentElement.style.setProperty('--text-color', '#632C3B');
            document.documentElement.style.setProperty('--active-color', '#E86D7B');
            document.documentElement.style.setProperty('--hover-color', 'rgba(99,44,59,0.1)');
            document.documentElement.style.setProperty('--about-bg', 'rgb(216, 151, 197)');
            document.documentElement.style.setProperty('--border-radius', '20px');
            document.documentElement.style.setProperty('--nav-shadow-opacity', '0.2');
            document.documentElement.style.setProperty('--specials', 'deeppink');
            document.documentElement.style.setProperty('--icons-bg', 'rgb(240, 214, 232)');
            setTheme('light');
        } else {
            document.documentElement.style.setProperty('--nav-bg', '#0F1729');
            document.documentElement.style.setProperty('--body-bg', '#0F1729FF');
            document.documentElement.style.setProperty('--text-color', '#B3C5EF');
            document.documentElement.style.setProperty('--active-color', '#0000FF');
            document.documentElement.style.setProperty('--hover-color', 'rgba(179, 197, 239, 0.1)');
            document.documentElement.style.setProperty('--border-radius', '8px');
            document.documentElement.style.setProperty('--about-bg', 'rgb(12, 19, 34)');
            document.documentElement.style.setProperty('--nav-shadow-opacity', '0.5');
            document.documentElement.style.setProperty('--specials', 'rgb(130, 141, 248)');
            document.documentElement.style.setProperty('--icons-bg', '#1B2234');
            setTheme('dark');
        }
    }


    useEffect(() => {
        // changeTheme();

        const active = props.active;
        const menus = document.querySelectorAll('li');
        menus.forEach((menu) => {
            if (menu.innerText === active) {
                menu.className = 'active';
            }
        })
    })

    function logoClick() {
        if (window.location.pathname === '/') {
            return;
        }
        navigate('/');
    }

    return (<nav>
        <div className="nav-header" onClick={logoClick}>
            <span className="logo">Navjeet.</span>
            <svg className="logo-tick" xmlns="http://www.w3.org/2000/svg" width="26.67" height="26.67"
                 viewBox="0 0 26.67 26.67">
                <path
                    d="M9.113,4.425A5.111,5.111,0,0,0,12.022,3.22a5.111,5.111,0,0,1,6.628,0,5.111,5.111,0,0,0,2.909,1.205,5.111,5.111,0,0,1,4.687,4.687,5.1,5.1,0,0,0,1.205,2.909,5.111,5.111,0,0,1,0,6.628,5.111,5.111,0,0,0-1.205,2.909,5.111,5.111,0,0,1-4.687,4.687,5.111,5.111,0,0,0-2.909,1.205,5.111,5.111,0,0,1-6.628,0,5.111,5.111,0,0,0-2.909-1.205,5.111,5.111,0,0,1-4.687-4.687A5.111,5.111,0,0,0,3.22,18.649a5.111,5.111,0,0,1,0-6.628A5.111,5.111,0,0,0,4.425,9.113,5.111,5.111,0,0,1,9.113,4.425Zm12.4,8.755a1.667,1.667,0,1,0-2.357-2.357l-5.489,5.489-2.155-2.155a1.667,1.667,0,1,0-2.357,2.357l3.334,3.334a1.667,1.667,0,0,0,2.357,0l6.668-6.668Z"
                    transform="translate(-2 -2)"
                    fill='none'/>
            </svg>
        </div>

        <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            {/*<li><Link to="/">Services</Link></li>*/}
            <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="theme" onClick={changeTheme}>
            <svg className="theme-icon" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27">
                <path
                    d="M8.556,28A5.556,5.556,0,0,1,3,22.444V5.778A2.778,2.778,0,0,1,5.778,3h5.556a2.778,2.778,0,0,1,2.778,2.778V22.444A5.556,5.556,0,0,1,8.556,28Zm0,0H25.222A2.778,2.778,0,0,0,28,25.222V19.667a2.778,2.778,0,0,0-2.778-2.778H21.968M14.111,9.032l2.3-2.3a2.778,2.778,0,0,1,3.928,0l3.929,3.929a2.778,2.778,0,0,1,0,3.928L12.483,26.372M8.556,22.444h.014"
                    transform="translate(-2 -2)" fill="none"
                    stroke="none"/>
            </svg>
            <span>Theme</span>
            <svg className="theme-arrow" xmlns="http://www.w3.org/2000/svg" width="19.521" height="12.074"
                 viewBox="0 0 19.521 12.074">
                <path d="M24.2,349l2.323,2.313-9.761,9.761L7,351.313,9.323,349l7.438,7.438Z"
                      transform="translate(-7 -349)" fill='none'/>
            </svg>
        </div>
    </nav>)

}

export default Navbar