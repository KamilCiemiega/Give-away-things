import React, { Component } from 'react';

class GiveStuffSecondForm extends Component {
    state = {
        active: false
    }

    toggleClass = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        return (
            <>
                <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
                <div className="select__box flex">
                    <div
                        className={`option__container ${this.state.active ? 'active' : null}`}>
                        <div className={`option ${this.state.active ? 'active' : null}`}
                            onClick={this.toggleClass}>
                            <input
                                className="radio"
                                type="radio"
                                value="1"
                                name="bags"
                                onChange={this.props.handleChange} />
                            <label>1</label>
                        </div>
                        <div
                            className={`option ${this.state.active ? 'active' : null}`}
                            onClick={this.toggleClass}>
                            <input
                                className="radio"
                                type="radio"
                                value="2"
                                name="bags"
                                onChange={this.props.handleChange} />
                            <label>2</label>
                        </div>
                        <div className={`option ${this.state.active ? 'active' : null}`}
                            onClick={this.toggleClass}>
                            <input
                                className="radio"
                                type="radio"
                                value="3"
                                name="bags"
                                onChange={this.props.handleChange} />
                            <label>3</label>
                        </div>
                        <div className={`option ${this.state.active ? 'active' : null}`}
                            onClick={this.toggleClass}>
                            <input
                                className="radio"
                                type="radio"
                                value="4"
                                name="bags"
                                onChange={this.props.handleChange} />
                            <label>4</label>
                        </div>
                        <div className={`option ${this.state.active ? 'active' : null}`}
                            onClick={this.toggleClass}>
                            <input
                                className="radio"
                                type="radio"
                                value="5"
                                name="bags"
                                onChange={this.props.handleChange} />
                            <label>5</label>
                        </div>
                    </div>
                    <div className="selected" onClick={this.toggleClass}>
                        Liczba 60 worków
                    </div>
                </div>
            </>
        );
    }
}
export default GiveStuffSecondForm;