import React, {useState, useEffect} from 'react'

import Cards from "./components/Cards/Cards";
import Header from './components/Header/Header';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Serie from './components/Serie/Serie';
import Details from './components/Details/Details';
import './App.css';


function App() {

  let [pageNumber, setPageNumber] = useState(1); 
  let [search, setSearch] = useState(""); 

 // console.log(pageNumber)
  let [fetchedData, updateFetchedData] = useState(([]));
  let { info, results } = fetchedData;
  //console.log(fetchedData.results)
  //console.log(results);
  console.log(fetchedData)

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {

    (async function(){
      let data = await fetch(api).then(res => res.json());
      //console.log(data.results); //para ver solo los resultados sin la info
      updateFetchedData(data)
    })();

  }, [api]);


  return (

    <div className="App"> 

      <Header/>
      <Search setSearch={setSearch} setPageNumber={setPageNumber}/>
      <Serie info={info}/>

      <div className="Cards-section">
        <div className="Cards-and-details">
          <Cards results={results}/>
        </div>

        <Details/>
      </div>
      
      <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} info={info} />
      
    </div>
  );
};

export default App;
