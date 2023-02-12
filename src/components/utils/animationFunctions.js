const toggleAnimation = (setToggleFade) => {
    setToggleFade('fade-in');
    setTimeout(() => {
        setToggleFade('');
    }, 200)
}

export default toggleAnimation;