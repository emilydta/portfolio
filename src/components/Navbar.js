import '../stylesheets/Navbar.css';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import HamburgerNav from './HamburgerNav';
import { useState } from 'react';

function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);

    let htmlTag = document.getElementsByTagName('html')[0];
    openMenu ? htmlTag.classList.add('hide-overflow-y') : htmlTag.classList.remove('hide-overflow-y')


    return (
        <div className='navbar'>
            <div className='navbar-contents'>
                <HamburgerNav
                    openMenu={openMenu}
                    setOpenMenu={setOpenMenu}
                />
                <div className={`hamburger ${openMenu && 'display-none'}`} onClick={() => { setOpenMenu(true) }}><FontAwesomeIcon icon={faBars} /></div>
                <div className={`nav-link-container ${openMenu && 'display-none'}`}><NavLink to={'/home'} className='nav-link'>Home</NavLink></div>
                <div className={`nav-link-container ${openMenu && 'display-none'}`}><NavLink to='/about' className='nav-link'>About</NavLink></div>
                <div className={`nav-link-container ${openMenu && 'display-none'}`}><NavLink to='/projects' className='nav-link'>Projects</NavLink></div>
                <div className={`contact-link ${openMenu && 'display-none'}`}>
                    <a
                        href='http'
                        target='_blank'
                        rel='noreferrer'>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <p className='contact-me-text'>Contact Me</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar
    ;