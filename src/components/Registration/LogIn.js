import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import HomeNavigation from '../Home/HomeComponents/HomeNavigation';
import { withFirebase } from '../Firebase/context';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index';

class LogIn extends Component {

    // handleChange = e => {
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //         isEmailok: true,
    //         isPasswordok: true,
    //     })
    // }

    // validate = () => {
    //     const isEmailok = this.handleEmailChange(this.state.email)
    //     const isPasswordok = this.handlePasswordChange(this.state.password)

    //     if (isEmailok !== true) {
    //         this.setState({ isEmailok: false })
    //     }
    //     if (isPasswordok !== true) {
    //         this.setState({ isPasswordok: false })
    //     }
    // }
    // blockSubmit = () => {
    //     const { isEmailok, isPasswordok } = this.state
    //     return isEmailok && isPasswordok
    // }

    // handleEmailChange = (email) => {
    //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(email);
    // }

    // handlePasswordChange = (password) => {
    //     if (password.length < 6) return false
    //     return true
    // }
    logInUser = (email,password) => {
            this.props.firebase
                .doSignInWithEmailAndPassword(email, password)
                .then(authUser => {
                    this.props.history.push('/')
                })
                .catch(error => {
                    console.log(error)
                    this.props.onlogInError(error)
                });
    }

    render() {
        const validate = values => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Pole wymagane';
            } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
                errors.email = 'Podane email jest nieprawidłowy!';
            }
            if (!values.password) {
                errors.password = 'Pole wymagane';
            } else if (values.password.length < 6) {
                errors.password = 'Podane hasło jest za krótkie!';
            }
            return errors;
        };
        return (
            <>
                <HomeNavigation />
                <div className="logInPanel flex">
                    <div className="logInPanel__header flex">
                        <h2>Skontaktuj się z nami</h2>
                        <div className="logInPanel__header__img"></div>
                    </div>
                    <div className="form__container flex">
                        <Formik
                            initialValues={{ name: "", password: "" }}
                            validate={validate}
                            onSubmit={(values) => {
                                this.logInUser(values.email, values.password)
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit
                            }) => (
                                    <form className="form__login flex" onSubmit={handleSubmit}>
                                        
                                        {this.props.error &&
                                            <div className="errors flex">
                                                <i class="fas fa-exclamation-circle"></i>
                                                <p>{this.props.error.message}</p>
                                            </div>
                                        }
                                        <label>Email</label>
                                        <input
                                            name='email'
                                            type='email'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            className={touched.email && errors.email ? "input__error" : null}
                                        ></input>
                                        {
                                            errors.email && touched.email ?
                                                (
                                                    <div className="text__error">
                                                        <p>{errors.email}</p>
                                                    </div>
                                                ) : null
                                        }
                                        <label>Hasło</label>
                                        <input
                                            name='password'
                                            type='password'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            className={touched.password && errors.password ? "input__error" : null}
                                        ></input>
                                        {
                                            errors.password && touched.password ? 
                                            (
                                                <div className="text__error">
                                                    <p>{errors.password}</p>
                                                </div>
                                            ) : null
                                        }
                                        <div className="logInPanel__butons flex">
                                            <button><Link to="/rejestracja">załóż konto</Link></button>
                                            <button type="submit" >Zaloguj się</button>
                                        </div>
                                    </form>
                                )}
                        </Formik>
                    </div>
                </div>
            </>
        );
    }
}
const mapStateToProps = state => {
    return {
        error: state.logIn.logInError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onlogInError: (err) => dispatch(actionCreators.logInError(err))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withFirebase(LogIn)));

