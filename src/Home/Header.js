import React from 'react';
import logo from '../Images/SpaceX.jpg';
import { NavLink } from 'react-router-dom';

function Header(){
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <img src={logo} height={50}/>
                    <div className="collapse navbar-collapse d-flex" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink  to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink  to="rockets" className="nav-link">Rockets</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink  to="rockets" className="nav-link">Capsules</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        </>
    )
}
export default Header;