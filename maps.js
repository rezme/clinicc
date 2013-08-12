// JavaScript Document

var map

  function initialize() {
	var latlng = new google.maps.LatLng(21.943046,-102.487335); //default
	//mexico
	var m1 = new google.maps.LatLng(19.525494,-99.190171);
	var m2 = new google.maps.LatLng(19.441989,-98.929932);
	var m3 = new google.maps.LatLng(19.385,-99.121506);
	var m4 = new google.maps.LatLng(19.291054,-99.234116);
	//guadalajara
	var g1 = new google.maps.LatLng(20.671657,-103.43496);
	var g2 = new google.maps.LatLng(20.687717,-103.322006);
	var g3 = new google.maps.LatLng(20.597758,-103.284928);
	//morelia
	var lat2lng = new google.maps.LatLng(19.684,-101.178);
	var lat3lng = new google.maps.LatLng(19.720, -101.219);
	
    var myOptions = {
      zoom: 5,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoomControl: true
	}
	
	map = new google.maps.Map(document.getElementById("map_canvas"),
    myOptions);
	//marcadores morelia
    marcador = new google.maps.Marker( {
		icon:'img/yo.png',
		animation:google.maps.Animation.DROP,
		map:map	
	})
	marcador2 = new google.maps.Marker( {
		icon:'img/h3.png',
		position: lat2lng,
		map:map	
	})
	marcador3 = new google.maps.Marker( {
		position: lat3lng,
		icon:'img/h3.png',
		map:map	
	})
	//marcadores c.mexico
	marcadorm1 = new google.maps.Marker( {
		icon:'img/h3.png',
		position: m1,
		map:map	
	})
	marcadorm2 = new google.maps.Marker( {
		position: m2,
		icon:'img/h3.png',
		map:map	
	})
	marcadorm3 = new google.maps.Marker( {
		icon:'img/h3.png',
		position: m3,
		map:map	
	})
	marcadorm4 = new google.maps.Marker( {
		icon:'img/h3.png',
		position: m4,
		map:map	
	})
	//marcadores guadalajara
	marcadorg1 = new google.maps.Marker( {
		icon:'img/h3.png',
		position: g1,
		map:map	
	})
	marcadorg2 = new google.maps.Marker( {
		icon:'img/h3.png',
		position: g2,
		map:map	
	})
	marcadorg3 = new google.maps.Marker( {
		icon:'img/h3.png',
		position: g3,
		map:map	
	})
	
	var infowindow = new google.maps.InfoWindow({
			content:"Te encuentras aqui"	  
	});
	google.maps.event.addListener(marcador, 'click', function() {
		infowindow.open(map,marcador);
	});
  }
    
  //UBICACION GPS
  function mostrarUbicacion(){
		navigator.geolocation.getCurrentPosition( lecturaGPS , errorGPS , {enableHighAccuracy:true} )  
  }
  
  function lecturaGPS(ubicacion){
	  
	  var miubicacion = new google.maps.LatLng(ubicacion.coords.latitude, ubicacion.coords.longitude);  
	  map.setCenter(miubicacion)
	  map.setZoom(12)
	  marcador.setPosition(miubicacion)
  }
  
  //UBICACION MORELIA
  function mostrarUbicacionMorelia(){
	  
	  var latlngmor = new google.maps.LatLng(19.703, -101.195);
	  map.setCenter(latlngmor)
	  map.setZoom(12)	  
  }
  
  //UBICACION MEXICO
  function mostrarUbicacionMexico(){
	  
	  var latlngmx = new google.maps.LatLng(19.432, -99.135);
	  map.setCenter(latlngmx)
	  map.setZoom(9)	  
  }
  
  //UBICACION GUADALAJARA
  function mostrarUbicacionGuadalajara(){
	  
	  var latlngguad = new google.maps.LatLng(20.63921,-103.336083);
	  map.setCenter(latlngguad)
	  map.setZoom(11)	  
  }
  
  //error
  function errorGPS(){
	  alert("Error al acceder al GPS");
  }