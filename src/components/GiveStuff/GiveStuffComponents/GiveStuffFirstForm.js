import React, { Component } from 'react';
import Summary from './Summary';

class GiveStuffFirstForm extends Component {
    render() {
        return (
            <>
                <h2>Zaznacz co chcesz oddać:</h2>
                    <form className="conatainer__first">
                            <label className="radio">
                                <input
                                    type="radio"
                                    value="ubrania które nadają się do ponownego użycia"
                                    name="selectedOption"
                                    onChange={this.props.handleChange} />
                                 ubrania które nadają się do ponownego użycia
                                 <span className="checkmark"></span>
                            </label>
                            <label className="radio">
                                <input
                                    type="radio"
                                    value="ubrania do wyrzucenia"
                                    name="selectedOption"
                                    onChange={this.props.handleChange} />
                                 ubrania do wyrzucenia
                                 <span className="checkmark"></span>
                            </label>
                       
                            <label className="radio">
                                <input
                                    type="radio"
                                    value="zabawki"
                                    name="selectedOption"
                                    onChange={this.props.handleChange} />
                                zabawki
                                <span className="checkmark"></span>
                            </label>
                            <label className="radio">
                                <input
                                    type="radio"
                                    value="książki"
                                    name="selectedOption"
                                    onChange={this.props.handleChange} />
                                książki
                                <span className="checkmark"></span>
                            </label>
                            <label className="radio">
                                <input
                                    type="radio"
                                    value="inne"
                                    name="selectedOption"
                                    onChange={this.props.handleChange} />
                                inne
                                <span className="checkmark"></span>
                            </label>
                    </form>
            </>
        );
    }
}

export default GiveStuffFirstForm;