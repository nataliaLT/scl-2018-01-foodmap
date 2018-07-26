//Funcion para llamar a la api
let buscar=document.getElementById("busqueda").value;//variable que guardara el numero de tarjeta ingresado
fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?`)//llamamos a la api
.then(response => response.json())
.then(data=>{
    console.log(data)})

let divMapa =  document.getElementById("mapa");
navigator.geolocation.getCurrentPosition(fn_ok, fn_mal);
function fn_mal(){}
function fn_ok(rta){
    let lat= rta.coords.latitude;
    let lon= rta.coords.longitude;

    let gLatLon = new google.maps.LatLng(lat,lon);
    let objConfig = {
        zoom: 17,
        center: gLatLon
    }
    let gMapa =  new google.maps.Map(divMapa, objConfig);
    let objConfigMarker={
        position: gLatLon,
        map:gMapa,
        title: "usted esta aca"
    }
    let gMarker =  new google.maps.Marker(objConfigMarker);
}

