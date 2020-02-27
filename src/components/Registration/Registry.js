import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import HomeNavigation from '../Home/HomeComponents/HomeNavigation';
import { withFirebase } from '../Firebase/context';

class Registry extends Component {

    state = {
        email: "",
        password: "",
        secondPassword: "",
        isEmailOk: true,
        isPasswordOk: true,
        isSecondPasswordOk: true,
        error: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            isEmailOk: true,
            isPasswordOk: true,
            isSecondPasswordOk: true
        })
    }

    validate = (e) => {
        e.preventDefault();
        const isEmailOk = this.handleEmailChange(this.state.email)
        const isPasswordOk = this.handlePasswordChange(this.state.password)
        const isSecondPasswordOk = this.handleSecondPasswordChange(this.state.secondPassword, this.state.password)

        if (isEmailOk !== true) {
            this.setState({ isEmailOk: false })
        }
        if (isPasswordOk !== true) {
            this.setState({ isPasswordOk: false })
        }
        if (isSecondPasswordOk !== true) {
            this.setState({ isSecondPasswordOk: false })
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await this.validate(e);
        const { isEmailOk, isPasswordOk, isSecondPasswordOk, email, password, error } = this.state
        if (isEmailOk && isPasswordOk && isSecondPasswordOk) {
            this.props.firebase
                .doCreateUserWithEmailAndPassword(email, password)
                .then(authUser => {
                    this.setState({ email, password });
                    this.props.history.push('/')
                    console.log(authUser)
                })
                .catch(error => {
                    this.setState({ error });
                });
        }
        console.log(error);
    }

    blockSubmit = () => {
        const { isEmailOk, isPasswordOk, isSecondPasswordOk} = this.state
        return isEmailOk && isPasswordOk && isSecondPasswordOk
         
    }

    handleEmailChange = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    handlePasswordChange = (password) => {
        if (password.length < 6) return false
        return true
    }

    handleSecondPasswordChange = (secondPassword, password) => {
        if (password != secondPassword) {
            return false
        }
        return true
    }

    render() {
        return (
            <>
                <HomeNavigation />
                <div className="registryPanel flex">
                    <div className="registryPanel__header flex">
                        <h2>Skontaktuj się z nami</h2>
                        <div className="registryPanel__header__img"></div>
                    </div>
                    <div className="form__container flex">
                        <form className="form__registry flex" onSubmit={(e) => {
                            this.validate(e);
                            this.handleSubmit(e)
                        }}>
                            {this.state.error && 
                                <div className="errors flex">
                                <i class="fas fa-exclamation-circle"></i>
                                <p>{this.state.error.message}</p>
                            </div>
                            }
                            <label>Email</label>
                            <input
                                name='email'
                                type='email'
                                value={this.state.email}
                                onChange={this.handleChange}
                            ></input>
                            {this.state.isEmailOk ? "" : <div className="error">Podane email jest nieprawidłowy!</div>}
                            <label>Hasło</label>
                            <input
                                name='password'
                                type='password'
                                value={this.state.password}
                                onChange={this.handleChange}
                            ></input>
                            {this.state.isPasswordOk ? "" : <div className="error">Podane hasło jest za krótkie</div>}
                            <label>Powórz hasło</label>
                            <input
                                name='secondPassword'
                                type='password'
                                value={this.state.secondPassword}
                                onChange={this.handleChange}
                            ></input>
                            {this.state.isSecondPasswordOk ? "" : <div className="error">Hasła są różne!</div>}
                            <div className="registryPanel__butons flex">
                                <button
                                    disabled={!this.blockSubmit()}
                                    type="submit">
                                    załuż konto
                                </button>
                                <button><Link to="/logowanie">zaloguj się</Link></button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }

}

export default withRouter(withFirebase(Registry));
