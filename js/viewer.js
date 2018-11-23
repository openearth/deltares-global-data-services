window.onload = function(e)
{
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGVsdGFtYXRzIiwiYSI6ImNqb29kZzJ2azAzNTYzcW9jajQzcWFiNjYifQ.LQ8rLVRd56_KN48gwyum4Q';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v9', //sattelite-v9
        attributionControl: false
    });
    map.addControl(new MapboxGeocoder({accessToken: mapboxgl.accessToken }), 'bottom-right');
    
    map.on('load', function()
    {
        const layerControl = new LayerMenuCtrl();
        map.addControl(layerControl, "top-right");
        layerControl.addLayer('Shoreline', shoreLineConfig);
        layerControl.addLayer('Glossis', glossisConfig);

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
            layerControl.showList();
        });

        const drawRectangleControl = new DrawRectangleCtrl(draw);
        map.addControl(drawRectangleControl, 'bottom-right');
    });
    
    const loginControl = new LoginCtrl();
    map.addControl(loginControl, 'top-right');
    
    var menuElem = document.getElementById("menu-left");
    const hamburgerMenuControl = new ToggleElementButtonCtrl(menuElem, "hamburger-menu-toggle");
    map.addControl(hamburgerMenuControl, 'top-left');
    document.getElementById("icon-menu-close").addEventListener("click", function(e) 
    {
        menuElem.classList.remove('visible');
    });
    
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    
    AddMouseMoveFadeEvent(document.getElementsByClassName("mapboxgl-control-container")[0]);
}

//add fadein on mousemove
function AddMouseMoveFadeEvent(elementToFade)
{
    var mouseTimer;
    document.body.addEventListener("mousemove", function() 
    {
            clearTimeout(mouseTimer);
            elementToFade.classList.add("visible");
           
            mouseTimer = setTimeout( function() 
            {
               elementToFade.classList.remove("visible"); 
            }, 5000);
    });
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