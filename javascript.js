var ID = 1;
var array =[];
let ahora = Date.now();
var objeto = {
    id : 0,
    texto : "tarea", 
    date : `21-03-2007`,
    tachado : false
}

function agregarTarea(id){
    let contenido = document.getElementById(id)

    if(contenido.value === '') { 
        alert("Error en el ingreso de datos")   
    }else{
        objeto = crearNuevoObjeto(ID, contenido.value, ahora)
        ID++;
        array.push(objeto);
        recargarListado();
    }
}

function recargarListado(){
    document.querySelector('#lista-contenedor').innerHTML = "";

    for(let i=0; i<array.length;i++){
        document.querySelector('#lista-contenedor').innerHTML += `
        <li id="${array[i].id}" class="${array[i].tachado ? `tachado` : ``}" onclick="cambiarEstado(${array[i].id})"> 
            ${array[i].texto} 
        </li>`         
    }
}

function crearNuevoObjeto(ID, txt, ahora){
    /* let ahora = Date.now(); 
    let dia = ahora.getDay();
    let mes = ahora.getMonth()-1;
    let ano = ahora.getFullYear();       esto no funca
    let fecha = `${dia}-${mes}-${ano}`   pero falta todoo lo que es fechas y la tarea que se realizo mas rapido*/

    let obj = {
        id : ID,
        texto : txt, 
        date : ahora,
        tachado : false
    }
    return obj; 
}

function cambiarEstado(id){
    for(var i=0; i<array.length;i++){
        if(array[i].id==id ){
            array[i].tachado = !array[i].tachado
            //document.getElementById(array[i].id).style.textDecoration = 'line-through'; podes hacer esto o recargar el listado denuevo
            recargarListado()
        }
    }
    
}

function borrarTodo(){
    document.querySelector('#lista-contenedor').innerHTML = "";
}