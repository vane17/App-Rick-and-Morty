import React from 'react'
import './Cards.css'

const Cards = ({results}) => {
    
    let display;

    if(results){

        display = results.map(x=>{
            let {id, name, image, status, species} = x;
            
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
                        <button className="detail" >Ver mas</button>
                            
                    </div>

                    
                </div>

            )
        })
    } else {
        display = "No characters found :/"; 
    }


    return (
        <>{display}</>
    )
};


export default Cards;


/* <button className="" onClick={() => {
                                let api = `https://rickandmortyapi.com/api/character/${id}`
                                return(
                                    //console.log(api)
                                    <div className="">
                                        Hola
                                    </div>
                                )
                            } }>Ver mas</button> */