import React, { useEffect, useState } from "react";

const Search = (props)=>{

    const [searchText, setSearchText]= useState("");

    const handleChange=(e)=>{
        setSearchText(e.target.value);
    }
    useEffect(()=>{
        // alert(searchText)
        props.onSearch(searchText)

    },[searchText])

    return(
        <>
        <div className="headSearch">
         <input type="text" placeholder="Serach Country" 
             onChange={handleChange}
             value={searchText}
         />
        </div>
        </>

    )
}

export default Search;