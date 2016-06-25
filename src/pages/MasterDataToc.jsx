import React, { Component } from 'react';
import { Link } from 'react-router';

export default class MasterDataToc extends Component {
  render() {
    return (
      <div>
        <p>Master data</p>
        <ul>
          <li><Link to="/md/costcenters">Cost centers</Link></li>
          <li><Link to="/md/costelements">Cost elements</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
