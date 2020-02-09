import React, {Component} from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';


export default class HomeContactForm extends Component {

    state = {
       name:"",
       email:"",
       message:"",
       isNameOk:true,
       isEmailOk:true,
       isMessageOk:true,
       dataStatus:""
    }

    validate = (e) =>{
        e.preventDefault();
        const isNameOk =  this.handleChangeName(this.state.name)
        const isEmailOk =  this.handleChangeEmail(this.state.email)
        const isMessageOk =  this.handleChangeEmail(this.state.message)

        if(isNameOk !== true){
            this.setState({isNameOk:false})
        }
        if(isEmailOk !== true){
            this.setState({isEmailOk:false})
        }
        if(isMessageOk !== true){
            this.setState({isMessageOk:false})
        }
        this.sendData()
    }

    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleChangeName = (name) => {
        if (/\s/.test(name) || name.length <= 0) {
            return false
        }
        return true
    }
    handleChangeMessage = (message) => {
        if(test(message) < 120) return false
        return true
    }
    
    handleChangeEmail = (email) =>{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);  
    }

    sendData = () => {
        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                email:this.state.email,
                message:this.state.message                
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.status === 'success') {
                //tutaj akcja jak bedzie success
                this.setState({
                    dataStatus:data.status 
                })
            } else {
                // tutaj obsluga bledu
                this.setState({
                    dataStatus:data.status 
                })
            }
        })
    }


    render(){
        return(
            <div name="contact" className="contact flex">
                <div className="contact__empty"></div>
                <div className="contact__form">
                    <div className="contact__form__header flex">
                    <SectionTitle title="Skontaktuj się z nami"/>
                    {this.state.dataStatus === "success" && <div className="success">Wiadomość zostałą wysłana! wkrótce się skontaktujemy</div> }
                    </div>
                    <form className="flex" onSubmit={this.validate}>
                        <div className="nameEmail flex">
                            <div className="nameEmail__first">
                                <label>Wpisz swoje imię</label>
                                <input
                                    name="name"
                                    value={this.state.name}
                                    type="text" 
                                    placeholder="Krzysztof"
                                    onChange={this.handleChange}
                                ></input>
                                {this.state.isNameOk ? "" : <div className="error">Podane imię jest nieprawidłowe </div> }
                            </div>
                            <div className="nameEmail__second">
                                <label>Wpisz swój email</label>
                                <input
                                    name="email"
                                    value={this.state.email} 
                                    type="email" 
                                    placeholder="Krzysztof@xyz.com"
                                    onChange={this.handleChange}
                                    ></input>
                                    {this.state.isEmailOk ? "" : <div className="error">Podane email jest nieprawidłowy </div> }

                            </div>
                        </div>
                        <div className="msg flex">
                            <label>Wpisz swoją wiadomość</label>
                            <textarea 
                                placeholder="sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur 
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et accusantium sunt nihil reiciendis at 
                                fugiat neque harum pariatur similique fugit voluptatem, unde sit incidunt."
                                name="message"
                                value={this.state.message} 
                                type="message"
                                onChange={this.handleChange}>
                            </textarea>
                            {this.state.isMessageOk ? "" : <div className="error">Podana wiadomość jest za krótka</div> }
                        </div>
                        <input className="submit" value="Wyślij" type="submit" onClick={this.validate}></input>
                    </form>
                </div>
            </div>
        );
    }
}