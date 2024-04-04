const contenido = document.getElementById("input-box")
const elementoLista = document.getElementById("lista-contenedor")
let ahora = Date.now(); 
var array =[];

var objeto = {
    id : 0,
    txt : "cocinar", 
    date : ahora,
    tachado : false
}


function agregarTarea(){
    let contenido = document.getElementById("input-box")
    if(contenido.value === '') {
        alert("Error en el ingreso de datos")
    } else {
        let li = document.createElement("li");
        array.push(objeto);
        document.querySelector('#lista-contenedor').innerHTML = contenido.value;
       
        console.log(objeto);
    }
    
    
}

for(var i=0; i<array.length;i++){
    var tachado = '';
    if (array[i].tachado){
        tachado = 'tachado'
    }

    document.querySelector('#contenedor').innerHTML += `
    <li class="${tachado}" onclick="cambiarEstado(${array[i].id})"> 
        ${array[i].nombre} 
    </li>` 
}

function combiarEstado(id){
    //recorrer el array, encontrar por id el 
}