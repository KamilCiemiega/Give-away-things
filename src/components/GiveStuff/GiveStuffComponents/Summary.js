import React, { Component } from 'react';

export default class Summary extends Component {
    render(){
        const {bags} = this.props
        return(
            <div>
                <h2>Podsumowanie twojej darowizny</h2>
                <h3>oddajesz:</h3>
                <div>
                    <p>{bags}</p>
                </div>
            </div>
        );
    }
}