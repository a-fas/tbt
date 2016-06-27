import React, { Component } from 'react';
import { Tabs, Tab, Col } from 'react-bootstrap';

export default class MasterDataToc extends Component {
  static contextTypes = {
    appState: React.PropTypes.object,
    router: React.PropTypes.object
  };

  render() {
    console.log('MasterDataToc.render()'); // TODO: fix double rendering at first call

    const mdManager = this.context.appState.mdManager;

    return (
      <Col sm={12}>
        <Tabs defaultActiveKey={mdManager.first()}
          animation={false}
          onSelect={this.handleSelect}
          id='master-data-tabs'>

          {mdManager.list().map(i =>
            <Tab eventKey={i.name} title={i.displayName} key = {i.name}>
              {this.props.children}
            </Tab>
          )}

        </Tabs>
      </Col>
    );
  }

  handleSelect = (eventKey) => {
    const path = `/md/${eventKey}`;
    this.context.router.push(path);
  }

  componentWillMount() {
    const mdManager = this.context.appState.mdManager;
    this.handleSelect(mdManager.first()); // TODO: fix double rendering at first call
  }
}
