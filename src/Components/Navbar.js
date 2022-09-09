import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-none" >
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand color" to="/"> <img className='logo' src={logo} alt='logo'/>Blockchain</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active color" aria-current="page" to="home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link color" to="upload">Upload</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link color" to="login">Log In</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link color" to="signup">Sign Up</Link>
                        </li>
                       
                    </ul>
                   
                </div>
            </div>
        </nav>
    );
};

export default Navbar;