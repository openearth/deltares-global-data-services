const shoreLineConfig = [
  {
    id: "shoreline-profiles",
    type: "symbol",
    source: {
      type: "vector",
      url: "mapbox://camvdvries.a95za8o5"
    },
    "minzoom": 9,
    "source-layer": "ShorelineMonitorPoint-cpol2b",
    layout: {
      "text-field": [
        "step",
        ["get", "Value"],
        "――――――",
        -5,
        "―――――",
        -4,
        "――――",
        -3,
        "―――",
        -2,
        "――",
        -1,
        "-",
        0,
        "―",
        1,
        "――",
        2,
        "―――",
        3,
        "――――",
        4,
        "―――――",
        5,
        "――――――"
      ],
      "text-anchor": [
        "step",
        ["get", "Value"],
        "left",
        0,
        "right"
      ],
      "text-font": [
        "Overpass Mono Bold",
        "Arial Unicode MS Regular"
      ],
      "text-rotate": [
        "interpolate",
        ["linear"],
        ["get", "Angle"],
        -3.14143155771224,
        360,
        3.1413780228666,
        0
      ],
      "text-size": [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        5,
        22,
        40
      ],
      "text-allow-overlap": true,
      "text-rotation-alignment": "map"
    },
    paint: {
      "text-color": [
        "interpolate",
        ["linear"],
        ["get", "NormalizedValue"],
        -1,
        "hsl(359, 79%, 47%)",
        -0.5,
        "hsl(30, 98%, 69%)",
        0,
        "hsl(60, 100%, 87%)",
        0.5,
        "hsl(88, 59%, 63%)",
        1,
        "hsl(139, 70%, 35%)"
      ],
      "text-translate-anchor": "map"
    }
  },
  {
    id: "shoreline-profiles-hover",
    type: "symbol",
    source: {
      type: "vector",
      url: "mapbox://camvdvries.a95za8o5"
    },
    "minzoom": 9,
    "source-layer": "ShorelineMonitorPoint-cpol2b",
    layout: {
      "text-field": [
        "step",
        ["get", "Value"],
        "――――――",
        -5,
        "―――――",
        -4,
        "――――",
        -3,
        "―――",
        -2,
        "――",
        -1,
        "-",
        0,
        "―",
        1,
        "――",
        2,
        "―――",
        3,
        "――――",
        4,
        "―――――",
        5,
        "――――――"
      ],
      "text-anchor": [
        "step",
        ["get", "Value"],
        "left",
        0,
        "right"
      ],
      "text-font": [
        "Overpass Mono Bold",
        "Arial Unicode MS Regular"
      ],
      "text-rotate": [
        "interpolate",
        ["linear"],
        ["get", "Angle"],
        -3.14143155771224,
        360,
        3.1413780228666,
        0
      ],
      "text-size": [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        6,
        22,
        42
      ],
      "text-allow-overlap": true,
      "text-rotation-alignment": "map"
    },
    paint: {
      "text-color": "#4538ff",
      "text-translate-anchor": "map"
    },
    'filter': ['==', 'Transect_id', '']
  },
  {
    id: "shoreline-aggregated-glow-middle",
    type: "circle",
    source: {
      type: "vector",
      url: "mapbox://gerbenha.062slfsd"
    },
    "minzoom": 4,
    "maxzoom": 9,
    "source-layer": "Aggregatedpointsz5-bwuc0m",
    paint: {
      "circle-radius": [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        2,
        9,
        18
      ],
      "circle-blur": 2,
      "circle-color": "#ffffff"
    }
  },
  {
    id: "shoreline-aggregated-middle",
    type: "circle",
    source: {
      type: "vector",
      url: "mapbox://gerbenha.062slfsd"
    },
    "minzoom": 4,
    "maxzoom": 9,
    "source-layer": "Aggregatedpointsz5-bwuc0m",
    paint: {
      "circle-radius" : [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        1,
        9,
        20
      ],
      "circle-color": [
        "step",
        ["get", "NormalizedValue"],
        "#D7191C",
        -0.6,
        "#FDAE61",
        -0.2,
        "#FFFFBF",
        0.2,
        "#A6D96A",
        0.6,
        "#1A9641"
      ],
      "circle-opacity": [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        0.28,
        9,
        1
      ],
      "circle-blur": 1,
    }
  },
  {
    id: "shoreline-aggregated-glow",
    type: "circle",
    source: {
      type: "vector",
      url: "mapbox://gerbenha.bkxj8nc1"
    },
    "minzoom": 0,
    "maxzoom": 4,
    "source-layer": "Aggregatedpointsz0-7r6kje",
    paint: {
      "circle-radius": [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        2,
        9,
        18
      ],
      "circle-blur": 2,
      "circle-color": "#ffffff"
    }
  },
  {
    id: "shoreline-aggregated",
    type: "circle",
    source: {
      type: "vector",
      url: "mapbox://gerbenha.bkxj8nc1"
    },
    "minzoom": 0,
    "maxzoom": 4,
    "source-layer": "Aggregatedpointsz0-7r6kje",
    paint: {
      "circle-radius" : [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        1,
        9,
        20
      ],
      "circle-color": [
        "step",
        ["get", "NormalizedValue"],
        "#D7191C",
        -0.6,
        "#FDAE61",
        -0.2,
        "#FFFFBF",
        0.2,
        "#A6D96A",
        0.6,
        "#1A9641"
      ],
      "circle-opacity": [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        0.28,
        9,
        1
      ],
      "circle-blur": 1,
    }
  }
];

