import React, {useState, useEffect} from "react"
import Map from "./components/Map"
import Marker from "./components/Marker"
import LocationCard from "./components/LocationCard"
import "./App.css"



function App() {
  
  const [cordinates, setCordinates] = useState(false);
  const [loc, setLoc] = useState(false);
  const findMeHandler = ()=>{
    setLoc(false)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((loc)=>{
        setLoc(loc);
      });
    }
  }
  const mapApiLoadedHandler = (map, maps) =>{

  }
  const changeHandler = ()=>{
    setCordinates(null)
  }

  useEffect(() => {
    if(loc){
      setCordinates({lat:loc.coords.latitude,lng:loc.coords.longitude })
      console.log(loc);

    }   
 }, [loc])
  
 

  return (
    <div className="App">

      <Map
      changeHandler = {changeHandler}
      center = {cordinates}
      handleApiLoaded = {mapApiLoadedHandler}
      >
       {loc &&
       <div lat={loc.coords.latitude} lng={loc.coords.longitude}>
          <Marker/>
          <span className="d-table ">
            <LocationCard  lat={loc.coords.latitude} lng={loc.coords.longitude}/>
            </span>
       </div>
       }
       

      </Map>
      <div className="fixed-bottom findme-btn-container d-flex justify-content-center px-2">
        <button onClick={findMeHandler} type="button" className="btn btn-primary ">Find me</button>

        </div>
      
     
    </div>
  );
}

export default App;
