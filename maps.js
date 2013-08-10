// JavaScript Document

var map
var marcador

  function initialize() {
	var latlng = new google.maps.LatLng(-34.397, 150.644);
    var lat2lng = new google.maps.LatLng(19.684,-101.178);
	var lat3lng = new google.maps.LatLng(19.720, -101.219);
    var myOptions = {
      zoom: 13,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoomControl: true
    };
    map = new google.maps.Map(document.getElementById("map_canvas"),
        myOptions);
				
    marcador = new google.maps.Marker( {
		position: latlng,
		animation:google.maps.Animation.DROP,
		map:map	
	})
	marcador2 = new google.maps.Marker( {
		position: lat2lng,
		map:map	
	})
	marcador3 = new google.maps.Marker( {
		position: lat3lng,
		map:map	
	})
	var infowindow = new google.maps.InfoWindow({
			content:"Te encuentras aqui"	  
	});
	google.maps.event.addListener(marcador, 'click', function() {
		infowindow.open(map,marcador);
	});
  }
  
  function mostrarUbicacion(){
		navigator.geolocation.getCurrentPosition( lecturaGPS , errorGPS , {enableHighAccuracy:true} )  
  }
  
  function lecturaGPS(ubicacion){
	  
	  var miubicacion = new google.maps.LatLng(ubicacion.coords.latitude, ubicacion.coords.longitude);
	  
	  map.setCenter(miubicacion)
	  marcador.setPosition(miubicacion)
  }
  
  function errorGPS(){
	  alert(" no puedo encontrarte :(")
  }