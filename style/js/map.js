var map = L.map('map').setView([51.908, 8.375], 13);
L.tileLayer('http://{s}.tile.cloudmade.com/6fcd2a1572a349a28584128285de2cf5/997/256/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
  maxZoom: 18
}).addTo(map);
var marker = L.marker([51.9080892, 8.3753808]).addTo(map);
marker.bindPopup("<b>Wolkenschieber e.v</b><br>Hohenzollernstr 22").openPopup();