import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../../Firebase/context';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

class LoginPanel extends Component {

    componentDidMount() {
        this.props.firebase.auth.onAuthStateChanged(authUser => {
            this.props.onlogOutSuccess(authUser);
        });
    }

    logoutHandler = () => {
        this.props.firebase.doSignOut();
    };

    render() {
        const logged =
            <ul>
                <li>{`Cześć ${this.props.authUser?.email}`}</li>
                <li><Link className="link" to='/oddajrzeczy'>Oddaj rzeczy</Link></li>
                <li><Link className="link" to='/wylogowano' onClick={this.logoutHandler}>Wyloguj się</Link></li>
            </ul>
        const notLogged =
            <ul>
                <li><Link className="link" to='/logowanie'>Zaloguj</Link></li>
                <li><Link className="link" to='/rejestracja'>Załóż konto</Link></li>
            </ul>

        return (
            <div className="loginPanel">
                {this.props.authUser ? logged : notLogged}
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        authUser: state.logOut.authUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onlogOutSuccess: (data) => dispatch(actionCreators.logOutSuccess(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withFirebase(LoginPanel));