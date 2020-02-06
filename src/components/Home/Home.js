import React from 'react';
import LoginPanel from './HomeComponents/HomeLoginPanel';
import Navigation from './HomeComponents/HomeNavigation';
import Hero from './HomeComponents/HomeHero';
import HomeThreeColumns from './HomeComponents/HomeThreeColmns';
import HomeEasySteps from './HomeComponents/HomeEasySteps';
import HomeAbout from './HomeComponents/HomeAbout';
import WhoWeHelp from './HomeComponents/HomeWhoWeHelp';
import HomeContactForm from './HomeComponents/HomeContactForm';

const home = (props) => {
    return (
        <>
            <div name="home" className="container">
                <LoginPanel />
                <Navigation />
                <Hero />
                <HomeThreeColumns/>
                <HomeEasySteps/>
                <HomeAbout/>
                <WhoWeHelp/>
                <HomeContactForm/>
            </div>
        </>
    );
}

export default home;