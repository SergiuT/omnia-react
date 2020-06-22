import React from 'react';

export const ApartamentSmart = () => {
    return (
        <div class="apart-smart">
            <div class="smart-content">
                <img width="600px" height="400px" src={require('../static/ap-1.jpg')} class="ap-type-img" alt="Apartament 2 camere" />
                <div class="vila-info premium-text">
                    <h3>Apartamentul Smart</h3>
                    <p>
                        Design inteligent și spațiu perfect optimizat – apartamentul Premium te surpinde printr-un aspect
                        compact, cu posibilități nelimitate! Bucătărie,dormitor, living,dormitor reprezinta modelul preferat al
                        familiilor care își doresc o casă cu stil, pentru un buget prietenos.
                    </p>
                    <ul>
                        <li>- Suprafata utila 40mp</li>
                        <li>- 1 Dormitor</li>
                        <li>- Bucatarie + Living open space</li>
                        <li>- 1 Baie</li>
                        <li>- 1 Balcon</li>
                        <li>- Loc de parcare exterior - 2000 €</li>
                    </ul>
                    <span>30.800 - 36.000 €</span>
                    <div class="link-app">
                        <a href="https://planner5d.com/view/?key=0f24059cf57a36b5c952278cb1f1ce81" target="_blank">Vizualizare
                    3D</a>
                        <a href={require("../static/ap-smart.pdf")} target="_blank">Descarca Plan</a>
                    </div>
                </div>
            </div>
        </div>
    )
}