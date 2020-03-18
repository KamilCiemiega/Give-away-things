import React, { Component } from 'react';
import GiveStuffHeader from './GiveStuffComponents/GiveStuffHeader';
import GiveStuffFirstForm from './GiveStuffComponents/GiveStuffFirstForm';
import GiveStuffSecondForm from './GiveStuffComponents/GiveStuffSecondForm';
import GiveStuffThirdForm from './GiveStuffComponents/GiveStuffThirdForm';
import GiveStuffFourthForm from './GiveStuffComponents/GiveStuffFourthForm';
import GiveStuffSummary from './GiveStuffComponents/GiveStuffSummary';
import GiveStuffConfirm from './GiveStuffComponents/GiveStuffConfirm';
import { connect } from 'react-redux';

class GiveStuff extends Component {
    state = {
        pageNr: 1
    }

    warningDescription = () => {
        switch (this.props.pageNr) {
            case 1:
                return 'Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.'
            case 2:
                return 'Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.'
            case 3:
                return 'Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.'
            case 4:
                return 'Podaj adres oraz termin odbioru rzeczy.'
            default:
                return ''
        }
    }

    nextForm = () => {
        switch (this.props.pageNr) {
            case 1:
                return <GiveStuffFirstForm />
            case 2:
                return <GiveStuffSecondForm />
            case 3:
                return <GiveStuffThirdForm />
            case 4:
                return <GiveStuffFourthForm />
            case 5:
                return <GiveStuffSummary />
            case 6:
                return <GiveStuffConfirm/>
        }
    }
    currentStep = () => {
        if (this.props.pageNr < 6)
            return this.props.pageNr
    }
    render() {
        return (
            <div className="giveStuff__container flex">
                <GiveStuffHeader />
                {this.props.pageNr < 5 ?
                    <div className="giveStuff__container__warning flex">
                        <h1>Ważne!</h1>
                        {this.warningDescription()}
                    </div> : ""
                }
                <div className="giveStuff__container__main flex">
                    {
                        this.props.pageNr < 6 ? <p>Krok {this.currentStep()}/5</p> : ""
                    }
                    <div className="giveStuff__container__main__form">
                        {this.nextForm()}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        pageNr: state.formsVal.pageNr
    }
}

export default connect(mapStateToProps,null)(GiveStuff);