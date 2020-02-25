import React from "react";
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';



function Navigation() {
    return (
        <nav>
            <ul>
                <li className="link"> 
                    <NavLink
                        to="/"
                        smooth={"true"}
                        offset={-70}
                        duration={500}
                        className="link">
                        Start
                    </NavLink>
                </li>
                <li className="link">
                    <Link
                        to="HomeEasySteps"
                        smooth={"true"}
                        offset={-70}
                        duration={500}>
                        O co chodzi?
                    </Link>
                </li>
                <li className="link">
                    <Link
                        to="about"
                        smooth={"true"}
                        offset={-70}
                        duration={500}>
                        O nas
                    </Link>
                </li>
                <li className="link">Fundacja i organizacje</li>
                <li className="link">
                    <Link to="contact"
                        smooth={"true"}
                        offset={-70}
                        duration={500}>
                        Kontakt
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;