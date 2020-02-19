import React, { Component } from 'react';

export default class GiveStuffThirdForm extends Component {

    render() {
        return (
            <form>
                <label>
                    Lokalizacja
                    <select
                        value={this.props.location}
                        onChange={this.props.handleChange}
                        name="bags">
                        <option value="Poznań">Poznań</option>
                        <option value="Warszawa">Warszawa</option>
                        <option value="Kraków">Kraków</option>
                        <option value="Wrocław">Wrocław</option>
                        <option value="Katowice">Katowice</option>
                    </select>
                </label>
                <label className="radio">
                    <input
                        type="radio"
                        value="dzieciom"
                        name="whoHelp"
                        placeholder="dzieciom"
                        checked={this.props.whoHelp === 'dzieciom'}
                        onChange={this.props.handleChange} />
                        <span className="checkmark"></span>
                </label>
            </form>
        );
    }
}