import React from "react";
import { AiFillDelete } from 'react-icons/ai';

const Country = (props)=>{

    const {desh} = props;
    const {name, flags, capital, population, area, region} = desh;

    const handleRemoveCountry =(name)=>{
        props.onRemove(name);
        
    }

    return(
        <>
           <div className="compo">

           <img src={flags.png} alt={name.common} />

           <h4>{name.common} </h4>

           <p>Capital {capital} </p>
           <p>Continent: {region} </p>
           <p>Population: {population} </p>           
           <p>Area: {area} </p>
           <div>
            <button onClick={()=>{
                handleRemoveCountry(name.common)
            }} title={`Delete ${name.common}`}> <AiFillDelete /> </button>
           </div>
           </div>
        </>
    )

}


export default Country;