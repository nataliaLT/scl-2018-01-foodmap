//Funcion para llamar a la api
let buscar=document.getElementById("busqueda").value;//variable que guardara el numero de tarjeta ingresado
fetch(`https://places.cit.api.here.com/places/v1/discover/explore?app_id=6J5AsaSXzYCfklN0kKPj&app_code=Yj-7Y7Mbb5WaxdLavZGk2Q&at=-33.6020882,-70.5807397,17&pretty`)//llamamos a la api
.then(response => response.json())
.then(data=>{
    console.log(data)})
var platform = new H.service.Platform({
        'app_id': '{6J5AsaSXzYCfklN0kKP} ',
        'app_code': '{Yj-7Y7Mbb5WaxdLavZGk2Q} '
      });    

    // Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
  document.getElementById('map'),
  defaultLayers.normal.map,
  {
    zoom: 10,
    center: { lat: 52.5, lng: 13.4 }
  });



/*function findMe(){
    let output = document.getElementById('map');
    if(navigator.geolocation){
        output.innerHTML = "<p>Tu navegador soporta Geolocalizacion<p>";
    }else{
        output.innerHTML = "<p>Tu navegador no soporta Geolocalizacion<p>";
    }
    //obtenemos latitud y longitud
    function localizacion(posicion){
        var latitude = posicion.coords.latitude;
        var longitude = posicion.coords.longitude;

        output.innerHTML = "<p>Latitud: "+latitude+"<br>Longitud: "+longitude+"</p>";
    }
    function error(){
        output.innerHTML = "<p>No se pudo obtener tu ubicacion</p>";
    }
    navigator.geolocation.getCurrentPosition(localizacion,error);
}
*/