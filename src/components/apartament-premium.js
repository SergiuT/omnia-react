import React from 'react';

export const ApartamentPremium = () => {
    return (
        <div class="apart-premium">
            <div class="premium-content">
                <img width="600px" height="400px" class="ap-type-img" src={require('../static/ap-2.jpg')}
                    alt="Apartament 2 camere Apahida" />
                <div class="vila-info premium-text">
                    <h3>Apartamentul Premium</h3>
                    <p>
                        Design inteligent și spațiu perfect optimizat – apartamentul Premium te surpinde printr-un aspect
                        compact, cu posibilități nelimitate! Bucătărie,dormitor, living,dormitor reprezinta modelul preferat al
                        familiilor care își doresc o casă cu stil, pentru un buget prietenos.
                    </p>
                    <ul>
                        <li>- Suprafata utila 60mp</li>
                        <li>- 1 Dormitor</li>
                        <li>- 1 Living</li>
                        <li>- 1 Bucatarie</li>
                        <li>- 1 Baie</li>
                        <li>- 1 Balcon</li>
                        <li>- Loc de parcare exterior - 2000 €</li>
                    </ul>
                    <span>46.000 - 54.000 €</span>
                    <div class="link-app">
                        <a href="https://planner5d.com/view/?key=0f24059cf57a36b5c952278cb1f1ce81" target="_blank">Vizualizare
                    3D</a>
                        <a href={require("../static/ap-premium.pdf")} target="_blank">Descarca Plan</a>
                    </div>
                </div>
            </div>
        </div>
    )
}