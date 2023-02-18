import { useState } from 'react';
import toggleAnimation from '../utils/animationFunctions';

function Intro({
    currentSlide,
    setCurrentSlide
}) {
    const [toggleFade, setToggleFade] = useState('');

    const nextSlide = () => {
        toggleAnimation(setToggleFade);
        currentSlide === 0 ? setCurrentSlide(1) : setCurrentSlide(0);
    }
    const Slide0 = <div className={`about-info ${toggleFade}`}>
        <h1 className='about-heading'>HELLO!</h1>
        <p className='about-paragraph'>
            I'm a fullstack developer from Melbourne, Australia with a keen interest for tackling problems through code and design.
        </p>
    </div>

    const Slide1 = <div className={`about-info extended ${toggleFade}`}>
        <p className='about-paragraph'>
            My interests span a diverse range, but coding, music, and art, are my primary pursuits. Each of these areas allow me to express myself and my creativity.
        </p>
        <p className='about-paragraph'>
            When it comes to coding, I thoroughly enjoy the process of problem-solving and building useful and aesthetically appealing applications.
        </p>
        <p className='about-paragraph'>
            When I'm not coding, I'm typically preoccupied with creating music or art. Whether I'm making my own tunes or sketching a new character design, it's always a fun time. This creative fusion gives me the opportunity to bring my ideas to life in ways that are both functional and visually exciting.
        </p>
    </div>

    const slideArray = [Slide0, Slide1];
    return (
        <>
            {slideArray[currentSlide]}
            <div className='next-buttons'>
                <p onClick={() => nextSlide()}>{currentSlide === 0 ? '→' : '←'}</p>
            </div>
        </>
    )
}

export default Intro;