import React, {useEffect, useState} from "react";
import "./Console.css"
import {useNavigate} from "react-router-dom";
import rick from './assets/rick.jpeg'
import dying from './assets/dying.gif'


const Console = (props) => {
    const navigate = useNavigate();

    const validCommands = ['clear', 'help', 'commands', 'intro',
        'facts', 'hello', 'git', 'home',
        'kill', 'cd about', 'cd skills',
        'cd projects', 'cd contact', 'hack',
        '',
        '0'
    ];

    const imageToo = ['hello', 'kill'];

    let consoleData = {
        '0': [],
        'intro': [{
            'text': "Hello! I’m Sahil, another f&#*$%g coder 👨‍💻", 'color': '#1142CC'
        }],
        'facts': [{
            'text': 'Here’s some facts about me', 'color': '#1142CC'
        }, {
            'text': '✅ Web Developer', 'color': '#FF0000'
        }, {
            'text': '✅ Competitive Coder', 'color': '#FFFF00'
        }, {
            'text': '✅ Backend Specialist', 'color': '#03F601'
        }, {
            'text': '✅ ML Engineer', 'color': '#0000F7'
        }, {
            'text': '✅ Math Whiz', 'color': '#20D6A5'
        }, {
            'text': '✅ App Developer', 'color': '#FF7F00'
        }],
        'help': [{
            'text': 'Type “commands” into the terminal and hit enter to', 'color': '#F45AED'
        }, {
            'text': 'see all the possible commands', 'color': '#F45AED'
        }],
        'clear': [],
        'hello': [{
            'text': "Hello, babygirl! 🥰", 'color': '#FFFF00'
        }],
        'git': [{
            'text': "I got only like 2 followers on GitHub. Follow me please.", 'color': "#20D6A5"
        }, {
            'text': "Opening GitHub on port 3000 in 0...", 'color': '#20D6A5', 'class': 'github-port'
        }],
        'kill': [{'text': 'goodbye cruel world! 💀', 'color': 'red'}],
        'cd about': [{'text': 'Forwarding to "about" on port 3000...', 'color': '#FFFF00'}],
        'cd skills': [{'text': 'Forwarding to "skills" on port 3000...', 'color': '#FFFF00'}],
        'cd projects': [{'text': 'Forwarding to "projects" on port 3000...', 'color': '#FFFF00'}],
        'cd contact': [{'text': 'Forwarding to "contact" on port 3000...', 'color': '#FFFF00'}],
        'hack': [{
            'text': "I'm just a dumb and cute terminal built using HTML!",
            'color': '#F45AED'
        }, {'text': "So haxer, you canny hack meh bitch! 🤙", 'color': '#F45AED'}],
        'commands': [
            {'text': 'Available Commands: ', 'color': '#F45AED'},

            {'text': 'commands', 'color': '#1142CC'},
            {'text': 'home', 'color': '#1142CC'},
            {'text': 'hello', 'color': '#1142CC'},
            {'text': 'git', 'color': '#1142CC'},
            {'text': 'cd {about, skills, projects, contact}', 'color': '#1142CC'},
            {'text': 'hack', 'color': '#1142CC'},
            {'text': 'kill', 'color': '#1142CC'},
            {'text': 'clear', 'color': '#1142CC'}

        ]

    }

    function extras(command) {
        if (command === undefined || command === null) {
            return;
        }
        if (command === 'git') {
            git();
        }
        if (command.substring(0, 3) === 'cd ') {
            let location = command.substring(3, command.length);
            cd(location);
        }
        let xx = display;
        xx.push('0');
        setDisplay(xx);

    }

    function git() {
        let i = 3;
        const arr = document.querySelectorAll('.github-port');
        const githubPort = arr[arr.length - 1];
        githubPort.innerHTML = "Opening GitHub on port 3000 in " + i + '...';
        let intervalID = setInterval(() => {
            i--;
            githubPort.innerHTML = "Opening GitHub on port 3000 in " + i + "...";
            if (i === 0) {
                clearInterval(intervalID);
            }
        }, 1000);
        setTimeout(() => {
            window.open("https://github.com/sahil142214", '_blank');
        }, 3000);
    }

    function cd(location) {
        setTimeout(() => {
            if (location === 'about') navigate('/about');
            if (location === 'skills') navigate('/skills');
            if (location === 'projects') navigate('/projects');
            if (location === 'contact') navigate('/contact');

        }, 800)
    }


    function handleEnter(e) {
        if (e.key === 'Enter') {
            let trimmedInput = inputValue.trim();
            trimmedInput = trimmedInput.toLowerCase();
            if (trimmedInput === '') {
                return;
            } else if (!validCommands.includes(trimmedInput)) {
                let x = [].concat(display);
                x.push('input-' + trimmedInput);

                if (trimmedInput.substring(0, 2) === 'cd') {
                    if (trimmedInput.length === 2 || (trimmedInput.length > 2 && trimmedInput[2] === ' ')) {
                        x.push('error-cd');
                    } else {
                        x.push('error-' + trimmedInput);
                    }
                } else {
                    x.push('error-' + trimmedInput);

                }

                if (x.length > 8) {
                    x = x.slice(x.length - 8, x.length);
                }
                setDisplay(x);
                setInputValue('');
                return;
            }

            if (trimmedInput === 'home') {
                setDisplay(['intro', 'facts', 'help']);
                setInputValue('');
                return;
            }
            if (trimmedInput === 'clear') {
                setDisplay([]);
                setInputValue('');
                return;
            }
            let x = [].concat(display);
            x.push('input-' + trimmedInput);
            x.push(trimmedInput);

            if (x.length > 8) {
                x = x.slice(x.length - 8, x.length);
            }

            setDisplay(x);
            setInputValue('');

        }
    }

    let display = props.display;

    let setDisplay = props.setDisplay;
    const [inputValue, setInputValue] = useState('');

    function inputChange(event) {
        if (parseInt(event.target.value.length) <= 20) {
            setInputValue(event.target.value);
        }
    }

    function startBlinking() {
        const cursor = document.querySelector('.input-cursor');
        cursor.style.visibility = 'visible';
    }

    function stopBlinking() {
        const cursor = document.querySelector('.input-cursor');
        cursor.style.visibility = 'hidden';

    }


    useEffect(() => {
        const cursor = document.querySelector('.input-cursor');
        let text = -300 + 10.3 * parseInt(inputValue.length);
        cursor.style.transform = "translate(" + text + "px, 2px)"

    }, [inputValue])

    useEffect(() => {
        const consoleBody = document.querySelector('.text-div');
        consoleBody.innerHTML = '';
        display.forEach((term) => {
            if (term === '0') return;
            if (term.substring(0, 5) === 'error') {
                let new_line = document.createElement('p');
                if (term === 'error-cd') {
                    new_line.innerText = 'invalid location! 👎';
                } else {
                    new_line.innerText = 'command: "' + term.substring(6, term.length) + '" not found';
                }
                new_line.style.color = 'red';
                new_line.classList.add('console-text');
                consoleBody.appendChild(new_line);
                let space = document.createElement('div');
                space.style.height = '40px';
                space.style.width = '100%';
                consoleBody.appendChild(space);
                return;

            } else if (term.substring(0, 5) === 'input') {
                let new_line = document.createElement('p');
                new_line.innerText = '❯ ' + term.substring(6, term.length);
                new_line.style.color = '#0f0';
                new_line.classList.add('console-text');
                consoleBody.appendChild(new_line);
                let space = document.createElement('div');
                space.style.height = '6px';
                space.style.width = '100%';
                consoleBody.appendChild(space);
                return;
            }


            consoleData[term].forEach((line) => {
                let new_line = document.createElement('p');
                new_line.innerText = line.text;
                new_line.style.color = line.color;
                if (line.hasOwnProperty('class')) {
                    new_line.classList.add(line.class);
                }
                new_line.classList.add('console-text');
                consoleBody.appendChild(new_line);
                if (imageToo.includes(term)) {
                    let img = document.createElement('img');
                    img.classList.add('console-img');
                    img.style.height = '200px';
                    consoleBody.appendChild(img);
                    if (term === 'hello') img.src = rick;
                    else if (term === 'kill') img.src = dying;
                }

            })
            let space = document.createElement('div');
            space.style.height = '40px';
            space.style.width = '100%';
            consoleBody.appendChild(space);
        })
        extras(display[display.length - 1]);

    }, [display]);

    return (<div className="console">
        <div className="console-header">
            <div className="red-dot"></div>
            <div className="yellow-dot"></div>
            <div className="green-dot"></div>
        </div>
        <div className="console-body">
            <div>

                <div className="text-div"></div>
                <div className="input-div">
                    <p>~sahil/</p>
                    <span className="console-arrow">❯</span>
                    <input type="text" value={inputValue} autoFocus
                           onChange={inputChange} className="console-input"
                           autoCapitalize='off' autoComplete='off' autoCorrect='off'
                           onFocus={startBlinking} onBlur={stopBlinking}
                           onKeyDown={handleEnter}/>
                    <span className="input-cursor"></span>
                </div>
            </div>
        </div>

        <div className="console-footer">
            <div className='footer-0'>0</div>
            <div className='footer-zsh'><span>zsh</span></div>
            <div className="footer-100">♥ 100%</div>
            <div className="footer-user"><span>Sahil’s Macbook</span></div>
        </div>
    </div>)
}

export default Console