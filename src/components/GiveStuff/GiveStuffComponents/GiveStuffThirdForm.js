import React, { Component } from 'react';

export default class GiveStuffThirdForm extends Component {

    state = {
        active: false
    }

    toggleClass = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        return (
            <form className="third__container flex">
                <h2>Lokalizacja:</h2>
                <div className="choose__box flex">
                    <div
                        className={`option__main ${this.state.active ? 'active' : null}`}>
                        <div className={`option ${this.state.active ? 'active' : null}`}
                            onClick={this.toggleClass}>
                            <input
                                className="radio"
                                type="radio"
                                value="Poznań"
                                name="location"
                                onChange={this.props.handleChange} />
                            <label>Poznań</label>
                        </div>
                        <div
                            className={`option ${this.state.active ? 'active' : null}`}
                            onClick={this.toggleClass}>
                            <input
                                className="radio"
                                type="radio"
                                value="Warszawa"
                                name="location"
                                onChange={this.props.handleChange} />
                            <label>Warszawa</label>
                        </div>
                        <div className={`option ${this.state.active ? 'active' : null}`}
                            onClick={this.toggleClass}>
                            <input
                                className="radio"
                                type="radio"
                                value="Kraków"
                                name="location"
                                onChange={this.props.handleChange} />
                            <label>Kraków</label>
                        </div>
                        <div className={`option ${this.state.active ? 'active' : null}`}
                            onClick={this.toggleClass}>
                            <input
                                className="radio"
                                type="radio"
                                value="Wrocław"
                                name="location"
                                onChange={this.props.handleChange} />
                            <label>Wrocław</label>
                        </div>
                        <div className={`option ${this.state.active ? 'active' : null}`}
                            onClick={this.toggleClass}>
                            <input
                                className="radio"
                                type="radio"
                                value="Katowice"
                                name="location"
                                onChange={this.props.handleChange} />
                            <label>Katowice</label>
                        </div>
                    </div>
                    <div className="selected" onClick={this.toggleClass}>
                        -- wybierz --
                    </div>
                </div>
                {/* komu chcesz pomoć*/}
                <div className="third__container__help flex">
                <h3>Komu chcesz pomóc</h3>
                <div className="third__container__help__main">
                <label className="checkbox">
                    <input
                        name="whoHelp"
                        type="checkbox"
                        value="dzieciom"
                        checked={this.props.whoHelp === "dzieciom"}
                        onChange={this.props.handleChange} />
                    <span className="checkmark">dzieciom</span>
                </label>
                <label className="checkbox">
                    <input
                        name="whoHelp"
                        type="checkbox"
                        value="samotnym matkom"
                        checked={this.props.whoHelp === "samotnym matkom"}
                        onChange={this.props.handleChange} />
                    <span className="checkmark">samotnym matkom</span>
                </label>
                <label className="checkbox">
                    <input
                        name="whoHelp"
                        type="checkbox"
                        value="bezdomnym"
                        checked={this.props.whoHelp === "bezdomnym"}
                        onChange={this.props.handleChange} />
                    <span className="checkmark">bezdomnym</span>
                </label>
                </div>
                <div className="third__container__help__main">
                <label className="checkbox">
                    <input
                        name="whoHelp"
                        type="checkbox"
                        value="niepełnosprawnym"
                        checked={this.props.whoHelp === "niepełnosprawnym"}
                        onChange={this.props.handleChange} />
                    <span className="checkmark">niepełnosprawnym</span>
                </label>
                <label className="checkbox">
                    <input
                        name="whoHelp"
                        type="checkbox"
                        value="osobom starszym"
                        checked={this.props.whoHelp === "osobom starszym"}
                        onChange={this.props.handleChange} />
                    <span className="checkmark">osobom starszym</span>
                </label>
                </div>
                <h3>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                <input
                    className="text"
                    type="text"
                    name="optional"
                    value={this.props.optional}
                    onChange={this.props.handleChange}
                />
                </div>
            </form>
        );
    }
}