const glossisConfig = [
    {
        id: "glossis-time00",
        type: "raster",
        source: {
          type: "raster",
          url: "mapbox://gerbenha.1skx6j5a"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_0_20-89eweh",
    },
     {
        id: "glossis-time01",
        type: "raster",
        source: {
          type: "raster",
          url: "mapbox://gerbenha.be8uw9h2"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_1_20-doemuo",
    },
     {
        id: "glossis-time02",
        type: "raster",
        source: {
          type: "raster",
          url: "mapbox://gerbenha.8aq9bpwv"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_2_20-5q63i7",
    },
     {
        id: "glossis-time03",
        type: "raster",
        source: {
          type: "raster",
          url: "mapbox://gerbenha.46georhf"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_3_20-6ku9rx",
    },
     {
        id: "glossis-time04",
        type: "raster",
        source: {
          type: "raster",
          url: "mapbox://gerbenha.7j14uquf"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_4_20-16d3qd",
    },
     {
        id: "glossis-time05",
        type: "raster",
        source: {
          type: "raster",
          url: "mapbox://gerbenha.3nrshcar"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_5_20-aa3c8b",
    },
     {
        id: "glossis-time06",
        type: "raster",
        source: {
          type: "raster",
          url: "mapbox://gerbenha.7jd22wu1"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_6_20-bsfclk",
    },
     {
        id: "glossis-time07",
        type: "raster",
        source: {
          type: "raster",
          url: "mapbox://gerbenha.6r4prsoy"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_7_20-7k4c9y",
    },
	{
        id: "glossis-time08",
        type: "raster",
        source: {
          type: "raster",
          url: "mapbox://gerbenha.au7iw93w"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_8_20-6gcwkt",
    },
	{
        id: "glossis-time09",
        type: "raster",
        source: {
          type: "raster",
          url: "mapbox://gerbenha.78ccnxbb"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_9_20-cpz51q",
    },
	{
        id: "glossis-time10",
        type: "raster",
        source: {
          type: "raster",
          url: "mapbox://gerbenha.artklv18"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_10_2-8k5bts",
    },
	{
        id: "glossis-time11",
        type: "raster",
        source: {
          type: "raster",
          url: "mapbox://gerbenha.ar18e14w"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_11_2-12uy4s",
    },
	{
        id: "glossis-time12",
        type: "raster",
        source: {
          type: "raster",
          url: "mapbox://gerbenha.4m3556ag"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_12_2-82os0q",
    },
	{
        id: "glossis-time13",
        type: "raster",
        source: {
          type: "raster",
          url: "mapbox://gerbenha.3awr4h9v"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_13_2-5jtffo",
    },
	{
        id: "glossis-time14",
        type: "raster",
        source: {
          type: "raster",
          url: "mapbox://gerbenha.d3pqg4v0"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_14_2-axcapt",
    },
	{
        id: "glossis-time15",
        type: "raster",
        source: {
          type: "raster",
          url: "mapbox://gerbenha.8fuv5wbi"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_15_2-1v9xxl",
    }
]