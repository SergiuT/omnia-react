import React from 'react';

const Houses = () => {
    return (
        <div class="house-section">
            <div class="house-content">
                <div class="house-first-part">
                    <div class="image-wrapper">
                        <img width="550px" height="350px" class="image-1" src={require('../static/living.jpg')} alt="Living room" />
                        <img width="550px" height="350px" class="image-2" src={require('../static/living.jpg')} alt="Living room" />
                        <img width="550px" height="350px" class="image-3" src={require('../static/living.jpg')} alt="Living room" />
                        <img width="550px" height="350px" class="image-4" src={require('../static/living.jpg')} alt="Living room" />
                    </div>
                    <div class="vila-info">
                        <h2>Vila Omnia</h2>
                        <p>
                            Design inteligent și spațiu perfect optimizat – Vila Omnia te surpinde printr-un aspect compact, cu
                            posibilități nelimitate! Vila cu living și bucătărie open-space și două dormitoare la etaj e modelul
                            preferat al familiilor care își doresc o casă cu stil, pentru un buget prietenos.
                        </p>
                        <ul>
                            <li>- Suprafața utila 114 mp</li>
                            <li>- Suprafață teren 245 mp</li>
                            <li>- Gradina 130mp</li>
                            <li>- 3 Dormitoare</li>
                            <li>- Bucatarie + Living open space</li>
                            <li>- 2 Bai</li>
                            <li>- 2 Terase si 1 Garaj</li>
                        </ul>
                        <span>97.900€ (Prima casa/Credit ipotecar)</span>
                        <div class="link-app">
                            <a href={require('../static/Parter.pdf')} target="_blank">Descarca plan - Parter</a>
                            <a href={require('../static/Mansarda.pdf')} target="_blank">Descarca plan - Mansarda</a>
                        </div>
                    </div>
                </div>
                <div class="galerie">
                    <figure class="item-galerie item-1">
                        <img src={require('../static/case-1.jpg')} alt="Casa Apahida" class="img-galerie" />
                    </figure>
                    <figure class="item-galerie item-2">
                        <img src={require('../static/case-2.jpg')} alt="Casa Apahida" class="img-galerie" />
                    </figure>
                    <figure class="item-galerie item-3">
                        <img src={require('../static/case-3.jpg')} alt="Casa Apahida" class="img-galerie" />
                    </figure>
                    <figure class="item-galerie item-4">
                        <img src={require('../static/case-4.jpg')} alt="Casa Apahida" class="img-galerie" />
                    </figure>
                    <figure class="item-galerie item-5">
                        <img src={require('../static/case-5.jpg')} alt="Casa Apahida" class="img-galerie" />
                    </figure>
                    <figure class="item-galerie item-6">
                        <img src={require('../static/case-6.jpg')} alt="Casa Apahida" class="img-galerie" />
                    </figure>
                    <figure class="item-galerie item-7">
                        <img src={require('../static/case-7.jpg')} alt="Casa Apahida" class="img-galerie" />
                    </figure>
                    <figure class="item-galerie item-8">
                        <img src={require('../static/case-8.jpg')} alt="Casa Apahida" class="img-galerie" />
                    </figure>
                    <figure class="item-galerie item-9">
                        <img src={require('../static/case-9.jpg')} alt="Casa Apahida" class="img-galerie" />
                    </figure>
                    <figure class="item-galerie item-10">
                        <img src={require('../static/case-10.jpg')} alt="Casa Apahida" class="img-galerie" />
                    </figure>
                    <figure class="item-galerie item-11">
                        <img src={require('../static/case-11.jpg')} alt="Casa Apahida" class="img-galerie" />
                    </figure>
                    <figure class="item-galerie item-12">
                        <img src={require('../static/case-12.jpg')} alt="Casa Apahida" class="img-galerie" />
                    </figure>
                    <figure class="item-galerie item-13">
                        <img src={require('../static/case-13.jpg')} alt="Casa Apahida" class="img-galerie" />
                    </figure>
                    <figure class="item-galerie item-14">
                        <img src={require('../static/case-14.jpg')} alt="Casa Apahida" class="img-galerie" />
                    </figure>
                </div>
            </div>
        </div>
    )
};

export default Houses;