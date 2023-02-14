import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

function HamburgerNav({
    openMenu,
    setOpenMenu
}) {
    return (
        <div style={{ display: `${openMenu ? 'flex' : 'none'}` }} className="hamburger-links-container">
            <div className='close-hamburger' onClick={() => { setOpenMenu(false) }}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></div>
            <div className='hamburger-link-container' onClick={() => { setOpenMenu(false) }}><NavLink to={'/home'} className='nav-link'>Home</NavLink></div>
            <div className='hamburger-link-container' onClick={() => { setOpenMenu(false) }}><NavLink to='/about' className='nav-link'>About</NavLink></div>
            <div className='hamburger-link-container' onClick={() => { setOpenMenu(false) }}><NavLink to='/projects' className='nav-link'>Projects</NavLink></div>
        </div>

    )
}

export default HamburgerNav;