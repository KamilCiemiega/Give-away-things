import React, { Component } from 'react';

export default class GiveStuffFourth extends Component {
    render() {
        return (
            <>
                <h2>Adres odbioru</h2>
                <form>
                    <label>
                        Ulica
                    <input
                            type="text"
                            name="street"
                            value={this.props.street}
                            onChange={this.props.handleChange}
                        />
                    </label>
                    <label>
                        Miasto
                    <input
                            type="text"
                            name="city"
                            value={this.props.city}
                            onChange={this.props.handleChange}
                        />
                    </label>
                    <label>
                        Kod pocztowy
                    <input
                            type="text"
                            name="zipCode"
                            value={this.props.zipCode}
                            onChange={this.props.handleChange}
                        />
                    </label>
                    <label>
                        Numer telefonu
                    <input
                            type="text"
                            name="phoneNumber"
                            value={this.props.phoneNumber}
                            onChange={this.props.handleChange}
                        />
                    </label>
                </form>
                <h2>Termin odbioru</h2>
                <form>
                <label>
                    Data
                    <input
                            type="text"
                            name="data"
                            value={this.props.data}
                            onChange={this.props.handleChange}
                        />
                    </label>
                    <label>
                        godzina
                    <input
                            type="text"
                            name="hour"
                            value={this.props.hour}
                            onChange={this.props.handleChange}
                        />
                    </label>
                    <label>
                        Uwagi dla kuriera
                    <input
                            type="textarea"
                            name="notes"
                            value={this.props.notes}
                            onChange={this.props.handleChange}
                        />
                    </label>
                    
                </form>
            </>
        );
    }
}