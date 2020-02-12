import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeNavigation from '../Home/HomeComponents/HomeNavigation';
import { withFirebase } from '../Firebase/context';

class LogIn extends Component {

    state = {
        email: "",
        password: "",
        isEmailok:true,
        isPasswordok:true,
        error:null
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validate = () => {
        const isEmailok = this.handleEmailChange(this.state.email)
        const isPasswordok = this.handlePasswordChange(this.state.password)
        
        if(isEmailok !== true){
            this.setState({isEmailok:false})
        }
        if(isPasswordok !== true){
            this.setState({isPasswordok:false})
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {isEmailOk,isPasswordOk,email,password,error} = this.state
        if(isEmailOk && isPasswordOk){
            this.props.firebase
                .doCreateUserWithEmailAndPassword(email, password)
                .then(authUser => {
                    this.setState({ email, password});
                    this.props.history.push('/')
                })
                .catch(error => {
                    this.setState({ error });
                });
        }
        console.log(error);
    }

    handleEmailChange = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    handlePasswordChange = (password) => {
        if(password.length < 6) return false
        return true
    }
    render() {
        return (
            <>
                <HomeNavigation />
                <div className="logInPanel flex">
                    <div className="logInPanel__header flex">
                        <h2>Skontaktuj się z nami</h2>
                        <div className="logInPanel__header__img"></div>
                    </div>
                    <div className="form__container flex">
                        <form className="form__login flex">
                            <label>Email</label>
                            <input
                                name='email'
                                type='email'
                                value={this.state.email}
                                onChange={this.handleChange}
                            ></input>
                            {this.state.isEmailok ? "" : <div className="error">Podany email jest nieprawidłowy</div> }
                            <label>Hasło</label>
                            <input
                                name='password'
                                type='password'
                                value={this.state.password}
                                onChange={this.handleChange}
                            ></input>
                            {this.state.isPasswordok ? "" : <div className="error">Podane hasło jest za krótkie</div> }
                        </form>
                    </div>
                    <div className="logInPanel__butons flex">
                        <button><Link to="/rejestracja">załóż konto</Link></button>
                        <button onClick={this.validate, this.handleSubmit}>zaloguj się</button>
                    </div>
                    {this.state.error && <p>{this.state.error.message}</p>}
                </div>
            </>
        );
    }
}

export default withFirebase(LogIn);

