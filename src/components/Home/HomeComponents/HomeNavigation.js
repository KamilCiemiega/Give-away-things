import React from "react";
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';



function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        smooth={"true"}
                        offset={-70}
                        duration={500}
                        className="link">
                        Start
                    </NavLink>
                </li>
                <li>
                    <Link
                        to="HomeEasySteps"
                        smooth={"true"}
                        offset={-70}
                        duration={500}
                        className="link">
                        O co chodzi?
                    </Link>
                </li>
                <li>
                    <Link
                        to="about"
                        smooth={"true"}
                        offset={-70}
                        duration={500}
                        className="link">
                        O nas
                    </Link>
                </li>
                <li className="link">Fundacja i organizacje</li>
                <li className="link">Kontakt</li>
            </ul>
        </nav>
    )
};

export default Navigation;