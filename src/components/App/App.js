import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Mapbox from '../../pages/Mapbox/Mapbox';

function App() {

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Mapbox}></Route>
      </Switch>
    </Router>
  );

}

export default App;
