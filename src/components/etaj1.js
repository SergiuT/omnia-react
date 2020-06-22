import React from 'react';
import { Link } from 'react-router-dom';

export const Etaj1 = () => {
    return (
        <div className="etaj-section">
            <div className="etaj-content-mobile">
                <h2>Alegeti apartamentul dorit</h2>
                <svg width="700" height="501" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink">
                    <image href={require('../static/Etaj-1&2-3D-mobile.jpg')} alt="Apartament Apahida" />
                    <Link to="/apartamente/etaj-1/ap-9">
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
                    <Link to="/apartamente/etaj-1/ap-7">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="128 77 125 148 202 148 200 77 129 78"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <polyline 
                        xmlns="http://www.w3.org/2000/svg" 
                        style={{stroke: 'transparent', fill: 'red'}} 
                        strokeWidth="1" id="apart-poly" 
                        points="201 78 202 151 279 149 274 79 200 79"
                    >
                            <title>VANDUT</title>
                    </polyline>
                    <Link to="/apartamente/etaj-1/ap-23">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="201 18 200 82 274 79 274 91 312 91 308 18 201 19"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <Link to="/apartamente/etaj-1/ap-24">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="308 24 312 147 392 147 377 18 307 23"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                </svg>
            </div>
            <div className="etaj-content">
                <h2>Alegeti apartamentul dorit</h2>
                <svg width="1100" height="501" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink">
                    <image href={require('../static/Etaj-1&2-3D.jpg')} alt="Apartament Apahida" />
                    <Link to="/apartamente/etaj-1/ap-9">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="60.3121 54.7229 173.312 55.7229 179.312 65.7229 255.312 67.7229 263.312 67.7229 254.312 246.723 245.312 403.723 25.3121 401.723 30.3121 348.723 8.31207 349.723 20.3121 216.723 45.3121 216.723 60.3121 52.7229"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <polyline 
                        xmlns="http://www.w3.org/2000/svg" 
                        style={{stroke: 'transparent', fill: 'red'}} 
                        strokeWidth="1" id="apart-poly" 
                        points="248.851 244.472 260.851 47.4722 376.851 47.4722 379.851 29.4722 528.851 29.4722 528.851 46.4722 549.851 46.4722 550.851 219.472 348.851 218.472 348.851 243.472 248.851 242.472"
                    >
                            <title>VANDUT</title>
                    </polyline>
                    <Link to="/apartamente/etaj-1/ap-7">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="348 218 336 413 348 424 348 457 461 455 460 422 553 422 550 219 348 219"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <polyline 
                        xmlns="http://www.w3.org/2000/svg" 
                        style={{stroke: 'transparent', fill: 'red'}} 
                        strokeWidth="1" id="apart-poly" 
                        points="552 219 556 423 643 423 644 458 752 458 753 419 761 420 752 218 553 219"
                    >
                            <title>VANDUT</title>
                    </polyline>
                    <Link to="/apartamente/etaj-1/ap-23">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="550 48 551 221 750 219 750 249 855 246 855 244 841 50 726 49 723 29 572 30 573 49 550 48"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                    <Link to="/apartamente/etaj-1/ap-24">
                        <polyline 
                            xmlns="http://www.w3.org/2000/svg" 
                            style={{stroke: 'transparent', fill: 'green'}} 
                            strokeWidth="1" id="apart-poly" 
                            points="841 67 858 405 1076 404 1073 354 1095 353 1080 219 1058 220 1042 57 930 57 921 71 848 71 846 47 837 47 839 70"
                        >
                                <title>DISPONIBIL</title>
                        </polyline>
                    </Link>
                </svg>
            </div>
        </div>
    )
};

