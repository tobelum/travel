var geocoder;
var map;
var markers = Array();
var infos = Array();
var value="";
var lat;
var long;


$(document).ready(
 function() {
  $(".btn-atm").click(function() {

   $(".atmorder").fadeToggle();
  });
 }
);

function myLocation() {

navigator.geolocation.getCurrentPosition(onSuccess, onError);

}


var onSuccess = function(position) {


      lat = position.coords.latitude;
      long = position.coords.longitude;

      initialize();

    };



    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }




function initialize() {

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


map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);

var marker = new google.maps.Marker({
  position: myLatlng,
  map: map,
  // animation: google.maps.Animation.BOUNCE
 });
 marker.setMap(map);


}
// clear overlays function
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

// find address function
function findAddress() {

  // google.maps.event.addDomListener(window, 'load', initialize);
  initialize();

var address = document.getElementById("search").value;
// script uses our 'geocoder' in order to find location by address name
geocoder.geocode( { 'address': address}, function(results, status) {
if (status == google.maps.GeocoderStatus.OK) { // and, if everything is ok
// we will center map
var addrLocation = results[0].geometry.location;
map.setCenter(addrLocation);
// store current coordinates into hidden variables
document.getElementById('lat').value = results[0].geometry.location.lat();
document.getElementById('lng').value = results[0].geometry.location.lng();
// and then - add new custom marker
var addrMarker = new google.maps.Marker({
position: addrLocation,
map: map,
title: results[0].formatted_address
// icon: 'marker.png'
});
} else {
// alert('Geocode was not successful for the following reason: ' + status);
}
});
}



