import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="homepage">
                <div className="content">
                    <div className="text">
                        <div className="mobile-txt">
                            <h1>Casa visurilor tale,</h1>
                            <h1>mai aproape decat crezi!</h1>
                        </div>
                        <div className="mobile-butt">
                            <Link to="/case" className="home-button">
                                Vezi locuinte
                            </Link>
                            <div className="icons">
                                <a href='https://www.facebook.com/omniaresidence/' target='_blank'>
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href='https://www.instagram.com/omniaresidence/' target='_blank'>
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href='https://www.youtube.com/channel/UC4V8egweKW2cnZCjoGRajdQ' target='_blank'>
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="video">
                        <video width="440px" height="270px" id="vid" muted controls autoPlay loop>
                            <source muted src={require('../static/hero-video-1.mp4')} type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>
                    </div>
                </div>
            </div>
            <div className="sold-status">
                <img src={require('../static/real-estate.png')} width="100px" height="100px" alt="Case vandute Apahida" />
                <div className="data-container">
                    <div className="count-1">22</div>
                    <p>Case vandute</p>
                </div>
                <div className="data-container">
                    <div className="count-2">2</div>
                    <p>Case disponibile</p>
                </div>
                <div className="data-container">
                    <div className="count-1">120</div>
                    <p>Apartamente vandute</p>
                </div>
                <div className="data-container">
                    <div className="count-2">30</div>
                    <p>Apartamente disponibile</p>
                </div>
                <img src={require('../static/apartment.png')} width="100px" height="100px" alt="Apartmente vandute Apahida" />
            </div>
            <div className="apartment-picture">
                <Link className="buton-apartamente" to="/apartamente">Apartamente</Link>
            </div>
            <div className="vila-picture">
                <Link className="buton-apartamente" to="/case">Vila Omnia</Link>
            </div>
            <div className="info">
                <div>
                    <h1 className="title">Clujul la fereastra ta</h1>
                </div>
                <div className="info-content">
                    <div className="info-text">
                        <h1>
                            Ai visat vreodata un loc cald si primitor unde sa te poti relaxa dupa o zi obositoare de munca?
                        </h1>
                        <p>
                            Ferit de zgomotul orasului, dotat cu facilitatile unei zone rezidentiale moderne, dar si cu propriul sau
                            parc verde, Omnia Residence este o oaza de liniste si de confort pentru toti locuitorii sai...

                        </p>
                        <a href="/despre-noi" className="learn-more">Afla mai multe</a>
                    </div>
                    <div className="info-pictures">
                        <div className="hex">
                            <img src={require('../static/house-1.jpg')} alt="Casa Apahida" />
                        </div>
                        <div className="hex">
                            <img src={require('../static/house-2.jpg')} alt="Casa Apahida" />
                        </div>
                        <div className="hex">
                            <img src={require('../static/house-3.jpg')} alt="Apartament Apahida" />
                        </div>
                        <div className="hex">
                            <img src={require('../static/house-4.JPG')} alt="Vila Apahida" />
                        </div>
                        <div className="hex">
                            <img src={require('../static/house-5.jpg')} alt="Casa Apahida" />
                        </div>
                        <div className="hex">
                            <img src={require('../static/case-4.jpg')} alt="Casa Apahida" />
                        </div>
                        <div className="hex">
                            <img src={require('../static/house-7.jpg')} alt="Casa Apahida" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;