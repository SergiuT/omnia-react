import React from 'react';

export const ApartamentModel = ({image, pret, camere, app, etaj, suprafata, dormitoare, bai }) => {
    return (
        <div className='app-model'>
            <div className='app-model-content'>
                <h2>Apartament {app} ({etaj})</h2>
            </div>
            <div className='app-model-full'>
                <img className='image-app' width="600px" height="400px" src={require(`../static/${image}`)} />
                <div className='model-info'>
                    <h3 style={{marginBottom: '50px'}}>Status - <span style={{color: 'green'}}>Disponibil</span></h3>
                    <div className='icon-1'>
                        <img width="50px" height="50px" src={require('../static/room.png')} alt="Suprafata Apartament" />
                        <p>Suprafata utila {suprafata}</p>
                    </div>
                    <div className='icon-1'>
                        <img width="50px" height="50px" src={require('../static/bed.png')} alt="Dormitor" />
                        <p>{dormitoare}</p>
                    </div>
                    <div className='icon-1'>
                        <img width="50px" height="50px" src={require('../static/sofa.png')} alt="Living room" />
                        <p>{camere}</p>
                    </div>
                    <div className='icon-1'>
                        <img width="50px" height="50px" src={require('../static/bathroom.png')} alt="Baie" />
                        <p>{bai}</p>
                    </div>
                    <div className='icon-1'>
                        <img width="50px" height="50px" src={require('../static/tag.png')} alt="Pret Apartament" />
                        <p style={{fontWeight: 'bold'}}>Pret - {pret}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}