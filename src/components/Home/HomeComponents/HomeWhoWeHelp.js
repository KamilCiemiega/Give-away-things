import React, { Component } from 'react';
import { withFirebase } from '../../Firebase/context';
import SectionTite from '../../SectionTitle/SectionTitle';

class HomeWhoWeHelp extends Component {

    state = {
        items: [],
        description: "",
        currentPage:1,
        todosPerPage: 3
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
    handleClick = (e) => {
        this.setState({
            currentPage: Number(e.target.id)
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
    buildList = () => {
        const list = this.state.items.foundations.map((element,index) => {
            return (
                <div key={index} className="whowehelp__container__list">
                    <ul>
                        <li>{}</li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            )
        })
        return list
    }

    render() {
        console.log(this.state.items.organizations)
        const { items, currentPage, todosPerPage } = this.state;

        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = items.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(items.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }
        return (
            <div className="whowehelp__container flex">
                <SectionTite>Komu pomagamy?</SectionTite>
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
                </div>
            </div>
        );
    }
}

export default withFirebase(HomeWhoWeHelp)