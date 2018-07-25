//Funcion para llamar a la api
let buscar=document.getElementById("busqueda").value;//variable que guardara el numero de tarjeta ingresado
fetch(`https://developers.zomato.com/api=b0c23f798b70d7331293ff9cbcbe8f8f`)//llamamos a la api
.then(response => response.json())
.then(data=>{
    console.log(data)})