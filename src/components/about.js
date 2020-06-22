import React from 'react';

const About = () => {
    return (
        <div class="about">
            <div class="about-content">
                <h2>Omnia Residence</h2>
                <p>
                    Compania noastra este unul dintre cei mai mari dezvoltatori imobiliari din Apahida, cu un istoric de
                    referință în domeniul proiectelor rezidențiale. Compania poartă amprenta unui spirit european prin
                    specificul unui parteneriat româno-irlandez care ne susține să construim si sa traim in spirit
                    occidental.Omnia Residence este un dezvoltator cu experiență pe piața imobiliară clujeana, fiind activ din
                    2008, când primele proiecte de construcții rezidențiale au prins contur.
                    Astăzi, Omnia Residence deține un portofoliu imobiliar cu perspectivă, întrucât a dezvoltat un ansamblu
                    rezidențial european format din 12 blocuri, 20 case (Apahida ) aflate într-o continuă dezvoltare.
                </p>
                <div class="valori">
                    <h3>Valorile noastre</h3>
                    <div class="valori-map">
                        <div class="icon-valori">
                            <div class="icon-1">
                                <img width="30px" height="30px" src={require('../static/vegetable.png')} alt="Producator local" />
                                <p> - Mancare de la producatorii locali din Apahida</p>
                            </div>
                            <div class="icon-1">
                                <img width="30px" height="30px" src={require('../static/shield.png')} alt="Siguranta" />
                                <p> - Siguranta si comoditate oferita de strada privata</p>
                            </div>
                            <div class="icon-1">
                                <img width="30px" height="30px" src={require('../static/gym.png')} alt="Sala Fitness" />
                                <p> - Sala de fitness, centru de spa si parc de joaca pentru copii</p>
                            </div>
                            <div class="icon-1">
                                <img width="30px" height="30px" src={require('../static/ribbon.png')} alt="Garantie 10 ani" />
                                <p> - Garantie de 10 ani a lucrarilor</p>
                            </div>
                            <div class="icon-1">
                                <img width="30px" height="30px" src={require('../static/bed.png')} alt="Garantie 10 ani" />
                                <p> - Confort ambiental si calitate </p>
                            </div>
                            <div class="icon-1">
                                <img width="30px" height="30px" src={require('../static/park.png')} alt="Garantie 10 ani" />
                                <p> - Susteinabilitate prin spatii verzi si case cu gradina </p>
                            </div>
                        </div>
                        <img className="despre-noi-poza" src={require('../static/despre-noi.jpg')} alt="Vila Apahida 2020" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;