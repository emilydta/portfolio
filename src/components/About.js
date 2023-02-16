import { default as aboutMe } from '../../images/about_me.svg';
import '../../stylesheets/About.css';
import toggleAnimation from './utils/animationFunctions';
import Intro from './sub-components/Intro';
import Skills from './sub-components/Skills';
import { useState } from 'react';

function About() {
    const [currentSlide, setCurrentSlide] = useState({intro});
    const [toggleFade, setToggleFade] = useState('');

    const nextSlide = (slide) => {
        toggleAnimation(setToggleFade);
        setCurrentSlide(slide);
    }

    return (
        <div className='about'>
            <div className='about-slide-bg-container'>
                <div className='about-slide-bg'>
                    <div className='about-content'>
                        {introContinued}
                        <div></div>
                    </div>
                </div>
            </div>

            <div className='about-image-container'>
                <img src={aboutMe} alt='About me'></img>
            </div>
            <Skiils />
        </div>
    )
}

export default About;