import React, { useEffect } from "react";
import "./MyProject.css";

const MyProject = () => {
    const projects = [
        {
            name: 'InternConnect',
            imageUrl: './intern.jpeg',
            githubUrl: 'https://github.com/sahil142214/Internship-Mnagement-System'
        },
        {
            name: 'LoadPost',
            imageUrl: './LoadPost.jpeg',
            githubUrl: 'https://github.com/sahil142214/Load-Posting-System'
        },
        {
            name: 'Kliks',
            imageUrl: './klicks.jpeg',
            githubUrl: 'https://github.com/sahil142214/Kliks'
        }
    ];

    useEffect(() => {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = 1;
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, []);

    return (
        <div className="projects-wrapper">
            <h1>My <span>Projects</span></h1>
            <p className="projects-text">Here are some of my <span className="projects-special">projects</span> I've been working on</p>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card" onClick={() => window.open(project.githubUrl, '_blank')}>
                        <img src={project.imageUrl} alt={project.name} className="project-image" />
                        <p className="project-name">{project.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyProject;
