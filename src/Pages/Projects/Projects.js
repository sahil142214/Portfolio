import React, {useEffect} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Phone from "../../Components/Phone/Phone";

const Home = () => {
    useEffect(() => {
        document.title = 'Projects • Navjeet'
    }, [])
    return (
        <div>
            <Navbar active="Projects"/>
        </div>
    )

}

export default Home;