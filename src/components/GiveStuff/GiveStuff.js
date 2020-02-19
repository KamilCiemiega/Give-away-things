import React, { Component } from 'react';
import GiveStuffHeader from './GiveStuffComponents/GiveStuffHeader';
import GiveStuffFirstForm from './GiveStuffComponents/GiveStuffFirstForm';
import GiveStuffSecondForm from './GiveStuffComponents/GiveStuffSecondForm';
import GiveStuffThirdForm from './GiveStuffComponents/GiveStuffThirdForm';
import Summary from './GiveStuffComponents/Summary';
class GiveStuff extends Component {
    state = {
        pageNr:3,
        bags:"",
        selectedOption:"",
        location:"",
        whoHelp:""
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
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
                return <GiveStuffFirstForm handleChange={this.handleChange} selectedOption={this.state.selectedOption}/>
            case 2:
                return <GiveStuffSecondForm handleChange={this.handleChange} bags={this.state.bags}/>
            case 3:
                return <GiveStuffThirdForm 
                        handleChange={this.handleChange} 
                        locaion={this.state.location}
                        whoHelp={this.state.whoHelp}/>
            case 4:
                return <GiveStuffFirstForm/>
            case 5:
                return <Summary/>
        } 
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
                        <p>Krok</p>
                        <div className="giveStuff__container__main__form">
                            {this.nextForm()}
                        </div>
                        <button className="giveStuff__container__main__button">Dalej</button>
                    </div>
                    <Summary {...this.state}/>
            </div>
        );
    }
}

export default GiveStuff;