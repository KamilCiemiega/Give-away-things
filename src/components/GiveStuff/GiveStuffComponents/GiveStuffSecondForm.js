import React, { Component } from 'react';

class GiveStuffSecondForm extends Component {
    render() {
        return (
            <>
                <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
                <form>
                    <div className="form__component">
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
                    </div>
                </form>
            </>
        );
    }
}
export default GiveStuffSecondForm;