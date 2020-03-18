import React, { Component } from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { Formik } from 'formik';
import * as actionCreators from '../../store/actions/index';
import { connect } from 'react-redux';

class HomeContactForm extends Component {

    // validate = (e) => {
    //     e.preventDefault();
    //     const isNameOk = this.handleChangeName(this.state.name)
    //     const isEmailOk = this.handleChangeEmail(this.state.email)
    //     const isMessageOk = this.handleChangeEmail(this.state.message)

    //     if (isNameOk !== true) {
    //         this.setState({ isNameOk: false })
    //     }
    //     if (isEmailOk !== true) {
    //         this.setState({ isEmailOk: false })
    //     }
    //     if (isMessageOk !== true) {
    //         this.setState({ isMessageOk: false })
    //     }
    //     this.sendData()
    // }

    // handleChange = e => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }
    // handleChangeName = (name) => {
    //     if (/\s/.test(name) || name.length <= 0) {
    //         return false
    //     }
    //     return true
    // }
    // handleChangeMessage = (message) => {
    //     if (test(message) < 120) return false
    //     return true
    // }

    // handleChangeEmail = (email) => {
    //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(email);
    // }

    // sendData = () => {
    //     fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             name: this.state.name,
    //             email: this.state.email,
    //             message: this.state.message
    //         })
    //     })
    //         .then(resp => resp.json())
    //         .then(data => {
    //             if (data.status === 'success') {
    //                 //tutaj akcja jak bedzie success
    //                 this.setState({
    //                     dataStatus: data.status
    //                 })
    //             } else {
    //                 // tutaj obsluga bledu
    //                 this.setState({
    //                     dataStatus: data.status
    //                 })
    //             }
    //         })
    // }

    render() {
        const validate = values => {
            const errors = {};
            if (!values.name) {
              errors.name = 'Pole wymagane!';
            } else if (/\s/.test(values.name)) {
              errors.name = 'Podane imię jest nieprawidłowe!';
            }
          
            if (!values.email) {
              errors.email = 'Pole wymagane!';
            } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
              errors.email = 'Podane email jest nieprawidłowy!';
            }
          
            if (values.message.length < 120) {
                errors.message = "Podana wiadomość jest za krótka!"
            } 
          
            return errors;
        };
        return (
            <div name="contact" className="contact flex">
                <div className="contact__empty"></div>
                <div className="contact__form">
                    <div className="contact__form__header flex">
                        <SectionTitle>Skontaktuj się z nami</SectionTitle>
                        {
                            this.props.status === "success" ? 
                            <div className="success">Wiadomość zostałą wysłana! wkrótce się skontaktujemy</div>
                            : <div className="error">{this.props.status}</div>
                        }
                    </div>
                    <Formik 
                        initialValues={{ name: "", email: "", message:""}}
                        validate={validate}
                        onSubmit={(values, { setSubmitting, resetForm}) => {
                            this.props.onSendData(values)
                            setSubmitting(true);
                            if(this.props.status === "success"){
                                setSubmitting(false)
                                resetForm();
                            }
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
                            <form className="flex" onSubmit={handleSubmit}>
                                <div className="nameEmail flex">
                                    <div className="nameEmail__first">
                                        <label htmlFor="name">Wpisz swoje imię</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Podaj swoje imię"
                                            onChange={handleChange}
                                            //user enter and left field
                                            onBlur={handleBlur}
                                            value={values.name}
                                            className={touched.name && errors.name ? "input__error" : null}
                                        />
                                        {
                                            errors.name && touched.name ? 
                                            (
                                                <div className="text__error">{errors.name}</div>
                                            ) : null
                                        }
                                    </div>
                                    <div className="nameEmail__second">
                                        <label htmlFor="email">Wpisz swój email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Krzysztof@xyz.com"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            className={touched.email && errors.email ? "input__error" : null}
                                        />
                                        {
                                            errors.email && touched.email ? 
                                            (
                                                <div className="text__error">{errors.email}</div>
                                            ) : null
                                        }
                                    </div>
                                </div>
                        <div className="msg flex">
                                <label>Wpisz swoją wiadomość</label>
                                <textarea 
                                    placeholder="sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur 
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et accusantium sunt nihil reiciendis at 
                                    fugiat neque harum pariatur similique fugit voluptatem, unde sit incidunt."
                                    name="message"
                                    value={values.message} 
                                    type="message"
                                    onChange={handleChange}
                                    onBlur={handleBlur} 
                                    className={touched.message && errors.message ? "input__error" : null}>
                                 </textarea>
                                        {
                                            errors.message && touched.message ? 
                                            (
                                                <div className="text__error">{errors.message}</div>
                                            ) : null
                                         }
                            </div>
                            <input className="submit" value="Wyślij" type="submit" disabled={isSubmitting}></input>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        status: state.con.status
    } 
}

const mapDispatchToProps = dispatch => {
    return{
        onSendData: (values) => dispatch(actionCreators.sendData(values))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeContactForm);