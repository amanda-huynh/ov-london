import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar" tabindex="1">
            {/* <div>
                <img src={SmallLogo} alt='Small Logo' />
            </div> */}

            {/* Navigation Bar */}
            <ul>
                <li tabindex="2">
                    <Link to='/'>Main</Link>
                </li>
                {/* <li>
                    <Link to='/mapoverviewinformational'>Map Overview Informational</Link>
                </li> */}
                <li tabindex="3">
                    <Link to='/AB11_Walk'>AB11 Walk</Link>
                </li>
                <li tabindex="4">
                    <Link to='/AN10_Walk'>AN10 Walk</Link>
                </li>
                <li tabindex="5">
                    <Link to='/CK09_Walk'>CK09 Walk</Link>
                </li>
                <li tabindex="6">
                    <Link to='/DM12_Walk'>DM12 Walk</Link>
                </li>
                <li tabindex="7">
                    <Link to='/SJ13_Walk'>SJ13 Walk</Link>
                </li>
                <li tabindex="8">
                    <Link to='/TM08_Walk'>TM08 Walk</Link>
                </li>
                <li tabindex="9">
                    <Link to='/ZS07_Walk'>ZS07 Walk</Link>
                </li>
                <li tabindex="10">
                    <Link to='/allMarkers'>All Markers</Link>
                </li>
            </ul>
        </div>
    )
};

export default Navbar;