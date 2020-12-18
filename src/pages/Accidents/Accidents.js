import React, {useState, useMemo} from 'react';
import DeckGL from '@deck.gl/react';
import {StaticMap} from 'react-map-gl';
import {scaleLinear, scaleThreshold} from 'd3-scale';
import {GeoJsonLayer} from '@deck.gl/layers';
import Settings from '../../Settings'

import './accidents.scss';

import SideMenu from '../../components/SideMenu/SideMenu';
import Map from '../../components/Map/Map';

export default function Accidents(props) {

  const [hoverInfo, setHoverInfo] = useState({})

  const viewState = {
    longitude: -122.41669,
    latitude: 37.7853,
    zoom: 13,
    maxZoom: 20,
    maxPitch: 89,
    pitch: 0,
    bearing: 0
  }

  // Source data GeoJSON
  const DATA_URL = {
    ACCIDENTS: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/highway/accidents.csv',
    ROADS: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/highway/roads.json'
  };

  const COLOR_SCALE = scaleThreshold()
  .domain([0, 4, 8, 12, 20, 32, 52, 84, 136, 220])
  .range([
    [26, 152, 80],
    [102, 189, 99],
    [166, 217, 106],
    [217, 239, 139],
    [255, 255, 191],
    [254, 224, 139],
    [253, 174, 97],
    [244, 109, 67],
    [215, 48, 39],
    [168, 0, 0]
  ]);

  function aggregateAccidents(accidents) {
    const incidents = {};
    const fatalities = {};
  
    if (accidents) {
      accidents.forEach(a => {
        const r = (incidents[a.year] = incidents[a.year] || {});
        const f = (fatalities[a.year] = fatalities[a.year] || {});
        const key = getKey(a);
        r[key] = a.incidents;
        f[key] = a.fatalities;
      });
    }
    return {incidents, fatalities};
  }

  function getKey({state, type, id}) {
    return `${state}-${type}-${id}`;
  }  

  const WIDTH_SCALE = scaleLinear()
    .clamp(true)
    .domain([0, 200])
    .range([10, 2000]);

  let accidents = null;
  let roads = DATA_URL.ROADS;
  let year = 2000; 

  const formatRow = d => ({
    ...d,
    incidents: Number(d.incidents),
    fatalities: Number(d.fatalities)
  });

  require('d3-request').csv(DATA_URL.ACCIDENTS, formatRow, (error, response) => {
    if(!error){
      accidents = response;
      year = response[0].year;
    }
  });

  const {incidents, fatalities} = useMemo(() => aggregateAccidents(accidents), [accidents]);

  const getLineColor = f => {
    if (!fatalities[year]) {
      return [200, 200, 200];
    }
    const key = getKey(f.properties);
    const fatalitiesPer1KMile = ((fatalities[year][key] || 0) / f.properties.length) * 1000;
    return COLOR_SCALE(fatalitiesPer1KMile);
  };

  const getLineWidth = f => {
    if (!incidents[year]) {
      return 10;
    }
    const key = getKey(f.properties);
    const incidentsPer1KMile = ((incidents[year][key] || 0) / f.properties.length) * 1000;
    return WIDTH_SCALE(incidentsPer1KMile);
  };

  const layers = [
    new GeoJsonLayer({
      id: 'geojson',
      data: roads,
      stroked: false,
      filled: false,
      lineWidthMinPixels: 0.5,
      parameters: {
        depthTest: false
      },

      getLineColor,
      getLineWidth,

      pickable: true,
      onHover: setHoverInfo,

      updateTriggers: {
        getLineColor: {year},
        getLineWidth: {year}
      },

      transitions: {
        getLineColor: 1000,
        getLineWidth: 1000
      }
    })
  ];

  return (
    <div>
      <div className='accidents-sidebar'>
        <SideMenu/>
      </div>
      <div className='accidents-main-panel'>
        <div className='accidents-main-panel__map-container'>
          <DeckGL
            pickingRadius={5}
            initialViewState={viewState}
            layers={layers}
            controller={true} >
            <StaticMap 
              mapboxApiAccessToken={Settings.MAPBOX_KEY}
              mapStyle={props.mapType}  preventStyleDiffing={true} />  
          </DeckGL>
        </div>
      </div>
    </div>

  );

}