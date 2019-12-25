// Geocoder

var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    placeholder: 'Search for places you love…',
    mapboxgl: mapboxgl
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));