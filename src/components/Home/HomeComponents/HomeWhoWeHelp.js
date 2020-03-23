import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFirebase } from '../../Firebase/context';
import SectionTite from '../../SectionTitle/SectionTitle';
import * as actionCreators from '../../store/actions/index';


class HomeWhoWeHelp extends Component {

    componentDidMount() {
        const ref = this.props.firebase.db.ref('foundations')
        ref.on("value", (snapshot) => {
            this.props.onLoadList(snapshot.val(),'ready')
            this.props.onBuildList(0,1)
        }, function (errorObject) {
            this.props.onLoadListFaild(`The read failed: ${errorObject.code}`);
        });
    }
    // componentDidUpdate (prevProps,prevState) {
    //     if (prevState.loadStatus !== this.props.loadStatus) {
    //         return this.props.onBuildList()
    //     }
    // }

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
        const formLastValue = Object.values(this.props.currentTodos.slice(-3));
         const list = formLastValue.map((element, index) => {
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
        const formLastValue = Object.values(this.props.currentTodos.slice(-3));
        const list = formLastValue.map((element, index) => {
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
        const formLastValue = Object.values(this.props.currentTodos.slice(-3));
        const list = formLastValue.map((element, index) => {
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
            foundationsButtons.push(<button key={i} id={i}  index={0} onClick={this.handleClick} className="whowehelp__button">{i}</button>)
        }
        let organizationsButtons = [];
        for (let i = 1; i <= 2; i++) {
            const id = i + 3
            organizationsButtons.push(<button key={i} id={id} index={1} onClick={this.handleClick} className="whowehelp__button">{i}</button>)
        }
        if (this.props.currentView === 0) return foundationsButtons
        if (this.props.currentView === 1) return organizationsButtons
    }

    handleClick = (e) => {
        this.props.onBuildButtons(e.target.id)
        this.props.onCurrentList(e.target.id)
    }
   
    render() {
        return (
            <div className="whowehelp__container flex">
                <SectionTite>Komu pomagamy?</SectionTite>
                <div className="whowehelp__container__partners flex">
                    <button className="whowehelp__container__partners__partner" onClick={() =>  this.props.onBuildList(0,1)}>
                        <span>Fundacjom</span>
                    </button>
                    <button className="whowehelp__container__partners__partner" onClick={() => this.props.onBuildList(1,4)}>
                        <span>Organizacjom pozarządowym</span>
                    </button>
                    <button className="whowehelp__container__partners__partner" onClick={() => this.props.onBuildList(2,6)}>
                        <span>Lokalnym zbiórkom</span>
                    </button>
                </div>
                <div className="whowehelp__container__text flex">
                    {this.props.error}
                    {this.props.loadStatus === "ready" && this.props.currentView === 0 && this.foundationsList()}
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
        error:state.pag.error,
        currentView:state.pag.currentView
    } 
}

const mapDispatchToProps = dispatch => {
    return{
        onLoadList: (items,status) => dispatch(actionCreators.loadList(items,status)),
        onLoadListFaild: (err) => dispatch(),
        onBuildList: (view,page) => dispatch(actionCreators.buildList(view,page)),
        onBuildButtons:(id) => dispatch(actionCreators.buildButtons(id)),
        onCurrentList:(id) => dispatch(actionCreators.currentList(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(HomeWhoWeHelp));