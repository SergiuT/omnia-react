import React, { useState, useEffect, lazy, Suspense } from 'react';
import './App.css';

import logo from './static/logo.png'
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { ApartamentSmart } from './components/apartament-smart.js';
import Spinner from './components/spinner.component';
import { ApartamentPremium } from './components/apartament-premium';
import { ApartamentFamily } from './components/apartament-family';
import { Demisol } from './components/demisol';
import { Mansarda } from './components/mansarda';
import { Etaj2 } from './components/etaj2';
import { Etaj1 } from './components/etaj1';
import { Parter } from './components/parter';
import { ApartamentModel } from './components/apartament-model';

const About = React.lazy(() => import('./components/about'));
const Houses = React.lazy(() => import('./components/houses'));
const Apartments = React.lazy(() => import('./components/apartments'));
const Contact = React.lazy(() => import('./components/contact'));
const Home = React.lazy(() => import('./components/home'));

const App = () => {
  const [status, changeStatus] = useState('top');

  useEffect(() => {
    document.addEventListener('scroll', e => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 50) {
        if (status !== 'down') {
          changeStatus('down')
        }
      } else {
        if (status !== 'top') {
          changeStatus('top');
        }
      }
    })
  })

  return (
    <div>
      <div class="elfsight-app-c0b0b683-6be4-4966-ae95-e831e9cccea9"></div>
      <Router>
        <div className="custom-navbar" style={{ backgroundColor: status === 'top' ? 'transparent' : 'rgba(243, 243, 243, 0.842)', transition: 'all .4s', height: status === 'top' ? '' : '60px' }}>
          <Link to='/'>
            <Helmet>
              <title>Omnia Residence | Acasa</title>
            </Helmet>
            <img
              src={logo}
              width={status === 'top' ? '100px' : '50px'}
              height={status === 'top' ? '100px' : '50px'}
              alt='Omnia Residence'
            />
          </Link>
          <ul
            className="custom-links custom-links-contact" style={{ borderBottom: status === 'top' ? '2px solid rgba(0, 0, 0, 0.8)' : 'none' }}
          >
            <li>
              <Link to='/'>Acasa</Link>
            </li>
            <li>
              <Link to='/despre-noi'>Despre noi</Link>
            </li>
            <li>
              <Link to='/apartamente'>Apartamente</Link>
            </li>
            <li>
              <Link to='/case'>Case</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <Link class="icon" onClick={() => {
            hambMenu()
          }} >
            <i style={{ color: 'black' }} className="fa fa-bars"></i>
          </Link>
        </div>
        <Suspense fallback={<Spinner/>}>
          <Switch>
            <Route exact path='/'>
              <Helmet>
                <title>Acasa | Omnia Residence</title>
              </Helmet>
              <Home />
            </Route>
            <Route path='/despre-noi'>
              <Helmet>
                <title>Despre noi | Omnia Residence</title>
              </Helmet>
              <About />
            </Route>
            <Route exact path='/apartamente'>
              <Helmet>
                <title>Apartamente | Omnia Residence</title>
              </Helmet>
              <Apartments />
            </Route>
            <Route path='/case'>
              <Helmet>
                <title>Case | Omnia Residence</title>
              </Helmet>
              <Houses />
            </Route>
            <Route path='/contact'>
              <Helmet>
                <title>Contact | Omnia Residence</title>
              </Helmet>
              <Contact />
            </Route>
            <Route path='/apartamente/apartament-smart'>
              <Helmet>
                <title>Apartament Smart | Omnia Residence</title>
              </Helmet>
              <ApartamentSmart />
            </Route>
            <Route path='/apartamente/apartament-premium'>
              <Helmet>
                <title>Apartament Premium | Omnia Residence</title>
              </Helmet>
              <ApartamentPremium />
            </Route>
            <Route path='/apartamente/apartament-family'>
              <Helmet>
                <title>Apartament Family | Omnia Residence</title>
              </Helmet>
              <ApartamentFamily />
            </Route>
            <Route exact path='/apartamente/mansarda'>
              <Helmet>
                <title>Mansarda | Omnia Residence</title>
              </Helmet>
              <Mansarda />
            </Route>
            <Route exact path='/apartamente/etaj-2'>
              <Helmet>
                <title>Etaj 2 | Omnia Residence</title>
              </Helmet>
              <Etaj2 />
            </Route>
            <Route exact path='/apartamente/etaj-1'>
              <Helmet>
                <title>Etaj 1 | Omnia Residence</title>
              </Helmet>
              <Etaj1 />
            </Route>
            <Route exact path='/apartamente/parter'>
              <Helmet>
                <title>Parter | Omnia Residence</title>
              </Helmet>
              <Parter />
            </Route>
            <Route exact path='/apartamente/demisol'>
              <Helmet>
                <title>Demisol | Omnia Residence</title>
              </Helmet>
              <Demisol />
            </Route>
            {/* Demisol ***************** */}
            <Route path='/apartamente/demisol/ap-4'>
              <Helmet>
                <title>Demisol Ap. 4 | Omnia Residence</title>
              </Helmet>
              <ApartamentModel 
                image='ap-1.jpg' 
                app='4' 
                etaj='Demisol' 
                pret='30.000 €'
                suprafata='40mp'
                camere='Bucatarie + Living open space'
                dormitoare='1 Dormitor'
                bai='1 Baie'
              />
            </Route>
            <Route path='/apartamente/demisol/ap-16'>
              <Helmet>
                <title>Demisol Ap. 16 | Omnia Residence</title>
              </Helmet>
              <ApartamentModel 
                image='ap-1.jpg' 
                app='16' 
                etaj='Demisol' 
                pret='30.000 €'
                suprafata='40mp'
                camere='Bucatarie + Living open space'
                dormitoare='1 Dormitor'
                bai='1 Baie'
              />
            </Route>
            <Route path='/apartamente/demisol/ap-17'>
              <Helmet>
                <title>Demisol Ap. 17 | Omnia Residence</title>
              </Helmet>
              <ApartamentModel 
                image='ap-2.jpg' 
                app='17' 
                etaj='Demisol' 
                pret='45.000 €'
                suprafata='60mp'
                camere='1 Bucatarie + 1 Living'
                dormitoare='1 Dormitor'
                bai='1 Baie'
              />
            </Route>
            {/* Parter ***************** */}
            <Route path='/apartamente/parter/ap-6'>
              <Helmet>
                <title>Parter Ap. 6 | Omnia Residence</title>
              </Helmet>
              <ApartamentModel 
                image='ap-3.jpg' 
                app='6' 
                etaj='Parter' 
                pret='59.500 €'
                suprafata='70mp'
                camere='1 Bucatarie + 1 Logie'
                dormitoare='2 Dormitoare'
                bai='1 Baie'
              />
            </Route>
            <Route path='/apartamente/parter/ap-5'>
              <Helmet>
                <title>Parter Ap. 5 | Omnia Residence</title>
              </Helmet>
              <ApartamentModel 
                image='ap-2.jpg' 
                app='5' 
                etaj='Parter' 
                pret='54.000 €'
                suprafata='60mp'
                camere='1 Bucatarie + 1 Living room'
                dormitoare='1 Dormitor'
                bai='1 Baie'
              />
            </Route>
            <Route path='/apartamente/parter/ap-20'>
              <Helmet>
                <title>Parter Ap. 20 | Omnia Residence</title>
              </Helmet>
              <ApartamentModel 
                image='ap-2.jpg' 
                app='20' 
                etaj='Parter' 
                pret='54.000 €'
                suprafata='60mp'
                camere='1 Bucatarie + 1 Living room'
                dormitoare='1 Dormitor'
                bai='1 Baie'
              />
            </Route>
            <Route path='/apartamente/parter/ap-4'>
              <Helmet>
                <title>Parter Ap. 4 | Omnia Residence</title>
              </Helmet>
              <ApartamentModel 
                image='ap-1.jpg' 
                app='4' 
                etaj='Parter' 
                pret='34.000 €'
                suprafata='40mp'
                camere='Bucatarie + Living open space'
                dormitoare='1 Dormitor'
                bai='1 Baie'
              />
            </Route>
            <Route path='/apartamente/parter/ap-19'>
              <Helmet>
                <title>Parter Ap. 19 | Omnia Residence</title>
              </Helmet>
              <ApartamentModel 
                image='ap-1.jpg' 
                app='19' 
                etaj='Parter' 
                pret='34.000 €'
                suprafata='40mp'
                camere='Bucatarie + Living open space'
                dormitoare='1 Dormitor'
                bai='1 Baie'
              />
            </Route>
            {/* Etaj 1 ***************** */}
            <Route path='/apartamente/etaj-1/ap-7'>
              <Helmet>
                <title>Etaj 1 Ap. 7 | Omnia Residence</title>
              </Helmet>
              <ApartamentModel 
                image='ap-1.jpg' 
                app='7' 
                etaj='Etaj-1' 
                pret='36.000 €'
                suprafata='40mp'
                camere='Bucatarie + Living open space'
                dormitoare='1 Dormitor'
                bai='1 Baie'
              />
            </Route>
            <Route path='/apartamente/etaj-1/ap-9'>
              <Helmet>
                <title>Etaj 1 Ap. 9 | Omnia Residence</title>
              </Helmet>
              <ApartamentModel 
                image='ap-3.jpg' 
                app='9' 
                etaj='Etaj-1' 
                pret='63.000 €'
                suprafata='70mp'
                camere='1 Bucatarie + 1 Logie'
                dormitoare='2 Dormitoare'
                bai='1 Baie'
              />
            </Route>
            <Route path='/apartamente/etaj-1/ap-24'>
              <Helmet>
                <title>Etaj 1 Ap. 24 | Omnia Residence</title>
              </Helmet>
              <ApartamentModel 
                image='ap-3.jpg' 
                app='24' 
                etaj='Etaj-1' 
                pret='63.000 €'
                suprafata='70mp'
                camere='1 Bucatarie + 1 Logie'
                dormitoare='2 Dormitoare'
                bai='1 Baie'
              />
            </Route>
            <Route path='/apartamente/etaj-1/ap-23'>
              <Helmet>
                <title>Etaj 1 Ap. 23 | Omnia Residence</title>
              </Helmet>
              <ApartamentModel 
                image='ap-2.jpg' 
                app='23' 
                etaj='Etaj-1' 
                pret='54.000 €'
                suprafata='60mp'
                camere='1 Bucatarie + 1 Living room'
                dormitoare='1 Dormitor'
                bai='1 Baie'
              />
            </Route>
            {/* Etaj 2 ***************** */}
            <Route path='/apartamente/etaj-2/ap-12'>
              <Helmet>
                <title>Etaj 2 Ap. 12 | Omnia Residence</title>
              </Helmet>
              <ApartamentModel 
                image='ap-3.jpg' 
                app='12' 
                etaj='Etaj-2' 
                pret='63.000 €'
                suprafata='70mp'
                camere='1 Bucatarie + 1 Logie'
                dormitoare='2 Dormitoare'
                bai='1 Baie'
              />
            </Route>
            <Route path='/apartamente/etaj-2/ap-27'>
              <Helmet>
                <title>Etaj 2 Ap. 27 | Omnia Residence</title>
              </Helmet>
              <ApartamentModel 
                image='ap-3.jpg' 
                app='27' 
                etaj='Etaj-2' 
                pret='63.000 €'
                suprafata='70mp'
                camere='1 Bucatarie + 1 Logie'
                dormitoare='2 Dormitoare'
                bai='1 Baie'
              />
            </Route>
            <Route path='/apartamente/etaj-2/ap-11'>
              <Helmet>
                <title>Etaj 2 Ap. 11 | Omnia Residence</title>
              </Helmet>
              <ApartamentModel 
                image='ap-2.jpg' 
                app='11' 
                etaj='Etaj-2' 
                pret='54.000 €'
                suprafata='60mp'
                camere='1 Bucatarie + 1 Living room'
                dormitoare='1 Dormitor'
                bai='1 Baie'
              />
            </Route>
            <Route path='/apartamente/etaj-2/ap-26'>
              <Helmet>
                <title>Etaj 2 Ap. 26 | Omnia Residence</title>
              </Helmet>
              <ApartamentModel 
                image='ap-2.jpg' 
                app='26' 
                etaj='Etaj-2' 
                pret='54.000 €'
                suprafata='60mp'
                camere='1 Bucatarie + 1 Living room'
                dormitoare='1 Dormitor'
                bai='1 Baie'
              />
            </Route>
            <Route path='/apartamente/etaj-2/ap-25'>
              <Helmet>
                <title>Etaj 2 Ap. 25 | Omnia Residence</title>
              </Helmet>
              <ApartamentModel 
                image='ap-1.jpg' 
                app='25' 
                etaj='Etaj-2' 
                pret='36.000 €'
                suprafata='40mp'
                camere='Bucatarie + Living open space'
                dormitoare='1 Dormitor'
                bai='1 Baie'
              />
            </Route>
            {/* Mansarda ***************** */}
            <Route path='/apartamente/mansarda/ap-15'>
              <Helmet>
                <title>Mansarda Ap. 15 | Omnia Residence</title>
              </Helmet>
              <ApartamentModel 
                image='ap-3.jpg' 
                app='15' 
                etaj='Mansarda' 
                pret='63.000 €'
                suprafata='70mp'
                camere='1 Bucatarie + 1 Logie'
                dormitoare='2 Dormitoare'
                bai='1 Baie'
              />
            </Route>
            <Route path='/apartamente/mansarda/ap-29'>
              <Helmet>
                <title>Mansarda Ap. 29 | Omnia Residence</title>
              </Helmet>
              <ApartamentModel 
                image='ap-2.jpg' 
                app='29' 
                etaj='Mansarda' 
                pret='54.000 €'
                suprafata='60mp'
                camere='1 Bucatarie + 1 Living room'
                dormitoare='1 Dormitor'
                bai='1 Baie'
              />
            </Route>
            <Route path='/apartamente/mansarda/ap-28'>
              <Helmet>
                <title>Mansarda Ap. 28 | Omnia Residence</title>
              </Helmet>
              <ApartamentModel 
                image='ap-1.jpg' 
                app='28' 
                etaj='Mansarda' 
                pret='36.000 €'
                suprafata='40mp'
                camere='Bucatarie + Living open space'
                dormitoare='1 Dormitor'
                bai='1 Baie'
              />
            </Route>
          </Switch>
        </Suspense>
        <div className="footer">
          <Link to='/' className="logo-footer">
            <img
              src={logo}
              width='150px'
              height='150px'
              alt='Omnia Residence'
            />
          </Link>
          <div className='footer-navs'>
            <div className="footer-info">
              <div className="info-1">
                <ul>
                  <li><a href={require("./static/Politica-Confidentialitate.pdf")} target="_blank">Politica de confidentialitate</a></li>
                  <li><a>Politica de utilizare cookies</a></li>
                </ul>
              </div>
            </div>
            <div className="navbar-footer">
              <ul>
                <li>
                  <Link to='/'>Acasa</Link>
                </li>
                <li>
                  <Link to='/despre-noi'>Despre noi</Link>
                </li>
                <li>
                  <Link exact to='/apartamente'>Apartamente</Link>
                </li>
                <li>
                  <Link to='/case'>Case</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </Router>
    </div>
  );
};

function hambMenu() {
  let x = document.getElementsByClassName('custom-links')

  if (x[0].style.display === "block") {
    x[0].style.display = "none";
  } else {
    x[0].style.display = "block";
  }
}

export default App;
