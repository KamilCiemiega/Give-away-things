import React, { Component } from 'react';
import organizations from '../../../data/organizations.json';
import { withFirebase } from '../../Firebase/context';


class HomeWhoWeHelp extends Component {

    state = {
        items: [],
        description: "",
        currentPage:1
    }

    componentDidMount(){
        console.log(this.props.firebase)
        const ref = this.props.firebase.db.ref('organizations')
        ref.on("value", (snapshot) => {
        this.setState({ items : snapshot.val()});
          }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
          });
        
    }

    // getData = (data) => {
        
    // }

    fetchData = (name, start =0, end = 3) => {
        fetch(`http://localhost:3005/organizations/?fundacja=${name}&_start=${start}&_end=${end}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    items: data,
               //     description: data.description
                })
            })
    }
    nextPage = (pageNumber) => {
        const name = "Fundacjom";
        const start = 0;
        const end = 2
        this.fetchData()
    }

    paginantion = () => {
        const pageLinks =[]
        const numberPages = Math.floor(this.state.items /3);

        for(let i = 1; i <=this.state.items + 1; i++){
            let active = this.state.currentPage == i ? 'active' : '';

            pageLinks.push(<li className={active} key={i} onClick={() => this.nextPage(i)}><a href="#">{i}</a></li>)
        }
        return pageLinks;
    }

    buildList = () => {
        const list = this.state.items.map((element, index) => {
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
                    <button  className="whowehelp__container__partners__partner">
                        <span>Fundacjom</span>
                    </button>
                    <button  className="whowehelp__container__partners__partner">
                        <span>Organizacjom pozarządowym</span>
                    </button>
                    <button className="whowehelp__container__partners__partner">
                        <span>Lokalnym zbiórkom</span>
                    </button>
                </div>
                <div className="whowehelp__container__text flex">
                    <div className="whowehelp__container__text__description">
                        {this.state.description}
                    </div>
                    <div className="whowehelp__container__text__list flex">
                        {this.buildList()}
                    </div>
                    {this.paginantion()}
                </div>
            </div>
        );
    }
}

export default withFirebase(HomeWhoWeHelp)