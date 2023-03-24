import React, {useEffect} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Phone from "../../Components/Phone/Phone";
import "./Home.css"
import Console from "../../Components/Console/Console";


const Home = (props) => {
    useEffect(() => {
        document.title = 'Home • Navjeet'
    }, [])
    return (
        <div>
            <Navbar active="Home"/>
            <div className="wrapper">
                <Phone/>
                <Console display={props.display} setDisplay={props.setDisplay}/>
            </div>
        </div>
    )

}

export default Home;