import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

class GiveStuffSummary extends Component {
    render() {
        const { selectedOption, bags, thirdFormValues, fourthFormValue } = this.props
        return (
            <div className="summary__container flex">
                <h2>Podsumowanie twojej darowizny</h2>
                <div className="summary__container__give flex">
                    <h3>oddajesz:</h3>
                    <div className="summary__container__give__stuff flex">
                        <div className="summary__container__give__stuff__imgfirst"></div>
                        <span> {bags} worki {selectedOption}</span>
                    </div>
                    <div className="summary__container__give__whoHelp flex">
                        <i class="fas fa-smile"></i>
                        <span>Komu:</span>
                        <ul>
                            {/* {thirdFormValues.whoHelp.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })} */}
                        </ul>
                    </div>
                    <div className="summary__container__give__location flex">
                        <div className="summary__container__give__location__imgsecond"></div>
                        <span>dla lokalizacji: {thirdFormValues.location}</span>
                    </div>
                </div>
                <div className="summary__container__address flex">
                    <div className="summary__container__address__main flex">
                        <h3>Adres odbioru</h3>
                        <div className="summary__container__address__main__firstcolumn flex">
                            <div
                                className="summary__container__address__main__firstcolumn__firstelement flex">
                                <span>Ulica:</span>
                                <span>Miasto:</span>
                                <span>Kod pocztowy:</span>
                                <span>Numer telefonu:</span>
                            </div>
                            <div className="summary__container__address__main__firstcolumn__secondelement flex">
                                {fourthFormValue.map((item, index) => {
                                    return (
                                        <div>
                                            <span><strong>{item.street}</strong></span>
                                            <span><strong>{item.city}</strong></span>
                                            <span><strong>item.zipCode</strong></span>
                                            <span><strong>{item.phoneNumber}</strong></span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="summary__container__address__mainsecond flex">
                        <h3>Termin odbioru</h3>
                        <div className="summary__container__address__mainsecond__secondcolumn flex">
                            <div
                                className="summary__container__address__mainsecond__secondcolumn__firstelement flex">
                                <span>Data:</span>
                                <span>Godzina:</span>
                                <span>Uwagi dla kuriera:</span>
                            </div>
                            <div
                                className="summary__container__address__mainsecond__secondcolumn__secondelement flex">
                                <span><strong></strong></span>
                                <span><strong></strong></span>
                                <span><strong></strong></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <button type="submit"
                        className="summary__container__button__first"
                        onClick={() => this.props.onPreviewPage(this.props.pageNr - 1)}>Wstecz
                    </button>
                    <button type="submit"
                        className="summary__container__button__second"
                    >Potwierdzam
                    </button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        pageNr: state.formsVal.pageNr,
        selectedOption: state.formsVal.firsFormValue.selectedOption,
        bags: state.formsVal.secondFormValue.bags,
        thirdFormValues: state.formsVal.thirdFormValue,
        fourthFormValue: state.formsVal.fourthFormValue
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onPreviewPage: (number) => dispatch(actionCreators.previewPage(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GiveStuffSummary);