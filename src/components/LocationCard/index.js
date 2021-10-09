import React from 'react'

export default function Card({lng,lat}){
    return(
        <div class="card location-card">
            <div class="card-body">
                <h5 class="card-title">Location Details</h5>
                <p class="card-subtitle mb-2 text-muted">Latitude:{lat}</p>
                <p class="card-text">Longitude:{lng}</p>
                
            </div>
            </div>
        // <div className="card">
        //     <h3>Location Details</h3>
        //     <span>{lat}</span><br/>
        //     <span>{lng}</span>
        // </div>
    )
}