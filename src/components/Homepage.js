import '../stylesheets/Homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFaceSmileBeam} from '@fortawesome/free-regular-svg-icons';

function Homepage() {
  return (
    <main className='homepage'>
      <div className='homepage-wrapper'>
        <div className='homepage-contents'>
          <header className='heading-container'>
            <h1 className='subheading'>I'M EMILY, A</h1>
            <h2 className='heading'>FULLSTACK DEVELOPER</h2>
            <section className='links'>
              <a href='https://github.com/emilydta' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a>
              <div className='greeting-container'>
                <FontAwesomeIcon className='smiley-face' icon={faFaceSmileBeam} />
                <p tabIndex='0' className='greeting-text'>Nice to meet you!</p>
              </div>
            </section>
          </header>
        </div>
      </div>
    </main>
  )
}

export default Homepage;