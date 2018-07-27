/*//Funcion para llamar a la api
let buscar=document.getElementById("busqueda").value;//variable que guardara el numero de tarjeta ingresado
fetch(`https://places.cit.api.here.com/places/v1/discover/explore?app_id=6J5AsaSXzYCfklN0kKPj&app_code=Yj-7Y7Mbb5WaxdLavZGk2Q&at=-33.6020882,-70.5807397,17&pretty`)//llamamos a la api
.then(response => response.json())
.then(data=>{
    console.log(data)})

/*let divMapa =  document.getElementById("mapa");
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
}*/

var map;
var infowindow;

function initMap(){
    //mapa con coordenadas actuales
    navigator.geolocation.getCurrentPosition(function(pos){
        lat=pos.coords.latitude;
        lon=pos.coords.longitude;
        var myLatIng = new google.maps.LatLng(lat, lon);

        var mapOptions = {
            center: myLatIng,
            zoom: 14
           // mapTypeId: google.maps.mapTypeId.SATELITE
        };
        map= new google.maps.Map(document.getElementById("mapa"), mapOptions);

        //infowindow
        infowindow = new google.maps.InfoWindow();

        //especificamos la localizacion, el radio y el tipo de lugares que queremos obtener
        var request = {
            location:myLatIng,
            radius: 5000,
            types: ['restaurant']
        };
        //creamos el servicio placeService y enviamos la peticion
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, function(results, status){
            if(status === google.maps.places.PlacesServiceStatus.OK){
                for(var i=0; i<results.length; i++){
                    crearMarcador(results[i]);
                }
            }
        });
    });
}
function crearMarcador(place){
    //creamos un marcador
    var marker= new google.maps.Market({
        map: map,
        position: place.geometry.location
    });
    //asignamos el evento click del marcador
    google.maps.event.addListener(marker, 'click', function(){
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}


