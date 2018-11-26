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
      url: "mapbox://gerbenha.6z18bebw"
    },
    "minzoom": 4,
    "maxzoom": 9,
    "source-layer": "Aggregatedpointsz5-bsf5g2",
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
      url: "mapbox://gerbenha.6z18bebw"
    },
    "minzoom": 4,
    "maxzoom": 9,
    "source-layer": "Aggregatedpointsz5-bsf5g2",
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
      url: "mapbox://gerbenha.0palcbmn"
    },
    "minzoom": 0,
    "maxzoom": 4,
    "source-layer": "Aggregatedpointsz0-0vqo71",
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
      url: "mapbox://gerbenha.0palcbmn"
    },
    "minzoom": 0,
    "maxzoom": 4,
    "source-layer": "Aggregatedpointsz0-0vqo71",
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
          url: "mapbox://gerbenha.47ka8d9y"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_0_20-0qgke6",
    },
     {
        id: "glossis-time01",
        type: "line",
        source: {
          type: "vector",
          url: "mapbox://gerbenha.azumqgwe"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_1_20-9t4tet",
    },
     {
        id: "glossis-time02",
        type: "line",
        source: {
          type: "vector",
          url: "mapbox://gerbenha.8itrs04b"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_2_20-8we509",
    },
     {
        id: "glossis-time03",
        type: "line",
        source: {
          type: "vector",
          url: "mapbox://gerbenha.6ovgqz7k"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_3_20-c7unm4",
    },
     {
        id: "glossis-time04",
        type: "line",
        source: {
          type: "vector",
          url: "mapbox://gerbenha.bhr5y5yw"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_4_20-75go4a",
    },
     {
        id: "glossis-time05",
        type: "line",
        source: {
          type: "vector",
          url: "mapbox://gerbenha.0ofx6kdm"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_5_20-6fwich",
    },
     {
        id: "glossis-time06",
        type: "line",
        source: {
          type: "vector",
          url: "mapbox://gerbenha.9aau2iir"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_6_20-1v28sq",
    },
     {
        id: "glossis-time07",
        type: "line",
        source: {
          type: "vector",
          url: "mapbox://gerbenha.4c0vshvl"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_7_20-3u5dbj",
    },
         {
        id: "glossis-time08",
        type: "line",
        source: {
          type: "vector",
          url: "mapbox://gerbenha.dolr3xdo"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_8_20-4l6z2t",
    },
         {
        id: "glossis-time09",
        type: "line",
        source: {
          type: "vector",
          url: "mapbox://gerbenha.1rfnjvb4"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_9_20-4vtohy",
    },
         {
        id: "glossis-time10",
        type: "line",
        source: {
          type: "vector",
          url: "mapbox://gerbenha.6dc7yfx3"
        },
        "source-layer": "DflowFM_gtsm_wl_timestep_10_2-96fuya",
    },
]