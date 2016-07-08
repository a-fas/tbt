import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { routes } from './router.jsx';
import './App.less';

@observer
class App extends Component {
  static childContextTypes = {
    appState: React.PropTypes.object
  };

  getChildContext() {
    return {appState: this.props.appState};
  }

  render() {
    return routes;
  }
};

export default App;
