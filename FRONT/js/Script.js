function getRickAndMortyInfo(){
    const rickAndMortyNameInput= document.getElementById("rickAndMortyName")
    const rickAndMortyInfo= document.getElementById("rickAndMortyInfo")

    //vamos a pasar el nombre de esos pokemon a tolowercase, da igual que lo escribas en mayúsculas o minúsculas (para evitar errores siempre lo pasará a minúsculas)
    const rickAndMortyName= rickAndMortyNameInput.value.toLocaleLowerCase()

    //vamos a usar un fetch
    fetch (`http://localhost:3000/characters/${rickAndMortyName}`)
    .then (response=>response.json()) //lo que me tienes que hacer es pasarla respuesta a json
    .then (data =>{   
        console.log(data)
        console.log(data.results)
        //IMPORTANTE entre las llaves vamos a meter la línea 30 del BACK, donde el try
        //const {name, status, species, gender, origin, image}=data //lo único cambiamos response.data x sólo data
        
        //vamos a hacer nuestro propio templete
        data.results.forEach((elements) => {
        rickAndMortyInfo.innerHTML=`
        <h2>${elements.name}</h2>
        <h3>${elements.status}</h3>
        <h3>${elements.species}</h3>
        <h3>${elements.gender}</h3>
        <img src="${elements.image}" alt="${elements.name}"/>
        `
    })
   
})
    //ahora que ya tenemos todos los datos hacemos un catch para ver si hay algún error:
    .catch(error=>rickAndMortyInfo.innerHTML=`<p>imposible acceder al personaje</p>`)
}
 
   
    
    