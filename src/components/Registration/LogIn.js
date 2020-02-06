import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeNavigation from '../Home/HomeComponents/HomeNavigation';

export default class LogIn extends Component {
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
                            <input name='email' type='email'></input>
                            <label>Hasło</label>
                            <input name='password' type='password'></input>
                        </form>
                    </div>
                    <div className="logInPanel__butons flex">
                        <button><Link to="/rejestracja">załóż konto</Link></button>
                        <button>zaloguj się</button>
                    </div>
                </div>
            </>
        );
    }
}
