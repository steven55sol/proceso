function mostrar(){
    
let box = document.getElementById("regalo");
let cartel = document.getElementById("modal");
let msj = document.getElementById("mensaje");

box.addEventListener('click', ()=>{
    cartel.style.display="block"; 
    msj.style.display="block";
});

}

function cerrar(){
    let cerrar = document.getElementById("icono");
    let cartel = document.getElementById("modal");
    let msj = document.getElementById("mensaje");
    
cerrar.addEventListener('click', ()=>{
    cartel.style.display="none"; 
     msj.style.display="none";
});
    
}

mostrar();
cerrar();
