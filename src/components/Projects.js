import { useState } from 'react';
import '../stylesheets/Projects.css';
import toggleAnimation from './utils/animationFunctions';
import projectData from './datasheets/projectData';

function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [toggleFade, setToggleFade] = useState('');

    const goToProject = (projectIndex) => {
        toggleAnimation(setToggleFade);
        setCurrentIndex(projectIndex);
    }

    const { title, description, image, demo, sourceCode, tech } = projectData[currentIndex];

    return (
        <main className="projects">
            <div className='slide-bg-container'>
                <div className="slide-bg"></div>
            </div>
            <section className='projects-content'>
                <figure className='project-display'>
                    <div className='project-image-container'>
                        <img className={`${toggleFade}`} src={image} alt={`${title}`}></img>
                    </div>
                </figure>
                <section className='brackets-wrapper'>
                    <article className={`projects-info ${toggleFade}`}>
                        <h1 className='project-title'>{title}</h1>
                        <div className='project-links'>
                            <a href={demo} target='_blank' rel='noreferrer'>Demo</a>
                            <a href={sourceCode} target='_blank' rel='noreferrer'>Source Code</a>
                        </div>
                        <ul className='project-tech'>
                            {tech.map((tech, techIndex) =>
                                <li key={techIndex}>{tech}</li>
                            )}
                        </ul>
                        <p className='project-description'>{description}</p>
                    </article>
                </section>
            </section>
            <section className='projects-nav'>
                {projectData.map((project, projectIndex) => (
                    <div className={`${projectIndex === currentIndex && 'selected'}`}
                        key={projectIndex}
                        onClick={() => goToProject(projectIndex)}>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default Projects;