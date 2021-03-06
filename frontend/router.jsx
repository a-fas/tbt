import React from 'react';
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router';
import AppFrame from './pages/AppFrame';
import About    from './pages/About';
import Home     from './pages/Home';
import MasterDataToc from './pages/MasterDataToc';
import MasterData    from './pages/MasterData';

export var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={AppFrame}>
      <IndexRoute component={Home}/>
      <Route path="/md" component={MasterDataToc}>
        <Route path="/md/:mdname" component={MasterData}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
);
