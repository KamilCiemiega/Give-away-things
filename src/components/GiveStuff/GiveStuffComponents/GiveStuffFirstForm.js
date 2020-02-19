import React, { Component } from 'react';
import Summary from './Summary';

class GiveStuffFirstForm extends Component {
    render() {
        return (
            <>
                <h2>Zaznacz co chcesz oddać:</h2>
                <form>
                    <form>
                            <label className="radio">
                                <input
                                    type="radio"
                                    value="ubrania które nadają się do ponownego użycia"
                                    name="selectedOption"
                                    checked={this.props.selectedOption === 'ubrania które nadają się do ponownego użycia'}
                                    onChange={this.props.handleChange} />
                                 ubrania które nadają się do ponownego użycia
                                 <span className="checkmark"></span>
                            </label>
                            <label className="radio">
                                <input
                                    type="radio"
                                    value="ubrania do wyrzucenia"
                                    checked={this.props.selectedOption === 'ubrania do wyrzucenia'}
                                    onChange={this.props.handleChange} />
                                 ubrania do wyrzucenia
                                 <span className="checkmark"></span>
                            </label>
                       
                            <label className="radio">
                                <input
                                    type="radio"
                                    value="zabawki"
                                    checked={this.props.selectedOption === 'zabawki'}
                                    onChange={this.props.handleChange} />
                                zabawki
                                <span className="checkmark"></span>
                            </label>
                            <label className="radio">
                                <input
                                    type="radio"
                                    value="książki"
                                    checked={this.props.selectedOption === 'książki'}
                                    onChange={this.props.handleChange} />
                                książki
                                <span className="checkmark"></span>
                            </label>
                            <label className="radio">
                                <input
                                    type="radio"
                                    value="inne"
                                    checked={this.props.selectedOption === 'inne'}
                                    onChange={this.props.handleChange} />
                                inne
                                <span className="checkmark"></span>
                            </label>
                    </form>
                </form>
            </>
        );
    }
}

export default GiveStuffFirstForm;