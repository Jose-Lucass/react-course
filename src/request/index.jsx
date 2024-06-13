import React, { useState } from "react"
import axios from "axios"

export default function GetCep(){

   const [cep,setCep] = useState(null)
   const[adress,setAdress] = useState(null)


   console.log(cep, "cep")
   console.log(adress, "adress")

   
   async function handleAddres(){
     try{
        const response = await axios.get(`https://viacep.com.br/ws/$(cep)/json/`);
        console.log(response.data)
     } catch (error){
        console.log(error)
     }
   }


    return(
        
        <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center gap-4">
        
            <h1 className="text-4xl text-blue-600">Busque seu cep aqui</h1>
            
            <input type="number" name="" id="" className="p-2 border-solid border-blue-500 rounded-md" onChange={(e) => setCep(e.target.value)} />

            <button type="button" onClick={handleAddres}>Buscar</button>

        </div>

        {
            adress && 
            <div>
                <p>{adress.logadouro}</p>
                <p>{adress.ddd}</p>
                <p>{adress.bairro}</p>
                <p>{adress.localidade}</p>
            </div>
        }

        </div>
    )
}