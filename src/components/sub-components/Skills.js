function Skills() {
    return (
        <section className='about-skills'>
            <h1 className='about-heading' id='tech-heading'>Technologies</h1>
            <section className='skills-section'>
                <article className='skills-category'>
                    <h2 className='skills-heading'>Frontend</h2>
                    <ul className='skills-list'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Tailwind CSS</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>Webpack</li>
                        <li>React</li>
                    </ul>
                </article>
                <article className='skills-category'>
                    <h2 className='skills-heading'>Backend</h2>
                    <ul className='skills-list'>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                    </ul>
                </article>
                <article className='skills-category'>
                    <h2 className='skills-heading'>Misc.</h2>
                    <ul className='skills-list'>
                        <li>Git</li>
                        <li>TDD</li>
                        <li>Linux</li>
                    </ul>
                </article>
            </section>
        </section>
    )
}

export default Skills;