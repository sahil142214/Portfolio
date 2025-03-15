import React, {useEffect} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ContactMe from "../../Components/ContactMe/ContactMe";

const Home = () => {
    useEffect(() => {
        document.title = 'Contact • Sahil'
    }, [])
    return (
        <div>
            <Navbar active="Contact"/>
            <ContactMe/>
        </div>
    )

}

export default Home;