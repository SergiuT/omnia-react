import React from 'react';
import { Link } from 'react-router-dom';

export const Mansarda = () => {
    return (
        <div className="etaj-section">
            <div className="etaj-content-mobile">
                <h2>Alegeti apartamentul dorit</h2>
                <svg width="700" height="501" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink">
                    <image href={require('../static/Mansarda-3D-mobile.jpg')} alt="Apartament Apahida" />
                    <Link to="/apartamente/mansarda/ap-15">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="22 21 10 146 90 145 94 17 92 26 67 25 63 20 22 21"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <polyline 
                        xmlns="http://www.w3.org/2000/svg" 
                        style={{stroke: 'transparent', fill: 'red'}} 
                        strokeWidth="1" id="apart-poly" 
                        points="96 19 93 91 128 90 128 78 199 78 201 19 94 18"
                    >
                            <title>VANDUT</title>
                    </polyline>
                    <polyline 
                        xmlns="http://www.w3.org/2000/svg" 
                        style={{stroke: 'transparent', fill: 'red'}} 
                        strokeWidth="1" id="apart-poly" 
                        points="128 77 125 148 202 148 200 77 129 78"
                    >
                            <title>VANDUT</title>
                    </polyline>
                    <Link to="/apartamente/mansarda/ap-28">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="201 78 202 151 279 149 274 79 200 79"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <Link to="/apartamente/mansarda/ap-29">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="201 18 200 82 274 79 274 91 312 91 308 18 201 19"
                        >
                            <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <polyline 
                        xmlns="http://www.w3.org/2000/svg" 
                        style={{stroke: 'transparent', fill: 'red'}} 
                        strokeWidth="1" id="apart-poly" 
                        points="308 24 312 147 392 147 377 18 307 23"
                    >
                        <title>VANDUT</title>
                    </polyline>
                </svg>
            </div>
            <div className="etaj-content">
                <h2>Alegeti apartamentul dorit</h2>
                <svg width="1100" height="501" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink">
                    <image href={require('../static/Mansarda-3D.jpg')} alt="Apartament Apahida" />
                    <Link to="/apartamente/mansarda/ap-15">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="61 44 44 207 21 207 6 339 19 346 29 346 26 389 244 388 259 56 180 57 173 46 60 44"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <polyline 
                        xmlns="http://www.w3.org/2000/svg" 
                        style={{stroke: 'transparent', fill: 'red'}} 
                        strokeWidth="1" id="apart-poly" 
                        points="258 36 248 235 351 233 351 208 551 209 552 39 529 38 530 19 378 18 377 36 257 36"
                    >
                            <title>VANDUT</title>
                    </polyline>
                    <polyline 
                        xmlns="http://www.w3.org/2000/svg" 
                        style={{stroke: 'transparent', fill: 'red'}} 
                        strokeWidth="1" id="apart-poly" 
                        points="350 209 340 400 348 409 349 446 461 444 461 413 554 413 551 209 349 209"
                    >
                            <title>VANDUT</title>
                    </polyline>
                    <Link to="/apartamente/mansarda/ap-28">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="551 209 551 411 645 413 645 448 750 450 754 440 753 412 759 402 752 208 552 208"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <Link to="/apartamente/mansarda/ap-29">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="551 38 550 210 753 210 753 236 854 236 841 38 724 38 722 19 571 19 572 37 551 38"
                        >
                            <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <polyline 
                        xmlns="http://www.w3.org/2000/svg" 
                        style={{stroke: 'transparent', fill: 'red'}} 
                        strokeWidth="1" id="apart-poly" 
                        points="844 58 845 58 923 59 931 47 1042 47 1057 210 1082 210 1094 344 1083 350 1072 350 1076 393 860 391 844 58"
                    >
                        <title>VANDUT</title>
                    </polyline>
                </svg>
            </div>
        </div>
    )
};

