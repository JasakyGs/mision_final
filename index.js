const arrayInicio = [
    {nombre: "leidy", puntuacion: 80}, 
    {nombre: "andrea", puntuacion: 63},
    {nombre: "valentina", puntuacion: 55},
    {nombre: "sergio", puntuacion: 42},
    {nombre: "ronald", puntuacion: 38},
    {nombre: "luis", puntuacion: 30},
]



const inicio = document.getElementById("btninicial")
inicio.addEventListener("click",function(){ 

    let contenido = ""
    contenido=`<table><th>INICIO</th>`
    arrayInicio.forEach(nombre => {contenido+=`<tr><td>El Participante: ${nombre.nombre},La puntuacion fue: ${nombre.puntuacion}</td></tr>`})
     contenido+=`</table`
     document.getElementById('visual').innerHTML=contenido
        
})

const final = document.getElementById("btnfinal")
final.addEventListener("click",function(){
    const arrayFinal = arrayInicio.map(nombre=>nombre)
    let indice = arrayFinal.indexOf([{nombre:"sergio",puntuacion:42}])
    arrayFinal [indice]= {nombre:"sergio",puntuacion:57}
    arrayFinal.pop()
    arrayFinal.splice(1,0,{nombre:"gustavo",puntuacion:77},{nombre:"jamile",puntuacion:77})
    arrayFinal.splice(0,0,{nombre:"yanires",puntuacion:93})
    

    let contenido = ""
    contenido=`<table><th>FINAL</th>`
    arrayFinal.forEach(nombre => {contenido+=`<tr><td>El Participante: ${nombre.nombre},La puntuacion fue: ${nombre.puntuacion}</td></tr>`})
     contenido+=`</table`
     document.getElementById('visual').innerHTML=contenido
        
})

const inverso = document.getElementById("btninverso")
inverso.addEventListener("click",function(){
    const arrayFinal = arrayInicio.map(nombre=>nombre)
    let indice = arrayFinal.indexOf([{nombre:"sergio",puntuacion:42}])
    arrayFinal [indice]= {nombre:"sergio",puntuacion:57}
    arrayFinal.pop()
    arrayFinal.splice(1,0,{nombre:"gustavo",puntuacion:77},{nombre:"jamile",puntuacion:77})
    arrayFinal.splice(0,0,{nombre:"yanires",puntuacion:93})
    
    const arrayRever = arrayFinal.map(nombre=>nombre)
     arrayRever.reverse()

    let contenido = ""
    contenido=`<table><th>INVERSO</th>`
    arrayRever.forEach(nombre=>{contenido +=`<tr><td>El Participante: ${nombre.nombre},La puntuacion fue: ${nombre.puntuacion}</td></tr>`})
    contenido+=`</table>`
    document.getElementById('visual').innerHTML=contenido

})

const promedio = document.getElementById("btnpromedio")
promedio.addEventListener("click",function(){
    const arrayFinal = arrayInicio.map(nombre=>nombre)
    let indice = arrayFinal.indexOf([{nombre:"sergio",puntuacion:42}])
    arrayFinal [indice]= {nombre:"sergio",puntuacion:57}
    arrayFinal.pop()
    arrayFinal.splice(1,0,{nombre:"gustavo",puntuacion:77},{nombre:"jamile",puntuacion:77})
    arrayFinal.splice(0,0,{nombre:"yanires",puntuacion:93})

     let prome=0
     let promedio=0
     let puntos=arrayFinal.map(puntuacion=>puntuacion.puntuacion)
     console.log(puntos)
     puntos.forEach(puntuacion=>{
        prome+=puntuacion
     })

     promedio=prome/8



    let contenido = ""
    contenido=`<table><th>PROMEDIO</th>`
    contenido+=(`<tr><td> ${promedio}</td></tr>`)
     contenido+=`</table`
     document.getElementById('visual').innerHTML=contenido
    
})

const podio = document.getElementById("btnpodio")
podio.addEventListener("click",function(){  
    const arrayFinal = arrayInicio.map(nombre=>nombre)
    let indice = arrayFinal.indexOf([{nombre:"sergio",puntuacion:42}])
    arrayFinal [indice]= {nombre:"sergio",puntuacion:57}
    arrayFinal.pop()
    arrayFinal.splice(1,0,{nombre:"gustavo",puntuacion:77},{nombre:"jamile",puntuacion:77})
    arrayFinal.splice(0,0,{nombre:"yanires",puntuacion:93})

    const arrayPodio = arrayFinal.map(nombre=>nombre)
    let filtrado = arrayPodio.filter((item) => item.puntuacion > 50)
    

    let contenido = ""
    contenido=`<table><th>INVERSO</th>`
    filtrado.forEach(nombre=>{contenido +=`<tr><td>El Participante: ${nombre.nombre},La puntuacion fue: ${nombre.puntuacion}</td></tr>`})
    contenido+=`</table>`
    document.getElementById('visual').innerHTML=contenido

})



const acerca = document.getElementById("sobre")
acerca.addEventListener("click",function(){

    let contenido = ""
    contenido=`<table><th>TALENTOS</th>`
    contenido+=(`<tr><td>CHRISTIAN SANCHEZ , JOHAN SEBASTIAN , DONCAN JIMENEZ</td></tr>`)
     contenido+=`</table`
     document.getElementById('visual').innerHTML=contenido
})

const actualizar = document.getElementById("btnactualizar")
actualizar.addEventListener("click",function(){
    let contenido = ""
    contenido=`<table><th>ACTUALIZACION</th>`
    arrayFinal.forEach(nombre => {contenido+=`<tr><td>El Participante: ${nombre.nombre},La puntuacion fue: ${nombre.puntuacion}</td></tr>`})
     contenido+=`</table`
     document.getElementById('visual').innerHTML=contenido
})
