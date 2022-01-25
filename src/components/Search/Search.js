import React from 'react';
import './Search.css';


const Search = ({setSearch, setPageNumber}) => {

    return (

        <form className="form">
            <input 
                onChange={e=> {
                    setPageNumber(1)
                    setSearch(e.target.value)
                }}  
                type="text" 
                className="form-input"
            /> 
            <button onClick={e=>{e.preventDefault()}} className="form-button">Buscar</button>
        </form>

    ); 
};

export default Search;
