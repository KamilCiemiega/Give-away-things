import React, { Component } from 'react';
import { withFirebase } from '../../Firebase/context';
import SectionTite from '../../SectionTitle/SectionTitle';
import * as actionCreators from '../../store/actions/index';

class HomeWhoWeHelp extends Component {

    state = {
        loadStatus: 'init',
        items: [],
        currentPage: 1,
        todosPerPage: 3,
        currentView: 0
    }
    componentDidMount() {
        const ref = this.props.firebase.db.ref('foundations')
        ref.on("value", (snapshot) => {
            this.setState({ items: snapshot.val(), loadStatus: 'ready' });
        }, function (errorObject) {
            this.setState({ loadStatus: 'error' })
            console.log("The read failed: " + errorObject.code);
        });
    }
    // fetchData = (name, start =0, end = 3) => {
    //     fetch(`http://localhost:3005/organizations/?fundacja=${name}&_start=${start}&_end=${end}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             this.setState({
    //                 items: data,
    //            //     description: data.description
    //             })
    //         })
    // }

    foundationsList = () => {
        const { items, currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = items.slice(indexOfFirstTodo, indexOfLastTodo);
        const list = currentTodos.map((element, index) => {
            return (
                <div key={index} className="whowehelp__container__text__list">
                    <ul>
                        <li>{element.name}</li>
                        <li className="whowehelp__container__text__list__mission">{element.mission}</li>
                    </ul>
                </div>
            )
        })
        return list;
    }
    organizationsList = () => {
        const { items, currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = items.slice(indexOfFirstTodo, indexOfLastTodo);
        const list = currentTodos.map((element, index) => {
            return (
                <div key={index} className="whowehelp__container__text__list">
                    <ul>
                        <li>{element.name}</li>
                        <li className="whowehelp__container__text__list__mission">{element.mission}</li>
                    </ul>
                </div>
            )
        })
        return list;
    }
    collectionsList = () => {
        const { items, currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = items.slice(indexOfFirstTodo, indexOfLastTodo);
        const list = currentTodos.map((element, index) => {
            return (
                <div key={index} className="whowehelp__container__text__list">
                    <ul>
                        <li>{element.name}</li>
                        <li className="whowehelp__container__text__list__mission">{element.mission}</li>
                    </ul>
                </div>
            )
        })
        return list;
    }

    buildButtons = () => {
        let foundationsButtons = [];
        for (let i = 1; i <= 3; i++) {
            foundationsButtons.push(<button key={i} id={i} onClick={this.handleClick} className="whowehelp__button">{i}</button>)
        }
        let organizationsButtons = [];
        for (let i = 1; i <= 2; i++) {
            const id = i + 3
            organizationsButtons.push(<button key={i} id={id} onClick={this.handleClick} className="whowehelp__button">{i}</button>)
        }
        if (this.state.currentView === 0) return foundationsButtons
        if (this.state.currentView === 1) return organizationsButtons
    }

    activeView = (view) => {
        this.setState({ currentView: view })
    }
    foundationsView = () => {
        this.setState({ currentPage: 1 })
    }
    organizationsView = () => {
        this.setState({ currentPage: 4 })
    }
    colleciomsView = () => {
        this.setState({ currentPage: 6 })
    }
    handleClick = (e) => {
        this.setState({
            currentPage: e.target.id
        });
    }

    render() {
        return (
            <div className="whowehelp__container flex">
                <SectionTite>Komu pomagamy?</SectionTite>
                <div className="whowehelp__container__partners flex">
                    <button className="whowehelp__container__partners__partner" onClick={() => {
                        this.activeView(0)
                        this.foundationsView()
                    }}>
                        <span>Fundacjom</span>
                    </button>
                    <button className="whowehelp__container__partners__partner" onClick={() => {
                        this.activeView(1)
                        this.organizationsView()
                    }}>
                        <span>Organizacjom pozarządowym</span>
                    </button>
                    <button className="whowehelp__container__partners__partner" onClick={() => {
                        this.activeView(2)
                        this.colleciomsView()
                    }}>
                        <span>Lokalnym zbiórkom</span>
                    </button>
                </div>
                <div className="whowehelp__container__text flex">
                    {this.state.loadStatus === "ready" && this.state.currentView === 0 && this.foundationsList()}
                    {this.state.loadStatus === "ready" && this.state.currentView === 1 && this.organizationsList()}
                    {this.state.loadStatus === "ready" && this.state.currentView === 2 && this.collectionsList()}
                    <div className="whowehelp__container__text__buttons flex">
                        {this.buildButtons()}
                    </div>
                </div>
            </div>
        );
    };
}
const mapStateToProps = state => {
    return {
        pag:state.pag.currentTodos
    } 
}

const mapDispatchToProps = dispatch => {
    return{
        onBuildList: () => dispatch(actionCreators.buildList()),
        onActiveView: (view) => dispatch(actionCreators.activeView(view)),
    }
}
export default withFirebase(HomeWhoWeHelp)