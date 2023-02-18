import { default as aboutMe } from '../images/about_me.svg';
import '../stylesheets/About.css';
import Intro from './sub-components/Intro';
import Skills from './sub-components/Skills';
import { useState } from 'react';

function About() {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <main className='about'>
            <section className='about-slide-bg-container'>
                <div className={`about-slide-bg ${currentSlide === 0 && 'slide-0-height'}`}>
                    <div className='about-content'>
                        <Intro
                            currentSlide={currentSlide}
                            setCurrentSlide={setCurrentSlide}
                        />
                    </div>
                </div>
            </section>
            <figure className='about-image-container'>
                <img src={aboutMe} alt='About me'></img>
            </figure>
            <Skills />
        </main>
    )
}

export default About;