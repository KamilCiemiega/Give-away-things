import React, { Component } from 'react';
import HomeLoginPanel from '../../Home/HomeComponents/HomeLoginPanel';
import HomeNavigation from '../../Home/HomeComponents/HomeNavigation';


export default class GiveStuffHeader extends Component {
    render() {
        return (
            <>
                <HomeLoginPanel/>
                <HomeNavigation/>
                <div className='giveStuff__Top flex'>
                    <div className='giveStuff__Top__heroBanner'></div>
                    <div className='giveStuff__Top__items flex'>
                        <div className="giveStuff__Top__items__header flex">
                            <div className="giveStuff__Top__items__header__title">
                                Oddaj rzeczy, których już nie chcesz<br /> POTRZEBUJĄCYM
                            </div>
                            <div className="giveStuff__Top__items__header__img"></div>
                        </div>
                        <div className='giveStuff__Top__items__steps'>Wystarczą 4 proste kroki:</div>
                        <div className='giveStuff__Top__items__columns'>
                            <div className="col">
                                <div>1</div>
                                <div>Wybierz<br />rzeczy</div>
                            </div>
                            <div className="col">
                                <div>2</div>
                                <div>Spakuj je<br />w worki</div>
                            </div>
                            <div className="col">
                                <div>3</div>
                                <div>Wybierz<br />fundację</div>
                            </div>
                            <div className="col">
                                <div>4</div>
                                <div>Zamów<br />kuriera</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}