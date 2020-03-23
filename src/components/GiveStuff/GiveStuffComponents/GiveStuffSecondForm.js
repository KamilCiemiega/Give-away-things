import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';


class GiveStuffSecondForm extends Component {

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
        pageNr: state.formsVal.pageNr
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSecondFormValue: (val) => dispatch(actionCreators.secondFormValue(val)),
        onNextPage: (number) => dispatch(actionCreators.nextPage(number)),
        onPreviewPage: (number) => dispatch(actionCreators.previewPage(number))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GiveStuffSecondForm);