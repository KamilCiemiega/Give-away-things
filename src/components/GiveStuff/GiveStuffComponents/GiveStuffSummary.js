import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import { withFirebase } from '../../Firebase/context';

class GiveStuffSummary extends Component {

    componentDidMount = () => {
        const basket = [
            {name: 'Klawiatura', price: 99},
            {name: 'Komputer', price: 2990},
            {name: 'Kabel', price: 19}
        ];
        const val = basket.slice(-1)[0];
        const dataArray = Object.keys(val).map(function(k){return val[k]})
        console.log(dataArray)
        //tu poniżej próbowałem zrobić to samo co wyżej czyli
        //wyciągąć ostatnio obiekt z tablicy i zwrócić same wartości tego obiektu w tablicy 
        //ale niestety zwraca mi undifined :/ a prykład powyższy tesowy zwraca mi odpowiednie warości
        const formLastValue =   Object.keys(this.props.fourthFormValue.slice(-1)[0]);
        const newArr = formLastValue.map(function(i){return formLastValue[i]})
        console.log(newArr)
    }

    sendDataToFirebase = () => {
        const ref = this.props.firebase.db.ref('summary')
        ref.push(this.props.thirdFormValues)
    }

    render() {
        const { selectedOption, bags, thirdFormValues, fourthFormValue } = this.props
        const formLastValue =   Object.keys(fourthFormValue.slice(-1)[0]);
        const newArr = formLastValue.map(function(i){return formLastValue[i]})
        
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
                            {thirdFormValues.whoHelp.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })}
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
                                {fourthFormValue.map((item) => {
                                    return (
                                        <>
                                            <span><strong>{item.street}</strong></span>
                                            <span><strong>{item.city}</strong></span>
                                            <span><strong>{item.zipCode}</strong></span>
                                            <span><strong>{item.phoneNumber}</strong></span>
                                        </>
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
                            <div className="summary__container__address__mainsecond__secondcolumn__secondelement flex">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <button type="submit"
                        className="summary__container__button__first"
                        onClick={() => this.props.onPreviewPage(this.props.pageNr - 1)}>Wstecz
                    </button>
                    <button type="submit"className="summary__container__button__second" 
                    onClick={this.sendDataToFirebase()}>Potwierdzam</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(GiveStuffSummary));