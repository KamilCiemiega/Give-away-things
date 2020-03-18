import React, { Component } from 'react';
import { connect } from 'react-redux';
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
            // this.setState({ items: snapshot.val(), loadStatus: 'ready' });
            this.props.onLoadList(snapshot.val(),'ready')
            // this.props.onBuildList(snapshot.val(), 'ready')
        }, function (errorObject) {
            this.setState({ loadStatus: 'error' })
            console.log("The read failed: " + errorObject.code);
        });
    }
    componentDidUpdate (prevProps,prevState) {
        if (prevState.loadStatus !== this.props.loadStatus) {
            // return this.props.onBuildList()
        }
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
         const list = this.props.currentTodos.map((element, index) => {
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
        const list = this.props.currentTodos.map((element, index) => {
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
        // const { items, currentPage, todosPerPage } = this.state;
        // const indexOfLastTodo = currentPage * todosPerPage;
        // const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        // const currentTodos = items.slice(indexOfFirstTodo, indexOfLastTodo);
        const list = this.props.currentTodos.map((element, index) => {
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
        if (this.props.currentView === 0) return foundationsButtons
        if (this.props.currentView === 1) return organizationsButtons
    }

    // foundationsView = () => {
    //     this.setState({ currentPage: 1 })
    // }
    // organizationsView = () => {
    //     this.setState({ currentPage: 4 })
    // }
    // colleciomsView = () => {
    //     this.setState({ currentPage: 6 })
    // }
    handleClick = (e) => {
        return this.props.onBuildButtons(e.target.id)
    }
   

    render() {
        return (
            <div className="whowehelp__container flex">
                <SectionTite>Komu pomagamy?</SectionTite>
                <div className="whowehelp__container__partners flex">
                    <button className="whowehelp__container__partners__partner" onClick={() => {
                        this.props.onActiveView(0)
                        this.props.onFundationsView(1)
                    }}>
                        <span>Fundacjom</span>
                    </button>
                    <button className="whowehelp__container__partners__partner" onClick={() => {
                        this.props.onActiveView(1)
                        this.props.onOrganizationsView(4)
                    }}>
                        <span>Organizacjom pozarządowym</span>
                    </button>
                    <button className="whowehelp__container__partners__partner" onClick={() => {
                        this.props.onActiveView(2)
                        this.props.oncollectionsView(6)
                    }}>
                        <span>Lokalnym zbiórkom</span>
                    </button>
                </div>
                <div className="whowehelp__container__text flex">
                    {this.foundationsList()}
                    {this.props.loadStatus}
                    {this.props.loadStatus === "ready" && this.props.currentView === 1 && this.organizationsList()}
                    {this.props.loadStatus === "ready" && this.props.currentView === 2 && this.collectionsList()}
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
        currentTodos:state.pag.currentTodos,
        loadStatus:state.pag.loadStatus,
        currentView:state.pag.currentView,
        items:state.pag.items
    } 
}

const mapDispatchToProps = dispatch => {
    return{
        onLoadList: (items,status) => dispatch(actionCreators.loadList(items,status)),
        onBuildList: () => dispatch(actionCreators.buildList()),
        onActiveView: (view) => dispatch(actionCreators.activeView(view)),
        onBuildButtons:(id) => dispatch(actionCreators.buildButtons(id)),
        onFundationsView:(elem) => dispatch(actionCreators.fundationsView(elem)),
        onOrganizationsView:(elem) => dispatch(actionCreators.organizationsView(elem)),
        oncollectionsView:(elem) => dispatch(actionCreators.collectionsView(elem))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(HomeWhoWeHelp));