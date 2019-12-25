// Interactions

document.getElementById('listing-group').addEventListener('change', function (e) {
    var handler = e.target.id;
    if (e.target.checked) {
        map[handler].enable();
    } else {
        map[handler].disable();
    }
});

// Add zoom and rotation controls to the map.

map.addControl(new mapboxgl.NavigationControl());
