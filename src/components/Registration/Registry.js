import React, { Component } from 'react';
import HomeNavigation from '../Home/HomeComponents/HomeNavigation';


export default class Registry extends Component{
    render(){
        return(
            <>
               <HomeNavigation />
                <div className="registryPanel flex">
                    <div className="registryPanel__header flex">
                        <h2>Skontaktuj się z nami</h2>
                        <div className="registryPanel__header__img"></div>
                    </div>
                    <div className="form__container flex">
                        <form className="form__registry flex">
                            <label>Email</label>
                            <input
                                name='email'
                                type='email'
                                
                            ></input>
                            <label>Hasło</label>
                            <input
                                name='password'
                                type='password'
                                
                            ></input>
                            <label>Powórz hasło</label>
                            <input
                                name='password'
                                type='password'
                                
                            ></input>
                        </form>
                    </div>
                    <div className="registryPanel__butons flex">
                        <button>załuż konto</button>
                        <button>zaloguj się</button>
                    </div>
                </div>
            </>
        );
    }
    
}
