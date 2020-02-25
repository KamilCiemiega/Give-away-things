import React from "react";
import {Link} from 'react-router-dom';

function Hero() {
        return (
            <header className="hero">
                <div className="hero__image"></div>
                <div className="hero__emptySpace"></div>
                <div className="hero__welcomeBox">
                    <h1>Zacznij pomagać!</h1>
                    <span>Oddaj niechciane rzeczy w zaufane ręce</span>
                    <div className="hero__welcomeBox__decoration"></div>
                    <div className="hero__welcomeBox__btns">
                        <Link to="/logowanie" className="link"><div className="flex">ODDAJ RZECZY</div></Link>
                        <Link to ="/rejestracja" className="link"><div className="flex">ZORGANIZUJ ZBIÓRKĘ</div></Link>
                    </div>
                </div>
            </header>
        )
}

export default Hero;