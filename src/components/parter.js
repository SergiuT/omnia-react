import React from 'react';
import { Link } from 'react-router-dom';

export const Parter = () => {
    return (
        <div className="etaj-section">
            <div className="etaj-content-mobile">
                <h2>Alegeti apartamentul dorit</h2>
                <svg width="700" height="501" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink">
                    <image href={require('../static/Parter-3D-mobile.jpg')} alt="Apartament Apahida" />
                    <Link to="/apartamente/parter/ap-6">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="23 16 11 141 89 139 94 19 65 20 61 16 24 16"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <Link to="/apartamente/parter/ap-5">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="94 13 90 85 127 83 127 74 202 75 200 14 93 13"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <Link to="/apartamente/parter/ap-4">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="127 75 125 145 202 144 201 75 126 76"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <Link to="/apartamente/parter/ap-19">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="200 76 200 145 277 145 274 76 199 75"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <Link to="/apartamente/parter/ap-20">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="200 15 200 76 274 75 274 87 312 87 306 14 200 16"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <polyline 
                        xmlns="http://www.w3.org/2000/svg" 
                        style={{stroke: 'transparent', fill: 'red'}} 
                        strokeWidth="1" id="apart-poly" 
                        points="307 21 313 144 393 142 390 123 398 123 393 78 386 77 378 17 339 18 333 23 307 22"
                    >
                            <title>VANDUT</title>
                    </polyline>
                </svg>
            </div>
            <div className="etaj-content">
                <h2>Alegeti apartamentul dorit</h2>
                <svg width="1100" height="501" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink">
                    <image href={require('../static/Parter-3D.jpg')} alt="Apartament Apahida" />
                    <Link to="/apartamente/parter/ap-6">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="60 43 44 208 20 208 7 341 18 346 31 345 26 388 243 388 260 57 181 58 170 44 60 43"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <Link to="/apartamente/parter/ap-5">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="258 36 247 235 351 233 351 207 552 209 551 38 529 39 529 19 379 19 378 36 257 36"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <Link to="/apartamente/parter/ap-4">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="350 208 350 207 340 399 553 399 551 208 348 207"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <Link to="/apartamente/parter/ap-19">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="550 207 550 400 761 398 751 207 550 207"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <Link to="/apartamente/parter/ap-20">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="551 38 550 209 752 209 753 236 854 236 840 38 723 38 724 19 572 20 571 36 552 37 551 37"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <polyline 
                        xmlns="http://www.w3.org/2000/svg" 
                        style={{stroke: 'transparent', fill: 'red'}} 
                        strokeWidth="1" id="apart-poly" 
                        points="843 60 861 394 1078 394 1072 347 1094 346 1081 210 1057 210 1042 48 933 48 922 61 844 60"
                    >
                            <title>VANDUT</title>
                    </polyline>
                </svg>
            </div>
        </div>
    )
};