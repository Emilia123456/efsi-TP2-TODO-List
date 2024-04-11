var ID = 1;
var array =[];
var objeto = {
    id : 0,
    texto : "tarea", 
    date : `21-03-2007`,
    tachado : false,
    fechaTachado: '21-03-2007'
}

function agregarTarea(id){
    let contenido = document.getElementById(id)

    if(contenido.value === '') { 
        alert("Error en el ingreso de datos")   
    }else{
        objeto = crearNuevoObjeto(ID, contenido.value)
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
        </li>
        <li class="fechas" ${array[i].tachado ? `` : ``}"> 
            Creación: ${array[i].date} 
            Eliminacion: ${array[i].fechaTachado}
        </li>`  

           
    }
}

function crearNuevoObjeto(ID, txt){
    let obj = {
        id : ID,
        texto : txt, 
        date : new Date().toLocaleDateString(),
        tachado : false,
        fechaTachado: ''
    }
    return obj; 
}

function cambiarEstado(id){
    for(var i=0; i<array.length;i++){
        if(array[i].id==id ){
            array[i].tachado = !array[i].tachado
            //document.getElementById(array[i].id).style.textDecoration = 'line-through'; podes hacer esto o recargar el listado denuevo
            array[i].fechaTachado = new Date().toLocaleDateString();
            recargarListado();
            console.log(array);
           // let fechaTachado = new Date();
        }
    }
    
}

function borrarTodo(){
    document.querySelector('#lista-contenedor').innerHTML = "";
    let a = [];
    array = a;
}