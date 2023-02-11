import '../stylesheets/Homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

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
              <NavLink to='/contact'><FontAwesomeIcon icon={faCommentDots} /></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage;