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
        const validate = values => {
            const errors = {};
            if (!values.whoHelp) {
                errors.whoHelp = 'Wybierz komu chcesz pomóc';
            }
            return errors;
        };
        return (
            <>
                <Formik
                    initialValues={{ location: "", whoHelp: "", optional: "" }}
                    validate={validate}
                    onSubmit={(values) => {
                        this.props.onThirdFormValue(values)
                        this.props.onNextPage(this.props.pageNr + 1)
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        isSubmitting
                    }) => (
                            <Form>
                                <div className="third__container flex">
                                <div className="choose__box">
                                    <h2>Lokalizacja:</h2>
                                        <Field as="select" name="location">
                                            <option value="Poznań">Poznań</option>
                                            <option value="Warszawa">Warszawa</option>
                                            <option value="Kraków">Kraków</option>
                                            <option value="Wrocław">Wrocław</option>
                                            <option value="Katowice">Katowice</option>
                                        </Field>
                                    </div>
                                    {/* komu chcesz pomoć*/}
                                    <div className="third__container__help flex">
                                        <h3>Komu chcesz pomóc</h3>
                                        {this.props.error &&
                                            <div className="errors flex">
                                                <i class="fas fa-exclamation-circle"></i>
                                                <p>{this.props.error.message}</p>
                                            </div>
                                        }
                                        {
                                            errors.whoHelp && touched.whoHelp ?
                                                (
                                                    <div className="errors flex">
                                                        <i class="fas fa-exclamation-circle"></i>
                                                        <p>{errors.whoHelp}</p>
                                                    </div>
                                                ) : null
                                        }
                                        <div className="third__container__help__main">
                                            <label className="checkbox">
                                                <Field
                                                    name="whoHelp"
                                                    type="checkbox"
                                                    value="dzieciom"
                                                >
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
                                        <button type="submit" className="third__container__button__second" disabled={isSubmitting}>Dalej</button>
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
        onThirdFormValue: (val) => dispatch(actionCreators.thirdFormValue(val)),
        onToggleClass: (val) => dispatch(actionCreators.toggleClass(val)),
        onNextPage: (number) => dispatch(actionCreators.nextPage(number)),
        onPreviewPage: (number) => dispatch(actionCreators.previewPage(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GiveStuffThirdForm)