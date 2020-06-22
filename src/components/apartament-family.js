import React from 'react';

export const ApartamentFamily = () => {
    return (
        <div class="apart-family">
            <div class="smart-content">
                <img width="600px" height="400px" src={require("../static/ap-3.jpg")} class="ap-type-img" alt="Apartament 3 camere" />
                <div class="vila-info premium-text">
                    <h3>Apartamentul Family</h3>
                    <p>
                        Design inteligent și spațiu perfect optimizat – apartamentul Premium te surpinde printr-un aspect
                        compact, cu posibilități nelimitate! Bucătărie,dormitor, living,dormitor reprezinta modelul preferat al
                        familiilor care își doresc o casă cu stil, pentru un buget prietenos.
            </p>
                    <ul>
                        <li>- Suprafata utila 70mp</li>
                        <li>- 2 Dormitoare</li>
                        <li>- 1 Bucatarie</li>
                        <li>- 1 Baie</li>
                        <li>- 1 Balcon</li>
                        <li>- 1 Logie</li>
                    </ul>
                    <span>53.900 - 60.000 €</span>
                    <div class="link-app">
                        <a href="https://planner5d.com/view/?key=1d138798f2faa3ecde7ce71c6462f522" target="_blank">Vizualizare
                    3D</a>
                        <a href={require("../static/ap-family.pdf")} target="_blank">Descarca Plan</a>
                    </div>
                </div>
            </div>
        </div>
    )
}