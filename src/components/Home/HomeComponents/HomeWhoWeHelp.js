import React, {Component} from 'react';


export default class HomeWhoWeHelp extends Component{

state= {
    page:1
}



render(){
    return(
        <div className="whowehelp__container flex">
            <div className="whowehelp__container__header flex">
                <h1>Komu pomagamy ?</h1>
                <div className="whowehelp__container__header__img"></div>
            </div>
            <div className="whowehelp__container__partners flex">
                <button className="whowehelp__container__partners__partner">
                    Fundacjom
                </button>
                <button className="whowehelp__container__partners__partner">
                    Organizacjom pozarządowym
                </button>
                <button className="whowehelp__container__partners__partner">
                    Lokalnym zbiurkom
                </button>
            </div>
            <div className="whowehelp__container__text flex">
                <p>is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
            </div>
            <div className="whowehelp__container__list">

            </div>
        </div>
    );
}
}