import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import MDPane from './mdpane.jsx';
import {CostCenters, CostElements} from './mdobj.js';

import './App.less';

@observer
class App extends Component {
  sCC = {};
  sCE = {};
  
  constructor() {
    super();
    this.cCC = new CostCenters;
    this.cCE = new CostElements;
  }
  
  render() {

    return (
      <div className='page'>
        <MDPane title='CostCenters' md={this.cCC} />
        <MDPane title='CostElements' md={this.cCE} />
        <a href="#" onClick={this.onClick}>Add</a>
        <DevTools />
      </div>
    );
  }
  
  onClick = () => {
    
    this.cCE.add({id: this.cCE.mdlist.length + 1, name: 'holy fuck it works !'});
  }
};

export default App;
