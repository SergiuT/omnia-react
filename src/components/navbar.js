import React from 'react';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import logo from '../static/logo.png'

export const Navbar = () => {
    return (
        <Router>
            <div className="custom-navbar">
                <Link to='/'>
                    <img
                        src={logo}
                        width='100px'
                        height='100px'
                        alt='Omnia Residence'
                    />
                </Link>
                <ul className="custom-links custom-links-contact">
                    <li>
                        <Link to='/'>Acasa</Link>
                    </li>
                    <li>
                        <Link to='/despre-noi'>Despre noi</Link>
                    </li>
                    <li>
                        <Link to='/apartamente'>Apartamente</Link>
                    </li>
                    <li>
                        <Link to='/case'>Case</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </Router>
    )
};