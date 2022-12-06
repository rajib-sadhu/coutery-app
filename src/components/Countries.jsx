import React from "react";
import {v4 as uuidv4} from "uuid";
import Country from "./Country";


const Countries=(props)=>{

    return(
        <>

        { props.countries.map((desh)=>{
            const deshNew= {desh, id:uuidv4()}

            return <Country {...deshNew} key={deshNew.id} onRemove={props.onRemove} />

        }) }


        </>
    )

}

export default Countries;