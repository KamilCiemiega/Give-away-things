import React from 'react';
import {Link} from "react-router-dom";
import SectionTitle from '../../SectionTitle/SectionTitle';


const homeEasySteps = (props) => {
    return (
        <div className="container__home__easy__steps" name="HomeEasySteps">
            <SectionTitle title="Wystarczą 4 proste kroki"/>
            <div className='home__easy__steps' >
                <div className="home__easy__steps__column">
                    <div className='home__easy__steps__column__img1'></div>
                    <div>Wybierz rzeczy</div>
                    <div></div>
                    <div>ubrania, zabawki, sprzęt i inne</div>
                </div>
                <div className="home__easy__steps__column">
                    <div className='home__easy__steps__column__img2'></div>
                    <div>Spakuj je</div>
                    <div></div>
                    <div>skorzystaj z worków na śmieci</div>
                </div>
                <div className="home__easy__steps__column">
                    <div className='home__easy__steps__column__img3'></div>
                    <div>Zdecyduj komu chcesz pomóc</div>
                    <div></div>
                    <div>wybierz zaufane miejsce</div>
                </div>
                <div className="home__easy__steps__column">
                    <div className='home__easy__steps__column__img4'></div>
                    <div>Zamów kuriera</div>
                    <div></div>
                    <div>kurier przyjedzie w dogodnym terminie</div>
                </div>
            </div>
            <Link to="/login"><button>ODDAJ RZECZY</button></Link>
        </div>
    );
}

export default homeEasySteps;