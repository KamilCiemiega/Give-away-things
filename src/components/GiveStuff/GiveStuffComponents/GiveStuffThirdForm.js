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
                        name="location">
                        <option value="Poznań">Poznań</option>
                        <option value="Warszawa">Warszawa</option>
                        <option value="Kraków">Kraków</option>
                        <option value="Wrocław">Wrocław</option>
                        <option value="Katowice">Katowice</option>
                    </select>
                </label>
                <label className="radio">
                    <input
                        name="whoHelp"
                        type="checkbox"
                        value="dzieciom"
                        checked={this.props.whoHelp === "dzieciom"}
                        onChange={this.props.handleChange} /> 
                        <span className="checkmark"></span>
                </label>
                <label className="radio">
                    <input
                        name="whoHelp"
                        type="checkbox"
                        value="samotnym matkom"
                        checked={this.props.whoHelp === "samotnym matkom"}
                        onChange={this.props.handleChange} /> 
                        <span className="checkmark"></span>
                </label>
                <label className="radio">
                    <input
                        name="whoHelp"
                        type="checkbox"
                        value="bezdomnym"
                        checked={this.props.whoHelp === "bezdomnym"}
                        onChange={this.props.handleChange} /> 
                        <span className="checkmark"></span>
                </label>
                <label className="radio">
                    <input
                        name="whoHelp"
                        type="checkbox"
                        value="niepełnosprawnym"
                        checked={this.props.whoHelp === "niepełnosprawnym"}
                        onChange={this.props.handleChange} /> 
                        <span className="checkmark"></span>
                </label>
                <label className="radio">
                    <input
                        name="whoHelp"
                        type="checkbox"
                        value="osobom starszym"
                        checked={this.props.whoHelp === "osobom starszym"}
                        onChange={this.props.handleChange} /> 
                        <span className="checkmark"></span>
                </label>
                <input 
                    type="text"
                    name="optional"
                    value={this.props.optional}
                    onChange={this.props.handleChange}
                />
                    
                
            </form>
        );
    }
}