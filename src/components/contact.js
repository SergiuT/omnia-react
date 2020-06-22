import React from 'react';
import MyMapComponent from './myMap';
import firebase from '../firebase/firebase.utils';
import axios from 'axios';
import * as emailjs from 'emailjs-com';

const mapStyles = {
    width: '90%',
    height: '90%',
}

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nume: '',
            email: '',
            mesaj: '',
            emailSent: false
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let formData = {
            'userName': this.state.nume,
            'userEmail': this.state.email,
            'userMessage': this.state.mesaj,
        }

        console.log(formData);
        

        firebase.database().ref('/').push(formData);
        // axios({
        //     method: "POST", 
        //     url:"http://localhost:3000/contact", 
        //     data:  formData
        //   }).then((response)=>{
        //     if (response.data.status === 'success'){
        //       alert("Message Sent"); 
        //       this.setState({
        //         nume: '',
        //         email: '',
        //         mesaj: ''
        //       });
        //     } else if(response.data.status === 'fail'){
        //       alert("Message failed to send.")
        //     }
        //   })
        let user_id = 'user_U4IWO5JNnfnqx9j3Q2eFY';
        let service_id = 'default_service';
        let template_id = 'omnia';

        emailjs.send(service_id, template_id, formData, user_id);

        this.setState({
            nume: '',
            email: '',
            mesaj: '',
            emailSent: !this.state.emailSent
        })
    }
    
    render() {
        return (
            <div class="contact">
                <div class="contact-content">
                    <MyMapComponent isMarkerShown lat={46.802681} lng={23.764006} />
                    <div class="sides">
                        <div class="left-side">
                            <h1>Trimite-ne un mesaj</h1>
                            <p>Programeaza o vizita la urmatoarea ta casa</p>
                            <form class="contact-form" action="/contact" method="POST" onSubmit={this.handleSubmit}>
                                <label for="nume">Nume<span>*</span></label>
                                <input value={this.state.nume} onChange={this.handleChange} type="text" name="nume" required />
                                <label for="email">Email<span>*</span></label>
                                <input value={this.state.email} onChange={this.handleChange} type="email" required name="email" />
                                <label for="textarea">Mesaj<span>*</span></label>
                                <textarea value={this.state.mesaj} onChange={this.handleChange} class="text-area" name="mesaj" cols="10" rows="10" required></textarea>
                                <div class="checkbox">
                                    <input type="checkbox" name="politica" id="politica" required />
                                    <label for="politica"><span>*</span> Am citit si sunt de acord cu <a>Politica de
                                    confidentialitate</a></label>
                                </div>
                                <button class="submit-button" type="submit">Trimite Mesaj</button>
                            </form>
                            {
                                this.state.emailSent 
                                && 
                                <p className="thank-you">
                                    Thank you for your message. We'll get in touch with you shortly!
                                </p>
                            }
                        </div>
                        <div class="right-side">
                            <div class="info-contact">
                                <h3>Adresa:</h3>
                                <p>Strada Octavian Paler Nr 2A, Apahida</p>
                                <p>Situat pe DN16, la iesirea spre Reghin, dupa trecerea de cale ferata</p>
                            </div>
                            <div class="info-contact">
                                <h3>Telefon:</h3>
                                <p>0726 499 900 / 0749 109 241</p>
                            </div>
                            <div class="info-contact">
                                <h3>Email:</h3>
                                <p>office@omniaresidence.ro</p>
                            </div>
                            <div class="info-contact">
                                <h3>Social:</h3>
                                <div class="icons-contact">
                                    <a href='https://www.facebook.com/omniaresidence/' target='_blank'>
                                        <i class="fab fa-facebook"></i>
                                    </a>
                                    <a href='https://www.instagram.com/omniaresidence/' target='_blank'>
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                    <a href='https://www.youtube.com/channel/UC4V8egweKW2cnZCjoGRajdQ' target='_blank'>
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Contact;