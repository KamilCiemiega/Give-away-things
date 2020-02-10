import React, { Component } from 'react';
import Organizations from '../../../data/organizations.json';

export default class HomeWhoWeHelp extends Component {

    state = {
        page: 1,
        items: [],
        description: ""
    }

    componentDidMount() {
        this.fetchData('Fundacjom')
    }

    fetchData = (name) => {
        fetch(`http://localhost:3005/organizations/?navName=${name}`)
            .then(res => res.json())
            .then(data => data[0])
            .then(data => {
                this.setState({
                    items: data.foundations,
                    description: data.description
                })
            })
    }

    buildList = () => {
        const list = this.state.items.map((element,index) => {
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

    handleCHangeOrganization = (name) => () => {
        this.fetchData(name)
    }

    render() {
        return (
            <div className="whowehelp__container flex">
                <div className="whowehelp__container__header flex">
                    <h1>Komu pomagamy?</h1>
                    <div className="whowehelp__container__header__img"></div>
                </div>
                <div className="whowehelp__container__partners flex">
                    <button onClick={this.handleCHangeOrganization('Fundacjom')} className="whowehelp__container__partners__partner">
        <span>Fundacjom</span>
                    </button>
                    <button onClick={this.handleCHangeOrganization('Organizacjom pozarządowym')} className="whowehelp__container__partners__partner">
                        <span>Organizacjom pozarządowym</span>

                    </button>
                    <button onClick={this.handleCHangeOrganization("Lokalnym zbiórkom")} className="whowehelp__container__partners__partner">
                        <span>Lokalnym zbiórkom</span>
                    </button>
                </div>
                <div className="whowehelp__container__text flex">
                    {this.buildList()}
                </div>
            </div>
        );
    }
}