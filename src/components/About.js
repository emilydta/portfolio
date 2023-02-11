import { default as aboutMe } from '../images/about_me.svg';
import { useState } from 'react';
import '../stylesheets/About.css';

function About() {
    const [currentSection, setCurrentSection] = useState(0);

    const nextSection = () => {
        currentSection === 0 ? setCurrentSection(1) : setCurrentSection(0);
    }

    const intro = <div className='about-info'>
        <h1 className='about-heading'>HELLO!</h1>
        <p className='about-paragraph'>
            I'm a fullstack developer from Melbourne, Australia with a keen interest for tackling problems through code and design.
        </p>
    </div>
    const skills = <>
        <h1 className='about-heading'>Technologies</h1>
        <div className='skills-section'>
            <div className='skills-category'>
                <h2 className='skills-heading'>Frontend</h2>
                <ul className='skills-list'>
                    <li>HTML</li>
                    <li>Css</li>
                    <li>Tailwind CSS</li>
                    <li>JavaScript</li>
                    <li>Typescript</li>
                    <li>Webpack</li>
                    <li>React</li>
                </ul>
            </div>
            <div className='skills-category'>
                <h2 className='skills-heading'>Backend</h2>
                <ul className='skills-list'>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                </ul>
            </div>
            <div className='skills-category'>
                <h2 className='skills-heading'>Misc.</h2>
                <ul className='skills-list'>
                    <li>Git</li>
                    <li>Test Driven Development(TDD)</li>
                    <li>Linux</li>
                </ul>
            </div>
        </div>
    </>

    const sections = [
        intro,
        skills
    ]

    return (
        <div className='about'>
            <div className='about-info-bg'>
                <div className='about-content'>
                    <>{sections[currentSection]}</>
                    <p className='next-section'
                        onClick={() => nextSection()}
                    >{currentSection === 0 ? '→' : '←'}
                    </p>
                </div>
            </div>


            <div className='about-image-container'>
                <img src={aboutMe} alt='About me'></img>
            </div>
        </div>
    )
}

export default About;