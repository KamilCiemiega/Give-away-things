import React from 'react';
import { Link } from 'react-router-dom';
import HomeNavigation from '../Home/HomeComponents/HomeNavigation';
import SectionTitle from '../SectionTitle/SectionTitle';

const logout = () => {
    return(
        <>
            <HomeNavigation />
            <div className="logout__panel flex">
                    <SectionTitle>Wylogowano pomyślnie!</SectionTitle>
                    <Link to="/">
                        <button className="logout__panel__button">Strona główna</button>
                    </Link>
            </div>
        </>
    ); 
}

export default logout;