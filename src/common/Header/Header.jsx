import React from "react";
import logo from "../Immaggini/McDonalds-Logo.png";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="wrapper">
                <img src={logo} alt="Logo" className="logo" />
                <nav>
                    <ul className="menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
