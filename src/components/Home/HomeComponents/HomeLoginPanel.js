import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../../Firebase/context';

class LoginPanel extends Component {

    state = {
        authUser: null
    }

    componentDidMount() {
        this.props.firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState({ authUser })
                : this.setState({ authUser: null });
        });
    }

    logoutHandler = () => {
        this.props.firebase.doSignOut();
    };

    render() {
        const {authUser} = this.state
        const logged =
            <ul>
                <li>{`Cześć ${authUser?.email}`}</li>
                <li><Link className="link" to='/'>Oddaj rzeczy</Link></li>
                <li><Link className="link" to='/wylogowano' onClick={this.logoutHandler}>Wyloguj się</Link></li>
            </ul>
        const notLogged =
            <ul>
                <li><Link className="link" to='/logowanie'>Zaloguj</Link></li>
                <li><Link className="link" to='/rejestracja'>Załóż konto</Link></li>
            </ul>

        return (
            <div className="loginPanel">
                {authUser ? logged : notLogged}
            </div>
        )
    }
};

export default withFirebase(LoginPanel);