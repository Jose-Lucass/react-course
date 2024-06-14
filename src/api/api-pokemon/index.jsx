import React, { useState } from "react";
import axios from "axios";



export default function GetPokemon(){

    
const[pokemon, setPokemon] = useState(null)
const[pokedex, setPokedex] = useState(null)



async function handlePokemon(){
    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        setPokedex(response.data)
        console.log(response.data)
    }catch(error){
        console.log(error)
    }

}
    return(
        <div className="flex flex-col justify-center items-center gap-4">
            
            <h1 className="text-red-600 text-3x1">Buscar pokemon</h1>
            
            <input type="text" onChange={(e) => setPokemon(e.target.value)} className="border-solid border-red-600 p-2 rounded-md"/>

            <button type="button" onClick={handlePokemon}>Buscar</button>

            {
                    pokedex &&
                    
                        <div className="mb-3 shadow-2xl shadow-gray-600 rounded-lg p-4 flex flex-col items-center justify-center w-20 h-30 gap-3 ">
                            <p>{pokedex.name} </p>
                            <img src={pokedex.sprites.front_default} alt="" />
                            <img src={pokedex.sprites.front_shiny} alt="" />
                        </div>
               
            }

        </div>
    )
}