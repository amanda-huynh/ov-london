import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            {/* <div>
                <img src={SmallLogo} alt='Small Logo' />
            </div> */}

            {/* Navigation Bar */}
            <ul>
                <li>
                    <Link to='/mapoverviewinformational'>Map Overview Informational</Link>
                </li>
            </ul>
        </div>
    )
};

export default Navbar;