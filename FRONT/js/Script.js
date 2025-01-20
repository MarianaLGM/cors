function getRickAndMortyInfo(){
    const rickAndMortyNameInput= document.getElementById("rickAndMortyName")
    const rickAndMortyInfo= document.getElementById("rickAndMortyInfo")

    //vamos a pasar el nombre de esos pokemon a tolowercase, da igual que lo escribas en mayúsculas o minúsculas (para evitar errores siempre lo pasará a minúsculas)
    const rickAndMortyName= rickAndMortyNameInput.value.toLocaleLowerCase()

    //vamos a usar un fetch
    fetch (`http://localhost:3000/character/${rickAndMortyName}`)
    .then (response=>response.json()) //lo que me tienes que hacer es pasarla respuesta a json
    .then (data =>{   
        console.log(data)
        console.log(data.results)
        //IMPORTANTE entre las llaves vamos a meter la línea 29 del BACK, donde el try
        const {name, status, species, gender, origin, image}=data //lo único cambiamos response.data x sólo data
        
//NO ENCUENTRA PERSONAJES
        //vamos a hacer nuestro propio templete
        rickAndMortyInfo.innerHTML=`
        <h2>${name}</h2>
        <h3>${status}</h3>
        <h3>${species}</h3>
        <h3>${gender}</h3>
        <h3>${origin}</h3>
        <img src="${image}" alt="${name}"/>
        `
        })

    //ahora que ya tenemos todos los datos hacemos un catch para ver si hay algún error:
    .catch(error=>rickAndMortyInfo.innerHTML=`<p>imposible acceder al personaje</p>`)
}
 
      