import {TileLayer} from '@deck.gl/geo-layers';
import {BitmapLayer, PathLayer} from '@deck.gl/layers';

const showBorder = false;
const onTilesLoad = null;

const devicePixelRatio = (typeof window !== 'undefined' && window.devicePixelRatio) || 1;

const OpenStreetMapTileLayer = new TileLayer({
  data: [
    'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
    'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
    'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png'
  ],

  maxRequests: 20,
  pickable: true,
  onViewportLoad: onTilesLoad,
  autoHighlight: showBorder,
  highlightColor: [60, 60, 60, 40],
  // https://wiki.openstreetmap.org/wiki/Zoom_levels
  minZoom: 0,
  maxZoom: 19,
  tileSize: 512 / devicePixelRatio,

  renderSubLayers: props => {
    const {
      bbox: {west, south, east, north}
    } = props.tile;

    return [
      new BitmapLayer(props, {
        data: null,
        image: props.data,
        bounds: [west, south, east, north]
      }),
      showBorder &&
        new PathLayer({
          id: `${props.id}-border`,
          visible: props.visible,
          data: [[[west, north], [west, south], [east, south], [east, north], [west, north]]],
          getPath: d => d,
          getColor: [255, 0, 0],
          widthMinPixels: 4
        })
    ];
  }
});

export default OpenStreetMapTileLayer;