import React from 'react';
import { Link } from 'react-router-dom';

export const Demisol = () => {
    return (
        <div className="etaj-section">
            <div className="etaj-content-mobile">
                <h1>Demisol</h1>
                <h2>Alegeti apartamentul dorit</h2>
                <svg width='700' height='500' xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink">
                    <image href={require('../static/Demisol-3D-mobile.jpg')} alt="Apartament Apahida" />
                    <polyline 
                        xmlns="http://www.w3.org/2000/svg" 
                        style={{stroke: 'transparent', fill: 'red'}} 
                        strokeWidth="1" id="apart-poly" 
                        points="17 8 5 137 83 135 90 12 60 12 58 8 16 8"
                    >
                            <title>VANDUT</title>
                    </polyline>
                    <polyline 
                        xmlns="http://www.w3.org/2000/svg" 
                        style={{stroke: 'transparent', fill: 'red'}} 
                        strokeWidth="1" id="apart-poly" 
                        points="90 5 86 79 125 81 125 69 199 69 199 7 89 6"
                    >
                            <title>VANDUT</title>
                    </polyline>
                    <Link to="/apartamente/demisol/ap-4">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="126 69 122 142 201 141 201 69 125 68"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <Link to="/apartamente/demisol/ap-16">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="201 71 200 143 281 141 276 69 200 70"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <Link to="/apartamente/demisol/ap-17">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="200 5 201 71 276 71 277 80 314 80 310 7 200 6 347 24"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <polyline 
                        xmlns="http://www.w3.org/2000/svg" 
                        style={{stroke: 'transparent', fill: 'red'}} 
                        strokeWidth="1" id="apart-poly" 
                        points="310 13 317 140 398 137 384 9 344 9 339 14 310 15"
                    >
                            <title>VANDUT</title>
                    </polyline>
                </svg>
            </div>
            <div className="etaj-content">
                <h1>Demisol</h1>
                <h2>Alegeti apartamentul dorit</h2>
                <svg width="1100" height="501" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink">
                    <image href={require('../static/Demisol-3D.jpg')} alt="Apartament Apahida" />
                    <polyline 
                        xmlns="http://www.w3.org/2000/svg" 
                        style={{stroke: 'transparent', fill: 'red'}} 
                        strokeWidth="1" id="apart-poly" 
                        points="45 21 160 21 169 35 252 36 233 379 7 380 44 21"
                    >
                            <title>VANDUT</title>
                    </polyline>
                    <polyline 
                        xmlns="http://www.w3.org/2000/svg" 
                        style={{stroke: 'transparent', fill: 'red'}} 
                        strokeWidth="1" id="apart-poly" 
                        points="248 15 237 218 344 218 344 190 551 190 552 16 249 16"
                    >
                            <title>VANDUT</title>
                    </polyline>
                    <Link to="/apartamente/demisol/ap-4">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="343 190 333 390 552 391 550 193 343 191"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <Link to="/apartamente/demisol/ap-16">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="551 191 551 392 769 392 757 190 551 191"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <Link to="/apartamente/demisol/ap-17">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="549 16 548 193 760 193 761 219 863 218 849 15 549 15"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <polyline 
                        xmlns="http://www.w3.org/2000/svg" 
                        style={{stroke: 'transparent', fill: 'red'}} 
                        strokeWidth="1" id="apart-poly" 
                        points="852 38 936 38 943 25 1059 26 1095 381 871 380 853 37"
                    >
                            <title>VANDUT</title>
                    </polyline>
                </svg>
            </div>
        </div>
    )
};

