import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

class GiveStuffThirdForm extends Component {

    toggleClass = () => {
        const currentValue = this.props.active;
        this.props.onToggleClass(!currentValue)
    };

    render() {
        return (
            <>
                <Formik
                    initialValues={{ location: "", whoHelp: "", optional: "" }}
                    onSubmit={(values) => {
                        this.props.onThirdFormValue(values)
                        this.props.onNextPage(this.props.pageNr + 1)
                    }}
                >
                    {({ values, handleChange, handleBlur }) => (
                        <Form>
                            <form className="third__container flex">
                                <h2>Lokalizacja:</h2>
                                <div className="choose__box flex">
                                    <div
                                        className={`option__main ${this.props.active ? 'active' : null}`}>
                                        <div className={`option ${this.props.active ? 'active' : null}`}
                                            onClick={this.toggleClass}>
                                            <Field
                                                className="radio"
                                                type="radio"
                                                value="Poznań"
                                                name="location">
                                            </Field>
                                            <label>Poznań</label>
                                        </div>
                                        <div
                                            className={`option ${this.props.active ? 'active' : null}`}
                                            onClick={this.toggleClass}>
                                            <Field
                                                className="radio"
                                                type="radio"
                                                value="Warszawa"
                                                name="location">
                                            </Field>
                                            <label>Warszawa</label>
                                        </div>
                                        <div className={`option ${this.props.active ? 'active' : null}`}
                                            onClick={this.toggleClass}>
                                            <Field
                                                className="radio"
                                                type="radio"
                                                value="Kraków"
                                                name="location">
                                            </Field>
                                            <label>Kraków</label>
                                        </div>
                                        <div className={`option ${this.props.active ? 'active' : null}`}
                                            onClick={this.toggleClass}>
                                            <Field
                                                className="radio"
                                                type="radio"
                                                value="Wrocław"
                                                name="location">
                                            </Field>
                                            <label>Wrocław</label>
                                        </div>
                                        <div className={`option ${this.props.active ? 'active' : null}`}
                                            onClick={this.toggleClass}>
                                            <Field
                                                className="radio"
                                                type="radio"
                                                value="Katowice"
                                                name="location">
                                            </Field>
                                            <label>Katowice</label>
                                        </div>
                                    </div>
                                    <div className="selected" onClick={this.toggleClass}>
                                        -- wybierz --
                    </div>
                                </div>
                                {/* komu chcesz pomoć*/}
                                <div className="third__container__help flex">
                                    <h3>Komu chcesz pomóc</h3>
                                    <div className="third__container__help__main">
                                        <label className="checkbox">
                                            <Field
                                                name="whoHelp"
                                                type="checkbox"
                                                value="dzieciom">
                                            </Field>
                                            <span className="checkmark">dzieciom</span>
                                        </label>
                                        <label className="checkbox">
                                            <Field
                                                name="whoHelp"
                                                type="checkbox"
                                                value="samotnym matkom">
                                            </Field>
                                            <span className="checkmark">samotnym matkom</span>
                                        </label>
                                        <label className="checkbox">
                                            <Field
                                                name="whoHelp"
                                                type="checkbox"
                                                value="bezdomnym">
                                            </Field>
                                            <span className="checkmark">bezdomnym</span>
                                        </label>
                                    </div>
                                    <div className="third__container__help__main">
                                        <label className="checkbox">
                                            <Field
                                                name="whoHelp"
                                                type="checkbox"
                                                value="niepełnosprawnym">
                                            </Field>
                                            <span className="checkmark">niepełnosprawnym</span>
                                        </label>
                                        <label className="checkbox">
                                            <Field
                                                name="whoHelp"
                                                type="checkbox"
                                                value="osobom starszym">
                                            </Field>
                                            <span className="checkmark">osobom starszym</span>
                                        </label>
                                    </div>
                                    <h3>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                                    <input
                                        className="text"
                                        type="text"
                                        name="optional"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.optional}
                                    />
                                </div>
                                <div className="flex">
                                    <button
                                        className="third__container__button__first"
                                        onClick={() => this.props.onPreviewPage(this.props.pageNr - 1)}>Wstecz
                                    </button>
                                    <button type="submit" className="third__container__button__second">Dalej</button>
                                </div>
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
        active: state.formsVal.active,
        pageNr: state.formsVal.pageNr
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onThirdFormValue: (val) => dispatch(actionCreators.thirdFormValue(val)),
        onToggleClass: (val) => dispatch(actionCreators.toggleClass(val)),
        onNextPage: (number) => dispatch(actionCreators.nextPage(number)),
        onPreviewPage: (number) => dispatch(actionCreators.previewPage(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GiveStuffThirdForm)