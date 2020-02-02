import React from "react";
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';



function Navigation() {
        return (
            <nav>
                <ul>
                    <li><NavLink to="/" smooth={"true"} className="link">Start</NavLink></li>
                    <li><Link to="steps" smooth={"true"} className="link">O co chodzi?</Link></li>
                    <li><Link to="about" smooth={"true"} className="link">O nas</Link></li>
                    <li><Link to="collab" smooth={"true"} className="link">Fundacja i organizacje</Link></li>
                    <li><Link to="contact" smooth={"true"} className="link">Kontakt</Link></li>
                </ul>
            </nav>
        )
};

export default Navigation;