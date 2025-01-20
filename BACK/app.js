//1- instalamos package.json: npm init -y
//2- creamos archivo principal app.js
/*3- instalamos dependencias(express,axios, cors): npm i express axios cors -E
*/

const express= require("express")
const axios=require("axios")
const cors=require("cors")
const app=express()

app.use(cors())//le estamos diciendo que todas nuestra rutas pasen por CORS y permitan la entrada


//TRAER TODOS LOS PERSONAJES//
app.get("/character", (req, res)=>{//accedemos a usuarios para que nos devuelva todo el json
    const url=(`https://rickandmortyapi.com/api/character`) 
    try{
        const response=axios.get(url)//ASINCRONÍA
        const {name, status, species, gender, origin,image}=response.data
 
        res.json({id,name, status, species, gender, origin,image})
    }catch (ERROR){
        res.status(404).json({error: "personaje no encontrado"})
    }
})
    

//TRAER SOLO UN PERSONAJE//
app.get("/character/:name", async (req, res)=>{
    const rickAndMortyName=req.params.name

    const url=(`https://rickandmortyapi.com/api/character/?name=`) 

    //haremos un try and catch para manejo de errores:
    try{
        const response=await axios.get(url)//ASINCRONÍA
        const {name, status, species, gender, origin,image}=response.data
 
        res.json({id,name, status, species, gender, origin,image})
    }catch (ERROR){
        res.status(404).json({error: "personaje no encontrado"})
    }
})



app.listen(3000, ()=>{
    console.log("Está escuchando en el puerto http://localhost:3000")
})


/*5. Creamos un script en package.json: package.json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
--->"start": "node --watch app.js" 
  }
        ...y luego pondríamos en consola: npm start
  */