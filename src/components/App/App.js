import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import DeckMap from '../../pages/DeckMap/DeckMap';

function App() {

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={DeckMap}></Route>
      </Switch>
    </Router>
  );

}

export default App;
