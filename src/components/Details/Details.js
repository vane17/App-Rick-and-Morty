import React from 'react';
import './Details.css';


const Details = () => {
    
    return(

        <div className="Details" id="Details">
           
            <h2 className="details-title">Detalle</h2>
            <span id="details-image"></span>
                
            <div id="details-name">Nombre del personaje</div>

            <h3 id="details-Genger">- Gender:</h3>
            <h3 id="details-origin">- Origin:</h3>
            <h3 id="details-location">- Location:</h3>
            <h3 id="details-episodios">- Number of episodes:</h3>
            
        </div>
    );
};

export default Details;