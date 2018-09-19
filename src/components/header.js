import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light  bg-light">
                <Link className="navbar-brand" to="/">Peter Csipkay</Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/learn">Learn to code</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
                </nav>
            </div>
        )
    }
}

export default Header;