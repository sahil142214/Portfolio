import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import MyProject from "../../Components/MyProjects/MyProject";

const Projects = () => {
    useEffect(() => {
        document.title = 'Projects • Sahil';
    }, []);

    return (
        <div>
            <Navbar active="Projects" />
            <MyProject />
        </div>
    );
};

export default Projects;
