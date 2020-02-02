import React from 'react';

const homeAbout = (props) => {
    return(
        <div name="about" className="about flex">
                <div className="about__text flex">
                    <h2>O nas</h2>
                    <div className="about__text__img"></div>
                    <span className="steps__decoration"></span>
                    <div className="about__text__description">Lorem ipsum dolor sit amet, tempor incididunt. Ut exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur id est laborum.</div>
                </div>
                <div className="about__image"></div>
        </div>
    );
}

export default homeAbout;