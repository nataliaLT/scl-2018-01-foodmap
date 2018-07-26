//Funcion para llamar a la api
let buscar=document.getElementById("busqueda").value;//variable que guardara el numero de tarjeta ingresado
fetch(`https://places.cit.api.here.com/places/v1/discover/explore?app_id=6J5AsaSXzYCfklN0kKPj&app_code=Yj-7Y7Mbb5WaxdLavZGk2Q&at=-33.6020882,-70.5807397,17&pretty`)//llamamos a la api
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

