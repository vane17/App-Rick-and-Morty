import React from 'react'
import ReactDOM from 'react-dom'
import './Cards.css'


const Cards = ({results}) => {
    
    let display;
   
    if(results){

        display = results.map(x=>{
            let {id, name, image, status, species, gender, origin, location, episode} = x;
            
            return (

                <div key={id} className="Card">
                    
                    <img src={image} alt="" className=""/>

                    <div className="content">
                        <h2 className="">{name}</h2>
                            
                        {(()=>{
                            if (status === 'Dead'){

                                return (
                                    <div className="content-status">
                                    <button className="dead"></button>
                                    {status} 
                                    </div>
                                )
                                    
                            } else if (status === 'Alive'){

                                return(
                                    <div className="content-status">
                                    <button className="live"></button>
                                    {status} 
                                    </div>
                                )
                                    
                            } else {

                                return(
                                    <div className="content-status">
                                    <button className="unknown"></button>
                                    {status} 
                                    </div>
                                )
                                    
                            }
                         })()}
                            

                        <div className="card-specie">{species}</div>
                        <button className="detail" onClick={()=>{

                            const imageDetails= <img src={image} alt="" id="details-image"/>
                            const containerImage = document.getElementById('details-image')
                            ReactDOM.render(imageDetails, containerImage)

                            const nameDetails = <div className="details-name">{name}</div>
                            const containerName = document.getElementById('details-name')
                            ReactDOM.render(nameDetails, containerName)

                            const genderDetails = <div id="details-Genger">-Gender: {gender}</div>
                            const containerGender = document.getElementById('details-Genger')
                            ReactDOM.render(genderDetails, containerGender)

                            const originDetails = <div id="details-origin">-Origin: {origin.name}</div>
                            const containerOrigin = document.getElementById('details-origin')
                            ReactDOM.render(originDetails, containerOrigin)

                            const locationDetails = <div id="details-location">-Location: {location.name}</div>
                            const containerLocation = document.getElementById('details-location')
                            ReactDOM.render(locationDetails, containerLocation)



                            //----------Number of episodes:

                            const episodes = episode.map(x=>{

                                const StringlLastTwo = x.substr(-2)
                                return StringlLastTwo.replace("/","0")
                            })

                            const array = [];

                            for(let i of episodes){
                                array.push(i)
                            }
                            for(let i =1; i<array.length; i++){
                                
                                if(i%2!== 0){
                                    array.splice(i,0,',  ')
                                } 
                            }

                            const episodeDetails = <div id="details-episodios">-Episodes: {array}</div>
                            const containerEpisode = document.getElementById('details-episodios')
                            ReactDOM.render(episodeDetails, containerEpisode)

                            }} ><a href='#Details'>Ver mas</a></button>
                  
                    </div>
                </div>
            );
        });
    } else {
        display = "No characters found :/"; 
    }

    return (
        <>{display}</>
    )
};


export default Cards;
