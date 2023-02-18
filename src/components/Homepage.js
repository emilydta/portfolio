import '../stylesheets/Homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFaceSmileBeam} from '@fortawesome/free-regular-svg-icons';

function Homepage() {
  return (
    <div className='homepage'>
      <div className='homepage-wrapper'>
        <div className='homepage-contents'>
          <div className='heading-container'>
            <h1 className='subheading'>I'M EMILY, A</h1>
            <h2 className='heading'>FULLSTACK DEVELOPER</h2>
            <div className='links'>
              <a href='https://github.com/emilydta' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a>
              <div className='greeting-container'>
                <FontAwesomeIcon className='smiley-face' icon={faFaceSmileBeam} />
                <p className='greeting-text'>Nice to meet you!</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage;