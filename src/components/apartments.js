import React from 'react';
import { Link } from 'react-router-dom';

const Apartments = () => {
    return (
        <section class="apartments">
            <div class="apartment-content">
                <div class="svg-content-mobile">
                    <h2>Alegeti etajul dorit</h2>
                    <svg width="320" height="300" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink">
                        <image href={require('../static/apartamente-mobile.jpg')} />
                        <Link to="/apartamente/mansarda">
                            <polyline xmlns="http://www.w3.org/2000/svg" style={{ stroke: 'transparent', fill: 'crimson' }} strokeWidth="0.38910505836575876" id="etaj-4" points="37.7432 80.4961 210.117 15.5156 264.202 62.2082 265.37 79.7179 211.284 41.5856 35.4086 95.6712 37.7432 80.4961" />
                        </Link>
                        <Link to="/apartamente/etaj-2">
                            <polyline xmlns="http://www.w3.org/2000/svg" style={{ stroke: 'transparent', fill: 'lime' }} strokeWidth="1"
                                id="etaj-3"
                                points="35.4086 96.0603 211.284 41.9747 261.09 78.1615 263.035 100.34 212.84 71.5467 33.8521 110.457 35.4086 96.0603">
                                <title>Etaj 3</title>
                            </polyline>
                        </Link>
                        <Link to="/apartamente/etaj-1">
                            <polyline xmlns="http://www.w3.org/2000/svg" style={{ stroke: 'transparent', fill: 'lightseagreen' }}
                                strokeWidth="1" id="etaj-3"
                                points="33 110 214 70 263 99 266 122 214 101 29 126 33 108">
                                <title>Etaj 2</title>
                            </polyline>
                        </Link>
                        <Link to="/apartamente/parter">
                            <polyline xmlns="http://www.w3.org/2000/svg" style={{ stroke: 'transparent', fill: 'crimson' }}
                                strokeWidth="2" id="etaj-3"
                                points="28.4047 127.189 24.9027 145.088 216.342 138.862 267.315 148.979 265.759 122.519 213.619 103.064 28.4047 127.189">
                                <title>Etaj 1</title>
                            </polyline>
                        </Link>
                        <Link to="/apartamente/demisol">
                            <polyline xmlns="http://www.w3.org/2000/svg" style={{ stroke: 'transparent', fill: 'royalblue' }}
                                strokeWidth="2" id="etaj-3"
                                points="24.5136 145.866 21.4008 162.597 217.51 172.325 251.362 173.492 264.981 149.757 215.953 140.418 24.5136 145.866">
                                <title>Parter</title>
                            </polyline>
                        </Link>
                    </svg>
                </div>
                <div class="svg-content">
                    <h2>Alegeti etajul dorit</h2>
                    <svg width="1100" height="642" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink">
                        <image href={require('../static/apartamente-croped.jpg')} />
                        <Link to="/apartamente/mansarda">
                            <polyline xmlns="http://www.w3.org/2000/svg" style={{ stroke: 'transparent', fill: 'mediumvioletred' }}
                                strokeWidth="1" id="etaj-3"
                                points="138.609 292.392 130.609 346.392 774.609 148.392 952.609 282.392 942.609 210.392 770.609 55.3924 137.609 292.392">
                                <title>Mansarda</title>
                            </polyline>
                        </Link>
                        <Link to="/apartamente/etaj-2">
                            <polyline xmlns="http://www.w3.org/2000/svg" style={{ stroke: 'transparent', fill: 'lime' }} strokeWidth="1"
                                id="etaj-3"
                                points="130.542 346.668 118.542 404.668 780.542 258.668 962.542 362.668 952.542 284.668 774.542 150.668 130.542 346.668">
                                <title>Etaj 2</title>
                            </polyline>
                        </Link>
                        <Link to="/apartamente/etaj-1">
                            <polyline xmlns="http://www.w3.org/2000/svg" style={{ stroke: 'transparent', fill: 'lightseagreen' }}
                                strokeWidth="1" id="etaj-3"
                                points="118.751 405.62 103.751 468.62 786.751 375.62 973.751 454.62 961.751 362.62 780.751 259.62 118.751 404.62">
                                <title>Etaj 1</title>
                            </polyline>
                        </Link>
                        <Link to="/apartamente/parter">
                            <polyline xmlns="http://www.w3.org/2000/svg" style={{ stroke: 'transparent', fill: 'crimson' }}
                                strokeWidth="2" id="etaj-3"
                                points="104.606 469.444 88.6057 531.444 794.606 511.444 976.606 547.444 970.606 455.444 784.606 379.444 104.606 469.444">
                                <title>Parter</title>
                            </polyline>
                        </Link>
                        <Link to="/apartamente/demisol">
                            <polyline xmlns="http://www.w3.org/2000/svg" style={{ stroke: 'transparent', fill: 'royalblue' }}
                                strokeWidth="2" id="etaj-3"
                                points="88 534.333 76 590.333 800 630.333 926 638.333 974 546.333 792 512.333 88 534.333">
                                <title>Demisol</title>
                            </polyline>
                        </Link>
                    </svg>
                </div>
                <div class="card-container">
                    <div class="card">
                        <div class="card__side card__side--front">
                            <div class="card__picture card__picture--1"></div>
                            <h4 class="card__heading"><span class="card__heading-span card__heading-span--1">Apartament
                            Smart</span>
                            </h4>
                            <div class="card__details">
                                <ul>
                                    <li>1 Camera</li>
                                    <li>Suprafata 40mp</li>
                                    <li>Dormitoare 1</li>
                                    <li>Bai 1</li>
                                    <li>Bucatarie + Living</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card__side card__side--back card__side--back-2">
                            <div class="card__cta">
                                <div class="card__price-box">
                                    <p class="card__price-only">De la</p>
                                    <p class="card__price-value">30.800 €</p>
                                </div>
                                <Link to="/apartamente/apartament-smart" class="rezerva-button">Mai mult</Link>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card__side card__side--front">
                            <div class="card__picture card__picture--2"></div>
                            <h4 class="card__heading"><span class="card__heading-span card__heading-span--2">Apartament
                            Premium</span>
                            </h4>
                            <div class="card__details">
                                <ul>
                                    <li>2 Camere</li>
                                    <li>Suprafata 60mp</li>
                                    <li>Dormitoare 1</li>
                                    <li>Living 1</li>
                                    <li>Bucatarie 1</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card__side card__side--back card__side--back-3">
                            <div class="card__cta">
                                <div class="card__price-box">
                                    <p class="card__price-only">De la</p>
                                    <p class="card__price-value">46.000 €</p>
                                </div>
                                <Link to="/apartamente/apartament-premium" class="rezerva-button">Mai mult</Link>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card__side card__side--front">
                            <div class="card__picture card__picture--3"></div>
                            <h4 class="card__heading"><span class="card__heading-span card__heading-span--3">Apartament
                            Family</span>
                            </h4>
                            <div class="card__details">
                                <ul>
                                    <li>3 Camere</li>
                                    <li>Suprafata 70mp</li>
                                    <li>Dormitoare 2</li>
                                    <li>Bucatarie 1</li>
                                    <li>Bai 1</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card__side card__side--back card__side--back-1">
                            <div class="card__cta">
                                <div class="card__price-box">
                                    <p class="card__price-only">De la</p>
                                    <p class="card__price-value">53.900 €</p>
                                </div>
                                <Link to="/apartamente/apartament-family" class="rezerva-button">Mai mult</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Apartments;