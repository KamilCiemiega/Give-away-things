import React, { Component } from 'react';
import Organizations from '../../../data/organizations.json';

export default class HomeWhoWeHelp extends Component {

    state = {
        page: 1
    }

    buildList = () => {
        let arr = Organizations.organizations.foundations;
        const list = arr.map((element,index) => {
            return (
                <div key={index} className="whowehelp__container__list">
                    <ul>
                        <li>{element.name}</li>
                        <li>{element.mission}</li>
                        <li>{element.things}</li>
                    </ul>
                </div>
            )
        })
        return list
    }

    componentDidMount = () => {
        console.log(Organizations)
    }

    render() {
        return (
            <div className="whowehelp__container flex">
                <div className="whowehelp__container__header flex">
                    <h1>Komu pomagamy?</h1>
                    <div className="whowehelp__container__header__img"></div>
                </div>
                <div className="whowehelp__container__partners flex">
                    <button className="whowehelp__container__partners__partner">
                        <span>{Organizations.organizations[0].navName}</span>
                    </button>
                    <button className="whowehelp__container__partners__partner">
                        <span>{Organizations.organizations[1].navName}</span>

                    </button>
                    <button className="whowehelp__container__partners__partner">
                        <span>{Organizations.organizations[2].navName}</span>
                    </button>
                </div>
                <div className="whowehelp__container__text flex">
                    
                </div>
            </div>
        );
    }
}