import React, { Component } from 'react';
import { Link } from 'react-router';
import { Tabs, Tab } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class MasterDataToc extends Component {
  static contextTypes = {
    appState: React.PropTypes.object,
    router: React.PropTypes.object
  };

  render() {
    const mdManager = this.context.appState.mdManager;

    console.log('MasterDataToc.render()');

    return (
      <Tabs defaultActiveKey='costcenters' animation={false} onSelect={this.handleSelect} id='master-data-tabs'>
        {mdManager.list().map(i =>
          <Tab eventKey={i} title={mdManager[i].displayName} key = {i}>
            {this.props.children}
          </Tab>
        )}
      </Tabs>
    );
  }

  handleSelect = (eventKey) => {
    const path = `/md/${eventKey}`;
    this.context.router.push(path);
  }

  componentWillMount() {
    const mdList = this.context.appState.mdManager.list();
    this.handleSelect(mdList[0]); // TODO: fix double rendering at first call
  }
}
