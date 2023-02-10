import '../stylesheets/Navbar.css';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className='navbar'>
            <ul className='navbar-contents'>
                <li><NavLink exact='true' to={'/home'} className='nav-link'>Home</NavLink></li>
                <li><NavLink to='/projects' className='nav-link'>Projects</NavLink></li>
                <li><NavLink to='/contact' className='nav-link'>Contact</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar
    ;