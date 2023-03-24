import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";

const App = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [display, setDisplay] = useState(['intro', 'facts', 'help']);

    window.addEventListener('resize', (() => {
        setWidth(window.innerWidth);
    }));


    if (width < 1100) {
        return (
            <div style={{background: "white", height: "100vh", width: "100vw"}}>
                <h1> Please use a computer device</h1>
                <h3>If you're already on a computer, try to maximise window.</h3>
            </div>
        )
    }

    return (
        <Routes>
            <Route path='/' element={<Home display={display} setDisplay={setDisplay}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>


        </Routes>
    )

}

export default App;