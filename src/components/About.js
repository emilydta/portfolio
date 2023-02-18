import { default as aboutMe } from '../images/about_me.svg';
import '../stylesheets/About.css';
import Intro from './sub-components/Intro';
import Skills from './sub-components/Skills';
import { useState } from 'react';

function About() {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className='about'>
            <div className='about-slide-bg-container'>
                <div className={`about-slide-bg ${currentSlide === 0 && 'slide-0-height'}`}>
                    <div className='about-content'>
                        <Intro
                            currentSlide={currentSlide}
                            setCurrentSlide={setCurrentSlide}
                        />
                    </div>
                </div>
            </div>
            <div className='about-image-container'>
                <img src={aboutMe} alt='About me'></img>
            </div>
            <Skills />
        </div>
    )
}

export default About;