import React from "react"
import GoogleMapReact from "google-map-react"


export default function Map({children, center, handleApiLoaded, changeHandler}){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };



  return ( 
      <GoogleMapReact
        onChange={changeHandler}
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        
        center = {center}
      >
          {children}
       
      </GoogleMapReact>
   
  );
}