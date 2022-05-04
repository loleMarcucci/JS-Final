class jugadoras {
    constructor (nombre, apellido, numero, cuota, asistencias, posicion)
    {
        this.nombre= nombre;
        this.apellido= apellido;
        this.numero= numero;
        this.cuota= cuota;
        this.asistencias= asistencias;
        this.posicion= posicion;
    }
}

let jugadora1 = new jugadoras ("Pamela","Sosa","15","activa",8, 3);
let jugadora2 = new jugadoras ("Florencia","Perez","36","activa",8, 4);
let jugadora3 = new jugadoras ("Paula","Montero","20","activa",8,5);
let jugadora4 = new jugadoras ("Julieta","Lopez","12","activa",8,6);
let jugadora5 = new jugadoras ("Malena","Martinez","22","inactiva",8,7);
let jugadora6 = new jugadoras ("Celeste","Salinas","08","activa",8,8);
let jugadora7 = new jugadoras ("Camila","Pecoraro","19","activa",5,9);
let jugadora8 = new jugadoras ("Betiana","Storto","43","activa",6,10); 

const equipo = []
equipo.push (jugadora1, jugadora2, jugadora3,jugadora4, jugadora5, jugadora6, jugadora7,jugadora8)



//Funcion jugadora inhabilitada por inasistencia

const inhabilitada = equipo.filter ((elemento) => {
    return elemento.asistencias < 8;
});

console.log (inhabilitada);


const habilitada = equipo.filter ((elemento)=> {
    return elemento.asistencias >= 8;
}); 

console.log (habilitada);

//Acomodar en la tabla de posiciones en el puesto 1 quien mas goles haya marcado.


equipo.sort ((a,b)=>{
    if (a.posicion < b.posicion){
        return 1;
    }

    else if (a.posicion > b.posicion){
        return -1;
    }
    else {
        return 0;
    }

});
console.log (equipo);



//Funcion: Agregar judadoras al Html.

function agregarJugadoraHtml (jugadoras){

    let ul = document.createElement ("ul");

    let li1 = document.createElement ("li");
    li1.innerText = "Numero: " + jugadoras.numero;

    let li2 = document.createElement ("li");
    li2.innerText = "Posicion: " + jugadoras.posicion;

    let li3 = document.createElement ("li");
    li3.innerText = "Apellido: " + jugadoras.apellido;


    ul.append (li1, li2, li3);
    contenedor.append (ul);
}

//Seleccionar Contenedor.

let contenedor = document.getElementById ("contenedor");




//Evento Seleccionar Jugadora

let select = document.getElementById ("seleccionarJugadora");

//Funcion Nula.

let opcioNula = document.createElement ("option");
opcioNula.value = " ",
opcioNula.innerText = "Seleccionar Jugadora",
select.append(opcioNula);



//Recorrer Jugadoras.

equipo.forEach((jugadoras)=> {

    //Creamos la opcion del select.
    let option= document.createElement ("option");
    option.innerText = jugadoras.apellido;
    option.value= jugadoras.numero;

//agregar opcion al select.

select.append(option);
});

//Funcion buscar y ver datos de la jugadora.

function seleccionarJugadoraDatos (){
    const jugadoraSeleccionada = select.value;

    if (jugadoraSeleccionada !== ""){
        const jugadoraEncontrada = equipo.find ((equipo) => {
            return equipo.numero == jugadoraSeleccionada;
        });
        agregarJugadoraHtml (jugadoraEncontrada);
    }
} 

select.addEventListener("change", ()=>{
    seleccionarJugadora ();
})


