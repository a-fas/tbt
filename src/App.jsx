import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { routes } from './router.jsx';
import './App.less';

@observer
class App extends Component {

  getChildContext() {
    return {appState: this.props.appState};
  }

  render() {
    return routes;
  }
};

App.childContextTypes = { // ??? Why not in class declaration ???
  appState: React.PropTypes.object
};

export default App;
