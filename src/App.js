import React, { useEffect, useState } from "react";
import Countries from "./components/Countries";
import Search from "./components/Search";
// import { BiSearch } from 'react-icons/bi';


function App() {

  const [countries, setCountries]= useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error ,setError] = useState(null);
  const [filterDesh, setFilterDesh] = useState(countries);

  const url ="https://restcountries.com/v3.1/all";

  const fetchData =async (url)=>{
    setIsLoading(true);

    try{
      const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
    setFilterDesh(data);
    setIsLoading(false); 
    setError(null);
    // console.log(countries)
    }
    catch(err){
      setIsLoading(false);
      setError(err);
    }
  }

  useEffect(()=>{

      fetchData(url);

  },[]);

  const handleRemoveCountry =(name)=>{
    // alert(name);
    const filter = filterDesh.filter((desh)=>{
    return  desh.name.common !== name
    });
    setFilterDesh(filter);
  }

  const handleSeacrh =(searchval)=>{
    
    let value = searchval.toLowerCase();

    const newDesh = countries.filter((desh)=>{

      const countryName = desh.name.common.toLowerCase();
      return countryName.startsWith(value);
    });

    setFilterDesh(newDesh);

  }

  return (
    <>
      <div className="mainBody">
      <div className="bodyHead">
        <h1>Country Search App</h1>
        <Search onSearch={handleSeacrh} />
      </div>
      <div className="mainBottom">

      {error && <p>{ error.message }</p>}
      {isLoading && <p>Data is Loading...........</p>}
      {countries && <Countries countries={filterDesh} onRemove={handleRemoveCountry} /> }

      </div>

      </div>
    </>
  
  );
}

export default App;
