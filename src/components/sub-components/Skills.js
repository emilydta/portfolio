function Skills() {
    return (
        <div className='about-skills'>
            <h1 className='about-heading' id='tech-heading'>Technologies</h1>
            <div className='skills-section'>
                <div className='skills-category'>
                    <h2 className='skills-heading'>Frontend</h2>
                    <ul className='skills-list'>
                        <li>HTML</li>
                        <li>CSS</li>
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
                        <li>TDD</li>
                        <li>Linux</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;