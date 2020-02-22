import React, { Component } from 'react';

export default class GiveStuffFourth extends Component {
    render() {
        return (
            <div className="container__fourth flex">
                <h2>Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
                <div className="container__fourth__form flex">
                    <div className="container__fourth__form__main flex">
                        <h3>Adres odbioru</h3>
                        <form className="container__fourth__form__main__form flex">
                            <label>
                            <input
                                    type="text"
                                    name="street"
                                    value={this.props.street}
                                    onChange={this.props.handleChange}
                                />
                            </label>
                            <label>    
                                <input
                                    type="text"
                                    name="city"
                                    value={this.props.city}
                                    onChange={this.props.handleChange}
                                />
                            </label>                        
                            <label>
                            <input
                                    type="text"
                                    name="zipCode"
                                    value={this.props.zipCode}
                                    onChange={this.props.handleChange}
                                />
                            </label>
                            <label>
                            <input
                                    type="text"
                                    name="phoneNumber"
                                    value={this.props.phoneNumber}
                                    onChange={this.props.handleChange}
                                />
                            </label>
                        </form>
                    </div>
                    <div className="container__fourth__form__main__second flex">
                        <h3>Termin odbioru</h3>
                        <form className="container__fourth__form__main__form flex">
                            <label>
                    <input
                                    type="text"
                                    name="data"
                                    value={this.props.data}
                                    onChange={this.props.handleChange}
                                />
                            </label>
                            <label>
                    <input
                                    type="text"
                                    name="hour"
                                    value={this.props.hour}
                                    onChange={this.props.handleChange}
                                />
                            </label>
                            <label>
                    <input
                                    type="textarea"
                                    name="notes"
                                    value={this.props.notes}
                                    onChange={this.props.handleChange}
                                />
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}