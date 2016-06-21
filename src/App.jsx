import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import MDPane from './mdpane.jsx';
import {CostCenters, CostElements} from './mdobj.js';

import './App.less';

@observer
class App extends Component {
  render() {

    return (
      <div className='page'>
        <MDPane title='CostCenters' md={new CostCenters} />
        <MDPane title='CostElements' md={new CostElements} />
        <DevTools />
      </div>
    );
  }

  onReset = () => {
    this.props.appState.resetTimer();
  }
};

export default App;
