import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Mapbox from '../../pages/Mapbox/Mapbox';
import OpenStreetMap from '../../pages/OpenStreetMap/OpenStreetMap';

function App() {

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Mapbox}></Route>
        <Route path='/openstreetmap' exact component={OpenStreetMap}></Route>
      </Switch>
    </Router>
  );

}

export default App;
