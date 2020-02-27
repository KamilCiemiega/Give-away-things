import React, { Component } from 'react';

export default class GiveStuffSummary extends Component {
    render() {
        const {
            selectedOption, bags, location, whoHelp, optional,
            street, city, zipCode, phoneNumber, data, hour, notes
        } = this.props
        return (
            <div className="summary__container flex">
                <h2>Podsumowanie twojej darowizny</h2>
                <div className="summary__container__give flex">
                    <h3>oddajesz:</h3>
                    <div className="summary__container__give__stuff flex">
                        <div className="summary__container__give__stuff__imgfirst"></div>
                        <span>{bags} worki {selectedOption} {whoHelp} {optional}</span>
                    </div>
                    <div className="summary__container__give__location flex">
                        <div className="summary__container__give__location__imgsecond"></div>
                        <span>dla lokalizacji: {location}</span>
                    </div>
                </div>
                <div className="summary__container__address flex">
                    <div className="summary__container__address__main flex">
                        <h3>Adres odbioru</h3>
                        <div className="summary__container__address__main__firstcolumn flex">
                            <div 
                            className="summary__container__address__main__firstcolumn__firstelement flex">
                                <span>Ulica:</span>
                                <span>Miasto:</span>
                                <span>Kod pocztowy:</span>
                                <span>Numer telefonu:</span>
                            </div>
                            <div 
                            className="summary__container__address__main__firstcolumn__secondelement flex">
                                <span><strong>{street}</strong></span>
                                <span><strong>{city}</strong></span>
                                <span><strong>{zipCode}</strong></span>
                                <span><strong>{phoneNumber}</strong></span>
                            </div>
                        </div>
                    </div>
                    <div className="summary__container__address__mainsecond flex">
                        <h3>Termin odbioru</h3>
                        <div className="summary__container__address__mainsecond__secondcolumn flex">
                            <div
                            className="summary__container__address__mainsecond__secondcolumn__firstelement flex">
                                <span>Data:</span>
                                <span>Godzina:</span>
                                <span>Uwagi dla kuriera:</span>
                            </div>
                            <div 
                            className="summary__container__address__mainsecond__secondcolumn__secondelement flex">
                                <span><strong>{data}</strong></span>
                                <span><strong>{hour}</strong></span>
                                <span><strong>{notes}</strong></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}