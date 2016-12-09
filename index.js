      var lat;
      var lng;
      var map;
      var markers = Array();
var infos = Array();
var dir = Array();

function myLocation() {
navigator.geolocation.getCurrentPosition(onSuccess, onError);
}


var onSuccess = function(position) {
      lat = position.coords.latitude;
      lng = position.coords.longitude;

      console.log(lat);
      console.log(lng)

      initMap();
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }



      function initMap() {
        //  map = new google.maps.Map(document.getElementById('map'), {
        //   center: {lat,lng},
        //   zoom: 16,
        //   scrollwheel: false
        // });
        // var infoWindow = new google.maps.InfoWindow({map: map});



// prepare Geocoder
geocoder = new google.maps.Geocoder();
// set initial position (New York)
var myLatlng = new google.maps.LatLng(5.760073,-0.221880);
var myOptions = { // default map options
zoom: 12,
center: myLatlng,
scrollwheel: false,
mapTypeId: google.maps.MapTypeId.ROADMAP

};


map = new google.maps.Map(document.getElementById('map'), myOptions);

var marker = new google.maps.Marker({
  position: myLatlng,
  map: map,
  // animation: google.maps.Animation.BOUNCE
 });
 marker.setMap(map);

    }

    function clearOverlays() {
if (markers) {
for (i in markers) {
markers[i].setMap(null);
}
markers = [];
infos = [];
}
}
// clear infos function
function clearInfos() {
if (infos) {
for (i in infos) {
if (infos[i].getMap()) {
infos[i].close();
}
}
}
}

        // Try HTML5 geolocation.
      //   if (navigator.geolocation) {
      //     navigator.geolocation.getCurrentPosition(function(position) {
      //       var pos = {
      //         lat: position.coords.latitude,
      //         lng: position.coords.longitude
      //       };

      //       infoWindow.setPosition(pos);
      //       infoWindow.setContent('Location found.');
      //       map.setCenter(pos);
      //     }, function() {
      //       handleLocationError(true, infoWindow, map.getCenter());
      //     });
      //   } else {
      //     // Browser doesn't support Geolocation
      //     handleLocationError(false, infoWindow, map.getCenter());
      //   }
      // }

      // function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      //   infoWindow.setPosition(pos);
      //   infoWindow.setContent(browserHasGeolocation ?
      //                         'Error: The Geolocation service failed.' :
      //                         'Error: Your browser doesn\'t support geolocation.');
      // }

function findATM() {
	// myLocation();
// prepare variables (filter)
// console.log(lat);
// console.log(lng);
var type = "atm";
console.log(type);
var radius = 5000;
// var keyword = document.getElementById('gmap_keyword').value;
// var lat = document.getElementById('lat').value;
// var lng = document.getElementById('lng').value;
var cur_location = new google.maps.LatLng(lat, lng);
// prepare request to Places
var request = {
location: cur_location,
radius: radius,
types: [type]
};
// if (keyword) {
// request.keyword = [keyword];
// }
// send request
console.log(map);
service = new google.maps.places.PlacesService(map);
service.search(request, createMarkersATM);
}


function findFood() {
// prepare variables (filter)
var type = "food";
console.log(type);
var radius = 5000;
// var keyword = document.getElementById('gmap_keyword').value;
// var lat = document.getElementById('lat').value;
// var lng = document.getElementById('lng').value;
var cur_location = new google.maps.LatLng(lat, lng);
// prepare request to Places
var request = {
location: cur_location,
radius: radius,
types: [type]
};
// if (keyword) {
// request.keyword = [keyword];
// }
// send request
console.log(map);
service = new google.maps.places.PlacesService(map);
service.search(request, createMarkers);
}

function findHotel() {
// prepare variables (filter)
var type = "lodging";
console.log(type);
var radius = 5000;
// var keyword = document.getElementById('gmap_keyword').value;
// var lat = document.getElementById('lat').value;
// var lng = document.getElementById('lng').value;
var cur_location = new google.maps.LatLng(lat, lng);
// prepare request to Places
var request = {
location: cur_location,
radius: radius,
types: [type]
};
// if (keyword) {
// request.keyword = [keyword];
// }
// send request
console.log(map);
service = new google.maps.places.PlacesService(map);
service.search(request, createMarkersHotel);
}

