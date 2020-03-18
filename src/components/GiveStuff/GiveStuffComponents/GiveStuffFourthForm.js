import React, { Component } from 'react';
import { Formik,Form } from 'formik';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';


class GiveStuffFourth extends Component {

    render() {
        return (
            <>
                <Formik
                    initialValues={{ street: "", city: "", zipCode: "", phoneNumber: "", data: "", hour: "", notes: "" }}
                    onSubmit={(values) => {
                        this.props.onFourthFormValue(values)
                        this.props.onNextPage(this.props.pageNr + 1)
                    }}
                >
                    {({ values, handleChange, handleBlur, handleSubmit }) => (
                        <Form>
                        {JSON.stringify(values)}
                        <div className="container__fourth flex">
                            <h2>Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
                            <div className="container__fourth__form flex">
                                <div className="container__fourth__form__main flex">
                                    <h3>Adres odbioru</h3>
                                    <form className="container__fourth__form__main__first flex">
                                        <div className="container__fourth__form__main__first__elements flex">
                                            <label>Ulica</label>
                                            <input
                                                type="text"
                                                name="street"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.street}
                                            />
                                        </div>
                                        <div className="container__fourth__form__main__first__elements flex">
                                            <label>Miasto</label>
                                            <input
                                                type="text"
                                                name="city"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.city}
                                            />
                                        </div>
                                        <div className="container__fourth__form__main__first__elements flex">
                                            <label>Kod poczowy</label>
                                            <input
                                                type="text"
                                                name="zipCode"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.zipCode}
                                            />
                                        </div>
                                        <div className="container__fourth__form__main__first__elements flex">
                                            <label>Numer telefonu</label>
                                            <input
                                                type="text"
                                                name="phoneNumber"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.phoneNumber}
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className="container__fourth__form__main__second flex">
                                    <h3>Termin odbioru</h3>
                                    <form className="container__fourth__form__main__form flex">
                                        <div className="container__fourth__form__main__form__elements flex">
                                            <label>Data</label>
                                            <input
                                                type="text"
                                                name="data"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.data}
                                            />
                                        </div>
                                        <div className="container__fourth__form__main__form__elements flex">
                                            <label>Godzina</label>
                                            <input
                                                type="text"
                                                name="hour"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.hour}
                                            />
                                        </div>
                                        <div className="container__fourth__form__main__form__elemets flex">
                                            <label>Uwagi <br />dla kuriera</label>
                                            <textarea
                                                name="notes"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.notes}
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="flex">
                                 <button
                                    className="container__fourth__button__first"
                                    onClick={() => this.props.onPreviewPage(this.props.pageNr - 1)}>Wstecz
                                </button>
                                <button 
                                    type="submit"
                                    className="container__fourth__button__second"
                                    >Dalej
                                </button>
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
        pageNr: state.formsVal.pageNr
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFourthFormValue: (val) => dispatch(actionCreators.fourthFormValue(val)),
        onNextPage: (number) => dispatch(actionCreators.nextPage(number)),
        onPreviewPage: (number) => dispatch(actionCreators.previewPage(number))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GiveStuffFourth)