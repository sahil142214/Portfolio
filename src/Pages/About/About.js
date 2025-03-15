import React, {useEffect} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import AboutMe from "../../Components/AboutMe/AboutMe";

const Home = () => {
    useEffect(()=>{
        document.title = 'About • Sahil'
    },[])

    return (
        <div>
            <Navbar active="About"/>
            <AboutMe/>

        </div>
    )

}

export default Home;