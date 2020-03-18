import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';


class GiveStuffFirstForm extends Component {
    render() {
        return (
            <>
                <h2>Zaznacz co chcesz oddać:</h2>
                <Formik
                    initialValues={{ selectedOption: "" }}
                    onSubmit = {(values) => {
                        this.props.onFirstFormValue(values)
                        this.props.onNextPage(this.props.pageNr + 1)
                    }}
                >
                    {({ values }) => (
                        <Form>
                            <form className="conatainer__first">
                                <label className="radio">
                                    <Field
                                        type="radio"
                                        value="ubrania które nadają się do ponownego użycia"
                                        name="selectedOption">
                                    </Field>
                                    ubrania które nadają się do ponownego użycia
                                 <span className="checkmark"></span>
                                </label>
                                <label className="radio">
                                    <Field
                                        type="radio"
                                        value="ubrania do wyrzucenia"
                                        name="selectedOption">
                                    </Field>
                                    ubrania do wyrzucenia
                                 <span className="checkmark"></span>
                                </label>
                                <label className="radio">
                                    <Field
                                        type="radio"
                                        value="zabawki"
                                        name="selectedOption">
                                    </Field>
                                    zabawki
                                <span className="checkmark"></span>
                                </label>
                                <label className="radio">
                                    <Field
                                        type="radio"
                                        value="książki"
                                        name="selectedOption">
                                    </Field>
                                    książki
                                <span className="checkmark"></span>
                                </label>
                                <label className="radio">
                                    <Field
                                        type="radio"
                                        value="inne"
                                        name="selectedOption">
                                    </Field>
                                    inne
                                <span className="checkmark"></span>
                                </label>
                                    <button type="submit"className="conatainer__first__button">Dalej
                                </button> 
                            </form>
                        </Form>
                    )}
                </Formik>
            </>
        );
    }
}
const mapStateToProps = state => {
        return {
            pageNr: state.formsVal.pageNr
        }
}

const mapDispatchToProps = dispatch => {
    return {
        onFirstFormValue: (val) => dispatch(actionCreators.firstFormValue(val)),
        onNextPage: (number) => dispatch(actionCreators.nextPage(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GiveStuffFirstForm);