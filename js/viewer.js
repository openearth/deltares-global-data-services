window.onload = function(e)
{
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGVsdGFtYXRzIiwiYSI6ImNqb29kZzJ2azAzNTYzcW9jajQzcWFiNjYifQ.LQ8rLVRd56_KN48gwyum4Q';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v9', //sattelite-v9
        attributionControl: false
    });
    map.addControl(new MapboxGeocoder({accessToken: mapboxgl.accessToken }), 'bottom-right');
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');


    var modes = MapboxDraw.modes;
    modes.draw_rectangle = DrawRectangle.default;

    var draw = new MapboxDraw({
        modes: modes,
        displayControlsDefault: false,
    });
    map.addControl(draw);

    map.on('draw.create', function (layer) {
        var bounds = getBoundingBox(layer);
        map.fitBounds(bounds, {
          padding: {top: 30, bottom:30, left: 30, right: 30}
        });
    });

    const DrawRectangleControl = new DrawRectangleCtrl(draw);
    map.addControl(DrawRectangleControl, 'bottom-right');

    const LoginCtrl = new LoginCtrl();
    map.addControl(LoginCtrl, 'top-right');
    
    AddMouseMoveFadeEvent();
}

//add fadein on mousemove
function AddMouseMoveFadeEvent()
{
    document.getElementById("map").addEventListener("mouseover", function() 
    {
        var controls = document.getElementsByClassName("mapboxgl-control-container");
        for(var i=0; i<controls.length; i++)
        {
            controls[i].classList.add("visible");
        }

    }, {once : true});
}

function getBoundingBox(data) {
    var Bbox = {}, coords, point, latitude, longitude;

    for (var i = 0; i < data.features.length; i++) {
    coords = data.features[i].geometry.coordinates[0];

    for (var j = 0; j < coords.length; j++) {
      longitude = coords[j][0];
      latitude = coords[j][1];
      Bbox.xMin = Bbox.xMin < longitude ? Bbox.xMin : longitude;
      Bbox.xMax = Bbox.xMax > longitude ? Bbox.xMax : longitude;
      Bbox.yMin = Bbox.yMin < latitude ? Bbox.yMin : latitude;
      Bbox.yMax = Bbox.yMax > latitude ? Bbox.yMax : latitude;
    }
    }

    return [[Bbox.xMax, Bbox.yMin], [Bbox.xMin, Bbox.yMax]]; // [[s,w][n,e]]
}