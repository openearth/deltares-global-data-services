window.onload = function(e)
{
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGVsdGFtYXRzIiwiYSI6ImNqb29kZzJ2azAzNTYzcW9jajQzcWFiNjYifQ.LQ8rLVRd56_KN48gwyum4Q';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v9', //sattelite-v9
        attributionControl: false, 
        zoom: 2
    });
    map.addControl(new MapboxGeocoder({accessToken: mapboxgl.accessToken }), 'bottom-right');

    map.on('load', function()
    {
        const layerControl = new LayerMenuCtrl();
        map.addControl(layerControl, "top-right");
        layerControl.addLayer('Glossis', glossisConfig);
        layerControl.addLayer('Shoreline', shoreLineConfig);

        var GlossisAnimation = new AnimateLayers(glossisConfig, map, 1); //layerArray, map, frames_per_second
        GlossisAnimation.start();

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

        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
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

    AddMouseMoveFadeEvent(document.getElementsByClassName("mapboxgl-control-container")[0]);
}

function AnimateLayers(layers, map, fps) {

    fps = (fps != undefined) ? fps: 20;
    var activeFrame = 0;
    var lastFrame = 0;
    var animation;

    this.start = function()
    {
        animation = setInterval(frame, 1000 / fps);
        function frame() {
            activeFrame++;
            if (activeFrame > layers.length -1)
            {
                activeFrame = 0;
            }
            map.setPaintProperty(layers[lastFrame].id, 'raster-opacity', 0);
            map.setPaintProperty(layers[activeFrame].id, 'raster-opacity', 1);
            //fadeOut(layers[lastFrame].id);  ///too heavy on the browser
            //fadeIn(layers[activeFrame].id);

            lastFrame = activeFrame;
        }
    }

    this.stop = function()
    {
        clearInterval(animation);
    }

    function fadeIn(layerId)
    {
        //get opacity
        var opacity = map.getLayer(layerId).paint.get("raster-opacity");

        var fade = setInterval(fadeInFunc, 100);
        function fadeInFunc () {
            opacity+= 0.1;
            if (opacity > 0.99)
            {
                opacity = 1;
                clearInterval(fade);
            }
            map.setPaintProperty(layerId, 'raster-opacity', opacity);
        }
    }

    function fadeOut(layerId)
    {
        //get opacity
        var opacity = map.getLayer(layerId).paint.get("raster-opacity");

        var fade = setInterval(fadeOutFunc, 100);
        function fadeOutFunc () {
            opacity -= 0.1;
            if(opacity < 0.01)
            {
                opacity = 0;
                clearInterval(fade);
            }
            map.setPaintProperty(layerId, 'raster-opacity', opacity);
        }

    }

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
