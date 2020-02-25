import React from 'react';
import SecionTitle from '../../SectionTitle/SectionTitle'
const homeAbout = (props) => {
    return(
        <div name="about" className="about flex">
                <div className="about__text flex">
                    <SecionTitle>O nas</SecionTitle>
                    <div className="about__text__description">Lorem ipsum dolor sit amet, tempor incididunt. Ut exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</div>
                    <div className="about__text__image"></div>
                </div>
                <div className="about__image"></div>
        </div>
    );
}

export default homeAbout;