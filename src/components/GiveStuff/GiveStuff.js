import React, { Component } from 'react';
import GiveStuffHeader from './GiveStuffComponents/GiveStuffHeader';
import GiveStuffFirstForm from './GiveStuffComponents/GiveStuffFirstForm';
import GiveStuffSecondForm from './GiveStuffComponents/GiveStuffSecondForm';
import GiveStuffThirdForm from './GiveStuffComponents/GiveStuffThirdForm';
import GiveStuffFourthForm from './GiveStuffComponents/GiveStaffFourthForm';
import Summary from './GiveStuffComponents/Summary';
class GiveStuff extends Component {
    state = {
        pageNr: 1,
        bags: "",
        selectedOption: "",
        location: "",
        whoHelp: "",
        optional: "",
        checked: false,
        street: "",
        city: "",
        zipCode: "",
        phoneNumber: "",
        data: "",
        hour: "",
        notes: ""
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            checked: e.target.checked
        })
    }
    warningDescription = () => {
        switch (this.state.pageNr) {
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
        switch (this.state.pageNr) {
            case 1:
                return <GiveStuffFirstForm handleChange={this.handleChange} selectedOption={this.state.selectedOption} />
            case 2:
                return <GiveStuffSecondForm handleChange={this.handleChange} bags={this.state.bags} />
            case 3:
                return <GiveStuffThirdForm
                    handleChange={this.handleChange}
                    locaion={this.state.location}
                    whoHelp={this.state.whoHelp}
                    checked={this.state.checked}
                    optional={this.state.optional} />
            case 4:
                return <GiveStuffFourthForm
                    handleChange={this.handleChange}
                    street={this.state.street}
                    city={this.state.city}
                    zipCode={this.state.zipCode}
                    phoneNumber={this.state.phoneNumber}
                    data={this.state.data}
                    hour={this.state.hour}
                    notes={this.state.notes} />
            case 5:
                return <Summary />
        }
    }

    nextButton = () => {
        const next = this.state.pageNr + 1
        if (this.state.pageNr !== 5)
            this.setState({
                pageNr: next
            })
    }

    prevButton = () => {
        const prev = this.state.pageNr - 1
        if (this.state.pageNr !== 1)
            this.setState({
                pageNr: prev
            })
    }
    currentStep = () => {
        if (this.state.pageNr < 5)
            return this.state.pageNr
    }
    render() {
        return (
            <div className="giveStuff__container flex">
                <GiveStuffHeader />
                <div className="giveStuff__container__warning flex">
                    <h1>Ważne!</h1>
                    {this.warningDescription()}
                </div>
                <div className="giveStuff__container__main flex">
                    {
                        this.state.pageNr < 5 ? <p>Krok{this.currentStep()}/4</p> : ""
                    }
                    <div className="giveStuff__container__main__form">
                        {this.nextForm()}
                    </div>
                    <div className="giveStuff__container__main__buttons flex">
                        {   this.state.pageNr === 1 ? "" :
                            <button
                                className="giveStuff__container__main__buttons__button__first"
                                onClick={this.prevButton}>Wstecz
                            </button>
                        }
                        <button
                            className="giveStuff__container__main__buttons__button__second"
                            onClick={this.nextButton}>Dalej
                        </button>
                    </div>
                </div>
                {/* <Summary {...this.state}/> */}
            </div>
        );
    }
}

export default GiveStuff;