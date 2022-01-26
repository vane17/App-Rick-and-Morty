import React, {useState, useEffect} from 'react'
import './Serie.css';




const Serie = ({info}) => {

  //--------------------------Location:
  let apiLocation = `https://rickandmortyapi.com/api/location`;

  let [fetchedDataLocation, updateFetchedDataLocation] = useState(([]));
  let infoLocation= fetchedDataLocation.info;
  //console.log(fetchedDataLocation)
  
  useEffect(() => {
  
    (async function(){
      let data = await fetch(apiLocation).then(res => res.json());
      updateFetchedDataLocation(data)
    })();
  
  }, [apiLocation]);


  //--------------------------Episodes:
  let apiEpisode = `https://rickandmortyapi.com/api/episode`;

  let [fetchedDataEpisode, updateFetchedDataEpisode] = useState(([]));
  let infoEpisode = fetchedDataEpisode.info;

  useEffect(() => {
  
    (async function(){
      let data = await fetch(apiEpisode).then(res => res.json());
      updateFetchedDataEpisode(data)
    })();
  
  }, [apiEpisode]);

  return (

    <div className="serie">
      
      <h3 className="serie-info">{infoEpisode?.count} episodios </h3>
      <h3 className="serie-info"> {infoLocation?.count} locationes</h3>
      <h3 className="serie-info">{info?.count}  personajes</h3>

    </div>
  ); 
};


export default Serie;