function findStore() {
// prepare variables (filter)
var type = "store";
console.log(type);
var radius = 5000;
// var keyword = document.getElementById('gmap_keyword').value;
// var lat = document.getElementById('lat').value;
// var lng = document.getElementById('lng').value;
var cur_location = new google.maps.LatLng(lat, lng);
// prepare request to Places
var request = {
location: cur_location,
radius: radius,
types: [type]
};
// if (keyword) {
// request.keyword = [keyword];
// }
// send request
console.log(map);
service = new google.maps.places.PlacesService(map);
service.search(request, createMarkers);
}

function findBar() {
// prepare variables (filter)
var type = "bar";
console.log(type);
var radius = 5000;
// var keyword = document.getElementById('gmap_keyword').value;
// var lat = document.getElementById('lat').value;
// var lng = document.getElementById('lng').value;
var cur_location = new google.maps.LatLng(lat, lng);
// prepare request to Places
var request = {
location: cur_location,
radius: radius,
types: [type]
};
// if (keyword) {
// request.keyword = [keyword];
// }
// send request
console.log(map);
service = new google.maps.places.PlacesService(map);
service.search(request, createMarkers);
}

function findCafe() {
// prepare variables (filter)
var type = "restuarant";
console.log(type);
var radius = 5000;
// var keyword = document.getElementById('gmap_keyword').value;
// var lat = document.getElementById('lat').value;
// var lng = document.getElementById('lng').value;
var cur_location = new google.maps.LatLng(lat, lng);
// prepare request to Places
var request = {
location: cur_location,
radius: radius,
types: [type]
};
// if (keyword) {
// request.keyword = [keyword];
// }
// send request
console.log(map);
service = new google.maps.places.PlacesService(map);
service.search(request, createMarkers);
}

// create markers (from 'findPlaces' function)
function createMarkers(results, status) {
// dir = results;
  //directory(dir);
console.log(results);
if (status == google.maps.places.PlacesServiceStatus.OK) {
// if we have found something - clear map (overlays)
clearOverlays();
// and create new markers by search result
for (var i = 0; i < results.length; i++) {

createMarker(results[i]);
// $("#list").append( "< text</");
// document.getElementById("list").innerHTML = "some text";
// value=value+"<p><img src="+results[i].icon+" alt='' class='circle'><span class='title red-text text-lighten-2'>"+results[i].name+"</span>Location: "+results[i].vicinity+"</p>";
}

console.log(results);
// $("#list").append( "< text</");
// document.getElementById("list").innerHTML = "some text";

}
// document.getElementById("list").innerHTML = "some text";
// $("#list").append( "< text</");
// document.getElementById('list').innerHTML = "some text";

}

function createMarker(obj) {
// prepare new Marker object
var mark = new google.maps.Marker({
position: obj.geometry.location,
map: map,
title: obj.name,
animation: google.maps.Animation.BOUNCE
});
markers.push(mark);
// prepare info window
var infowindow = new google.maps.InfoWindow({

content: '<div><img src="' + obj.icon + '" heigh=30 width=30/><br>' + obj.name +
'<br>Rating: ' + obj.rating + '<br>Vicinity: ' + obj.vicinity + '</div>'
});
// add event handler to current marker
google.maps.event.addListener(mark, 'click', function() {
clearInfos();
infowindow.open(map,mark);
});
infos.push(infowindow);
}

function directory(results)
{
  var value="";
  console.log("im here");
  console.log(results);

  for (var i = 0; i < results.length; i++) {

    value=value+"<p><img src="+results[i].icon+" alt='' class='square' width=40 height=40><br><span class='title blue-text text-lighten-2'>"+results[i].name+"</span><br>Location: "+results[i].vicinity+"<br>Rating: "+results[i].rating+"</p>";

  }
  document.getElementById('list').innerHTML = value;

}


