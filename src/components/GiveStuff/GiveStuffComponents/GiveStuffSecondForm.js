import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';


class GiveStuffSecondForm extends Component {


    toggleClass = () => {
        const currentValue = this.props.active;
        this.props.onToggleClass(!currentValue)
    };

    render() {
        return (
            <>
                <Formik
                    initialValues={{ bags: "" }}
                    onSubmit={(values) => {
                        this.props.onSecondFormValue(values)
                        this.props.onNextPage(this.props.pageNr + 1)
                    }}
                >
                    {({ values }) => (
                        <Form>
                            <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
                            <div className="select__box">
                                <Field as="select" name="bags">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Field>
                                <div className="flex">
                                    <button
                                        className="button__first"
                                        onClick={() => this.props.onPreviewPage(this.props.pageNr - 1)}>Wstecz
                                    </button>
                                    <button type="submit" className="button__second">Dalej</button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </>
        );
    }
}
const mapStateToProps = state => {
    return {
        active: state.formsVal.active,
        pageNr: state.formsVal.pageNr
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSecondFormValue: (val) => dispatch(actionCreators.secondFormValue(val)),
        onToggleClass: (val) => dispatch(actionCreators.toggleClass(val)),
        onNextPage: (number) => dispatch(actionCreators.nextPage(number)),
        onPreviewPage: (number) => dispatch(actionCreators.previewPage(number))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GiveStuffSecondForm);

{/* <div className="select__box flex">
                                <div
                                    className={`option__container ${this.props.active ? 'active' : null}`}>
                                    <div className={`option ${this.props.active ? 'active' : null}`}
                                        onClick={this.toggleClass}>
                                        <Field
                                            className="radio"
                                            type="radio"
                                            value="1"
                                            name="bags">
                                        </Field>
                                        <label>1</label>
                                    </div>
                                    <div
                                        className={`option ${this.props.active ? 'active' : null}`}
                                        onClick={this.toggleClass}>
                                        <Field
                                            className="radio"
                                            type="radio"
                                            value="2"
                                            name="bags">
                                        </Field>
                                        <label>2</label>
                                    </div>
                                    <div className={`option ${this.props.active ? 'active' : null}`}
                                        onClick={this.toggleClass}>
                                        <Field
                                            className="radio"
                                            type="radio"
                                            value="3"
                                            name="bags">
                                        </Field>
                                        <label>3</label>
                                    </div>
                                    <div className={`option ${this.props.active ? 'active' : null}`}
                                        onClick={this.toggleClass}>
                                        <Field
                                            className="radio"
                                            type="radio"
                                            value="4"
                                            name="bags">
                                        </Field>
                                        <label>4</label>
                                    </div>
                                    <div className={`option ${this.props.active ? 'active' : null}`}
                                        onClick={this.toggleClass}>
                                        <Field
                                            className="radio"
                                            type="radio"
                                            value="5"
                                            name="bags">
                                        </Field>
                                        <label>5</label>
                                    </div>
                                </div>
                                <div className="selected" onClick={this.toggleClass}>
                                    Liczba 60 worków
                                </div>
                            </div> */}