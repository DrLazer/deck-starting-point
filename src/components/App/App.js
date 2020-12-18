import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Mapbox from '../../pages/Mapbox/Mapbox';
import OpenStreetMap from '../../pages/OpenStreetMap/OpenStreetMap';
import Accidents from '../../pages/Accidents/Accidents';
import MapTypes from '../../components/Map/MapTypes';

function App() {

  return (
    <Router>
      <Switch>
        <Route path='/' exact render={() => <Mapbox mapType={MapTypes.MAPBOX.LIGHT} key={1} />}></Route>
        <Route path='/dark' exact render={() => <Mapbox mapType={MapTypes.MAPBOX.DARK} key={2} />}></Route>
        <Route path='/street' exact render={() => <Mapbox mapType={MapTypes.MAPBOX.STREET} key={3} />}></Route>
        <Route path='/outdoors' exact render={() => <Mapbox mapType={MapTypes.MAPBOX.OUTDOORS} key={4} />}></Route>
        <Route path='/satellite' exact render={() => <Mapbox mapType={MapTypes.MAPBOX.SATELLITE} key={5} />}></Route>
        <Route path='/accidents' exact render={() => <Accidents mapType={MapTypes.MAPBOX.LIGHT} key={6} />}></Route>
        <Route path='/openstreetmap' exact component={OpenStreetMap}></Route>
      </Switch>
    </Router>
  );

}

export default App;
