import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { observer } from 'mobx-react';
import MasterDataList from './MasterDataList';

@observer
class MasterData extends Component {
  render() {
    const mdManager = this.context.appState.mdManager;

    if (!mdManager.hasData(this.props.params.mdname)) {
      return(<div>Unknown master data type</div>)
    }

    const md = mdManager[this.props.params.mdname];

    return (
      <div>
        <h1>{md.displayName}</h1>
        <MasterDataList masterData={md}/>
        <Button onClick={this.onClick}>ClickMe</Button>
      </div>
    );
  }

  onClick = () => {
    let md = this.context.appState.mdManager[this.props.params.mdname];
    md.add({id: md.items.length+1, name: 'Hello'});
  }

}

MasterData.contextTypes = {
  appState: React.PropTypes.object
};

export default MasterData;
