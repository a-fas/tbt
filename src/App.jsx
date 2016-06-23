import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import axios from 'axios';

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

    axios.get('https://api.github.com/users/a-fas')
      .then((response) => console.log(response))
      .catch((error)   => console.log(error));

    // try {
    //   const response = await axios.get('https://api.github.com/users/a-fas');
    //   console.log(response.data);
    // } catch (err) {
    //   console.error(err);
    // }

    // this.cCE.add({id: this.cCE.mdlist.length + 1, name: 'holy fuck it works !'});
  }
};

export default App;