function directoryHotel(results)
{
  var value="";
  console.log("im here");
  console.log(results);

  for (var i = 0; i < results.length; i++) {

    value=value+"<p>"+results[i].name+"</span><br>Location: "+results[i].vicinity+"<br>Rating: "+results[i].rating+"<br><button class=\"btn waves-effect waves-light col s12 blue darken-4\" onclick=addBook()>Add a booking</button></p>";

  }
  document.getElementById('list').innerHTML = value;

}


// create markers (from 'findPlaces' function)
function createMarkersHotel(results, status) {

  directoryHotel(results);


if (status == google.maps.places.PlacesServiceStatus.OK) {
// if we have found something - clear map (overlays)
clearOverlays();
// and create new markers by search result
for (var i = 0; i < results.length; i++) {

createMarkerHotel(results[i]);
// $("#list").append( "< text</");
// document.getElementById("list").innerHTML = "some text";
// value=value+"<p><img src="+results[i].icon+" alt='' class='circle'><span class='title red-text text-lighten-2'>"+results[i].name+"</span>Location: "+results[i].vicinity+"</p>";
}
// $("#list").append( "< text</");
// document.getElementById("list").innerHTML = "some text";

}
// document.getElementById("list").innerHTML = "some text";
// $("#list").append( "< text</");
// document.getElementById('list').innerHTML = "some text";

}

//
// creare single marker function
function createMarkerHotel(obj) {
// prepare new Marker object
var mark = new google.maps.Marker({
position: obj.geometry.location,
map: map,
title: obj.name,
animation: google.maps.Animation.BOUNCE
});
markers.push(mark);
// prepare info window
var infowindow = new google.maps.InfoWindow({

content: '<div><img src="' + obj.icon + '" heigh=30 width=30/><br>' + obj.name +
'<br>Rating: ' + obj.rating + '<br>Vicinity: ' + obj.vicinity + '</div>'
});
// add event handler to current marker
google.maps.event.addListener(mark, 'click', function() {
clearInfos();
infowindow.open(map,mark);
});
infos.push(infowindow);
}



// create markers (from 'findPlaces' function)
function createMarkersATM(results, status) {

  directoryATM(results);


if (status == google.maps.places.PlacesServiceStatus.OK) {
// if we have found something - clear map (overlays)
clearOverlays();
// and create new markers by search result
for (var i = 0; i < results.length; i++) {

createMarkerATM(results[i]);
// $("#list").append( "< text</");
// document.getElementById("list").innerHTML = "some text";
// value=value+"<p><img src="+results[i].icon+" alt='' class='circle'><span class='title red-text text-lighten-2'>"+results[i].name+"</span>Location: "+results[i].vicinity+"</p>";
}
// $("#list").append( "< text</");
// document.getElementById("list").innerHTML = "some text";

}
// document.getElementById("list").innerHTML = "some text";
// $("#list").append( "< text</");
// document.getElementById('list').innerHTML = "some text";

}

//
// creare single marker function
function createMarkerATM(obj) {
// prepare new Marker object
var mark = new google.maps.Marker({
position: obj.geometry.location,
map: map,
title: obj.name,
animation: google.maps.Animation.BOUNCE
});
markers.push(mark);
// prepare info window
var infowindow = new google.maps.InfoWindow({

content: '<div><img src="' + obj.icon + '" heigh=30 width=30 /><br>' + obj.name +
'<br>Rating: ' + obj.rating + '<br>Vicinity: ' + obj.vicinity + '</div>'
});
// add event handler to current marker
google.maps.event.addListener(mark, 'click', function() {
clearInfos();
infowindow.open(map,mark);
});
infos.push(infowindow);
}


function directoryATM(results)
{
  var value="";
  console.log("im here");
  console.log(results);

  for (var i = 0; i < results.length; i++) {

    value=value+"<p><img src="+results[i].icon+" alt='' class='square' width=40 height=40><br><span class='title blue-text text-lighten-2'>"+results[i].name+"</span><br>Location: "+results[i].vicinity+"<br>Rating: "+results[i].rating+"<br><button id = \"btn-atm\" class=\"btn waves-effect waves-light col s12 blue darken-4\" onclick=requestCard()>Request Card</button></p>";


  }
  document.getElementById('list').innerHTML = value;

}


//for the contacts
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
console.log(navigator.contacts);
}