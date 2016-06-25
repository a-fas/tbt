import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { observer } from 'mobx-react';
import MasterDataList from './MasterDataList';

@observer
class MasterData extends Component {
  static contextTypes = {
    appState: React.PropTypes.object
  };

  render() {
    const mdManager = this.context.appState.mdManager;

    if (!mdManager.hasData(this.props.params.mdname)) {
      return(<div>Unknown master data type</div>)
    }

    const md = mdManager[this.props.params.mdname];

    return (
      <div>
        <Button onClick={this.handleClick}>ClickMe</Button>
        <MasterDataList masterData={md}/>
      </div>
    );
  }

  handleClick = () => {
    let md = this.context.appState.mdManager[this.props.params.mdname];
    md.add({id: md.items.length+1, name: 'Hello'});
  }
}

export default MasterData;
