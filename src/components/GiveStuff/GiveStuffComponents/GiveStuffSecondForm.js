import React, { Component } from 'react';

class GiveStuffSecondForm extends Component {
    render() {
        return (
            <>
            <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
            <form>
                <label>
                Liczba 60l worków
                    <select
                        value={this.props.bags}
                        onChange={this.props.handleChange}
                        name="bags">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>
            </form>
            </>
        );
    }
}
export default GiveStuffSecondForm;