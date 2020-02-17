import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SectionTitle from '../../SectionTitle/SectionTitle';


class GiveStuffForm extends Component {
    state = {
        pageNr: 0
    }

    render(){
        return(
                <>
                    <h1>Zaznacz co chcesz oddać:</h1>
                    <Field name="stuff" component="input" type="radio" value="ubrania,które są do ponownego użycia" />
                    <Field name="stuff" component="input" type="radio" value="ubrania do wyrzucenia" />
                    <Field name="stuff" component="input" type="radio" value="zabawki" />
                    <Field name="stuff" component="input" type="radio" value="książki" />
                    <Field name="stuff" component="input" type="radio" value="inne" />
                </>
        );
    }
}

export default reduxForm({
    form: 'giveStuff-form'
})(GiveStuffForm)