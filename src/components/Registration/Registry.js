import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import HomeNavigation from '../Home/HomeComponents/HomeNavigation';
import { withFirebase } from '../Firebase/context';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index';


class Registry extends Component {
    // handleChange = e => {
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //         isEmailOk: true,
    //         isPasswordOk: true,
    //         isSecondPasswordOk: true
    //     })
    // }

    // validate = (e) => {
    //     e.preventDefault();
    //     const isEmailOk = this.handleEmailChange(this.state.email)
    //     const isPasswordOk = this.handlePasswordChange(this.state.password)
    //     const isSecondPasswordOk = this.handleSecondPasswordChange(this.state.secondPassword, this.state.password)

    //     if (isEmailOk !== true) {
    //         this.setState({ isEmailOk: false })
    //     }
    //     if (isPasswordOk !== true) {
    //         this.setState({ isPasswordOk: false })
    //     }
    //     if (isSecondPasswordOk !== true) {
    //         this.setState({ isSecondPasswordOk: false })
    //     }
    // }

    registryUser = (email,password) => {
            this.props.firebase
                .doCreateUserWithEmailAndPassword(email, password)
                .then(authUser => {
                    this.props.history.push('/')
                })
                .catch(error => {
                    this.props.onregistryError(error)
                });
    }

    // blockSubmit = () => {
    //     const { isEmailOk, isPasswordOk, isSecondPasswordOk } = this.state
    //     return isEmailOk && isPasswordOk && isSecondPasswordOk

    // }

    // handleEmailChange = (email) => {
    //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(email);
    // }

    // handlePasswordChange = (password) => {
    //     if (password.length < 6) return false
    //     return true
    // }

    // handleSecondPasswordChange = (secondPassword, password) => {
    //     if (password != secondPassword) {
    //         return false
    //     }
    //     return true
    // }

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
            if (!values.secondPassword) {
                errors.secondPassword = 'Pole wymagane';
            } else if (values.secondPassword !== values.password ){
                errors.secondPassword = "Hasła są różne!"
            }

            return errors;
        };
        return (
            <>
                <HomeNavigation />
                <div className="registryPanel flex">
                    <div className="registryPanel__header flex">
                        <h2>Zarejestruj się</h2>
                        <div className="registryPanel__header__img"></div>
                    </div>
                    <div className="form__container flex">
                        <Formik
                            initialValues={{email: "", password: ""}}
                            validate={validate}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                this.registryUser(values.email,values.password)
                                // setSubmitting(true);
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting
                            }) => (
                                    <form className="form__registry flex" onSubmit={handleSubmit}>
                                        {this.props.error &&
                                            <div className="errors flex">
                                                <i className="fas fa-exclamation-circle"></i>
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
                                        />
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
                                        <label>Powtórz hasło</label>
                                        <input
                                            name='secondPassword'
                                            type='password'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.secondPassword}
                                            className={touched.secondPassword && errors.secondPassword ? "input__error" : null}
                                        ></input>
                                        {
                                            errors.secondPassword && touched.secondPassword ? 
                                            (
                                                <div className="text__error">
                                                    <p>{errors.secondPassword}</p> 
                                                </div>
                                            ) : null
                                        }
                                        <div className="registryPanel__butons flex">
                                            <button disabled={isSubmitting} type="submit">załuż konto</button>
                                            <button><Link to="/logowanie">zaloguj się</Link></button>
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
        error: state.reg.regError
    } 
}

const mapDispatchToProps = dispatch => {
    return{
        onregistryError: (err) => dispatch(actionCreators.registryError(err))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(withFirebase(Registry)));
