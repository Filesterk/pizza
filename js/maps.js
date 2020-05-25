function initMap() 
{
  var element = document.getElementById('map');
  var options = {
    zoom: 8,
    center: {lat: 47.83875, lng: 35.139239}            
};
  var myMap = new google.maps.Map(element, options);
  var markers = [
  {
    coordinates: {lat: 47.82289, lng: 35.19031},
    image: 'https://img.icons8.com/windows/2x/circled-down-left-2.png',
    info: '<h3>Наш основной офис</h3>'
  },
  {
   coordinates: {lat: 48.4500000, lng: 34.9833300},
   info:'<h1>Привезем из Днепра</h1>'
  }
];     

for(var i = 0; i<markers.length; i++)
{
  addMarker(markers[i]);
}
function addMarker(properties) {
    var marker = new google.maps.Marker({
      position: properties.coordinates,
      map: myMap,
    });
    if(properties.image)
    {
      marker.setIcon(properties.image);
    }
    if(properties.info)
    {
      var InfoWindow = new google.maps.InfoWindow({
      content: properties.info
    });
    marker.addListener('click', function(){
      InfoWindow.open(myMap, marker);
      })
    }    
  }
}