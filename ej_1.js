//Problema N1

var usuario = prompt ("Ingrese usuario", ["Usuario "]);
var contraseña = prompt ("Ingrese contraseña", ["Contraseña"]);

var usuarioValido = "natalia";
// si no es natalia no será valido var NoValido = "alguien que no sea natalia"; 



var imgIngreso = "https://st.depositphotos.com/1012377/4410/i/950/depositphotos_44108853-stock-photo-businessman-hand-ok.jpg";
// var imgNoIngreso = "";



if( usuarioValido == usuario){
    document.write(`
        <img width="400" src=${imgIngreso}>
    `);
}else{    
    document.write(`
       <h1> Ingreso no válido </h1> 
    `);
}