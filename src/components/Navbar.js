// Se crea el componente Navbar
import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../images/logo-navbar.png';
import './styles/Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/">
                        <img className="Navbar__brand-logo" src={logo} alt="Logo" />
                        <span>Code</span>
                        <span><b>Conf</b></span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Navbar;