// find custom places function
function findATM() {
// prepare variables (filter)
var type = "atm";
console.log(type);
var radius = 5000;
// var keyword = document.getElementById('gmap_keyword').value;
var lat = document.getElementById('lat').value;
var lng = document.getElementById('lng').value;
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

function findBank() {
// prepare variables (filter)
var type = "bank";
console.log(type);
var radius = 5000;
// var keyword = document.getElementById('gmap_keyword').value;
var lat = document.getElementById('lat').value;
var lng = document.getElementById('lng').value;
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
var lat = document.getElementById('lat').value;
var lng = document.getElementById('lng').value;
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


function findFood() {
// prepare variables (filter)
var type = "food";
console.log(type);
var radius = 5000;
// var keyword = document.getElementById('gmap_keyword').value;
var lat = document.getElementById('lat').value;
var lng = document.getElementById('lng').value;
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


function findHospital() {
// prepare variables (filter)
var type = "hospital";
console.log(type);
var radius = 5000;
// var keyword = document.getElementById('gmap_keyword').value;
var lat = document.getElementById('lat').value;
var lng = document.getElementById('lng').value;
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
var lat = document.getElementById('lat').value;
var lng = document.getElementById('lng').value;
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

function findPolice() {
// prepare variables (filter)
var type = "police";
console.log(type);
var radius = 5000;
// var keyword = document.getElementById('gmap_keyword').value;
var lat = document.getElementById('lat').value;
var lng = document.getElementById('lng').value;
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

function findUniversity() {
// prepare variables (filter)
var type = "university";
console.log(type);
var radius = 15000;
// var keyword = document.getElementById('gmap_keyword').value;
var lat = document.getElementById('lat').value;
var lng = document.getElementById('lng').value;
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

    value=value+"<p><img src="+results[i].icon+" alt='' class='square' width=40 height=40><br><span class='title blue-text text-lighten-2'>"+results[i].name+"</span><br>Location: "+results[i].vicinity+"<br>Rating: "+results[i].rating+"<br><button class=\"btn waves-effect waves-light col s12 blue darken-4\" onclick=addBook()>Add a booking</button></p>";

  }
  document.getElementById('list').innerHTML = value;

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



// create markers (from 'findPlaces' function)
function createMarkers(results, status) {

  directory(results);




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
// $("#list").append( "< text</");
// document.getElementById("list").innerHTML = "some text";

}
// document.getElementById("list").innerHTML = "some text";
// $("#list").append( "< text</");
// document.getElementById('list').innerHTML = "some text";

}


// creare single marker function
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








// initialization
google.maps.event.addDomListener(window, 'load', initialize);


$(document).ready(function(){
   $('.collapsible').collapsible();

 });

 $(document).ready(function(){
      $('.carousel').carousel();
    });

    $(document).ready(function(){
      $('ul.tabs').tabs();
    });







































































var currentObject = null;
var userID;
var array = [];
// var objArray;

//Displays email alert message

function addBook() {
    alert("ss");
}

function requestCard() {
    alert("ss");
}



function email(){
  alert("An email has been sent to the admin to reset your password");
}

/**
*@param server response, status
*Redirects to the home page after login
**/
function LoginComplete(xhr,status){
  console.log(xhr.responseText);

  var obj = JSON.parse(xhr.responseText);

  if(obj.result==1){
    sessionStorage.id=obj.userID;
    // sessionStorage.id=obj.username;

    window.location="#landingPage";
  }
  else{

      alert(obj.message);
    }

}

//Passes the users information to be logged in
function LoginUser(){
  var username=$("#Username").val();
  var password=$("#Password").val();
  var theUrl="frameajax.php?cmd=6&username="+username+"&password="+password;
//  prompt("url", theUrl);
  $.ajax(theUrl,{
    async:true,
    complete:LoginComplete
  });
}





/**
*Displays message concerning whether user
* was added or not
**/
function addUserComplete(xhr,status){
console.log(xhr.responseText);
// var obj = $.parseJSON(xhr.responseText);
    // if(obj.result==1){
    // userID=obj.userID;

    alert("Welcome To Chercher!");
    /*Fields emptied after adding User*/

    $("#firstname").val("");
    $("#lastname").val("");
    $("#username").val("");
    $("#password").val("");
    $("#email").val("");
    $("#organization").val("");
    $("#telephone").val("");
    window.location="index.html";
    // }
    // else{
    // alert(obj.message);
    // }

}

/**
*Allows the admin to add users
**/
function addUser(){
//  alert("Welcome To Chercher signup!");
  var firstname = $("#firstname").val();
  var lastname = $("#lastname").val();
  var username=$("#username").val();
  var password=$("#password").val();
  var email=$("#email").val();
  var organization=$("#organization").val();
  var telephone = $("#telephone").val();


  var theUrl="frameajax.php?cmd=5&firstname="+firstname+
  "&lastname="+lastname+"&username="+username+"&password="
  +password+"&email="+email+"&organization="+organization+"&telephone="+telephone;

  window.location="index.html";
  $.ajax(theUrl,
    {async:true,
      complete:addUserComplete	});
}




function getPoolComplete(xhr,status){
  console.log(xhr.responseText);
  var obj = JSON.parse(xhr.responseText);


if(obj!=null){
  // window.location="join_pool.html";
  $('.displaypools').html("");
    for (var i = 0; i < obj.length; i++)
    {

      objArray = {poolid:obj[i].POOL_ID, userid:obj[i].USER_ID};
      array.push(objArray);
      //console.log(objArray);
      console.log(array);

      $('.displaypools').append("<a href='#'id='"+i+"' class='pools'>"+
                                                "<div style='font-size: 90%;' class='row'>"+
                                                "<div class='col s12 m6'>"+
                                                "<div class='card black'>"+
                                                "<div class='card-content orange-text'>"+
                                                "<span><u>Destination</u>: "+obj[i].POOL_DESTINATION+"</span>"+"<span style='padding-left: 3%;'><u>Departure time: </u>"+obj[i].POOL_DEPARTURE+"</span>"+
                                                "<p><u>Unique Pool ID</u>: "+obj[i].POOL_ID+"</p>"+
                                                "<span><u>Name of Pool Creator</u>: "+obj[i].FIRSTNAME+"</span>"+"<span> "+obj[i].LASTNAME+"</span>"+
                                                "<p><u>Pool Name</u>: "+obj[i].POOL_NAME+"</p>"+
                                                "<p><u>Pool Max. Capacity</u>: "+obj[i].MAX_CAPACITY+"</p>"+
                                                "</div>"+
                                                "</div>"+
                                                "</div>"+
                                                "</div>"+
                                                "</a>");

    }
    $(".pools").click(function() {

    // isFull();
    var confirm = prompt("Y or N to confirm.");


    if (confirm != null) {
   joinPool($(".pools").attr("id"));
    }
    else {
  alert("Error executing instruction");
      }
     });


} else {
  alert("Bad instruction");
}

}

function getPool(){

  var theUrl="frameajax.php?cmd=2";

  $.ajax(theUrl,{
    async:true,
    complete:getPoolComplete
  });
}



function getReportComplete(xhr,status){
  console.log(xhr.responseText);
  var obj = JSON.parse(xhr.responseText);

  if(obj!=null){
    // window.location="join_pool.html";
    $('.displayreports').html("");

    for (var i = 0; i < obj.length; i++)
    {
      $('.displayreport').append("<a href='#'id='"+i+"' class='pools'>"+
                                                "<div style='font-size: 90%;' class='row'>"+
                                                "<div class='col s12 m6'>"+
                                                "<div class='card black'>"+
                                                "<div class='card-content orange-text'>"+
                                                +"<span>"+obj[i].DATE_CREATED+"</span><br>"+
                                                "<span><u>Your Pool ID's</u>: "+obj[i].POOL_ID+"<br></span>"+"<span style='padding-left: 0%;'><u>Names of your pool</u>: "+obj[i].POOL_NAME+"<br></span>"+
                                                "<p><u>Max Capacity: </u>: "+obj[i].MAX_CAPACITY+"<br></p>"+
                                                "<span><u>Your desintation was/is: </u>: "+obj[i].POOL_DESTINATION+"<br></span>"+"<span><u>Your departure time was/is</u>: "+obj[i].POOL_DEPARTURE+"<br></span>"+
                                                "</div>"+
                                                "</div>"+
                                                "</div>"+
                                                "</div>"+
                                                "</a>");

    }


}
}





function getReport(){
    var i = sessionStorage.id;
    var theUrl="frameajax.php?cmd=7&id="+i;

    $.ajax(theUrl,
      {async:true,
        complete:getReportComplete});

}




function getNews(){

    var theUrl="frameajax.php?cmd=8";
alert("here");
    $.ajax(theUrl,
      {async:true,
        complete:getNewsComplete});

}






//Tool tip for editing information
$(function() {
  $('.content').hover(function() {
    $('#edit_info').css('display', 'block');
  }, function() {
    $('#edit_info').css('display', 'none');
  });
});
