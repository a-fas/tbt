import React, { Component } from 'react';
import { Table, Button, Glyphicon } from 'react-bootstrap';
import { observer } from 'mobx-react';
import MasterDataList from '../components/MasterDataList';

@observer
class MasterData extends Component {
  static contextTypes = {
    appState: React.PropTypes.object
  };

  render() {
    const mdManager = this.context.appState.mdManager;

    if (!mdManager.hasData(this.props.params.mdname)) {
      return <div>Unknown master data type</div>
    } else {
      return (
        <div>
          <Button bsStyle='link' onClick={this.handleClick} className='pull-right'>
            <Glyphicon glyph='plus' style={{paddingRight: '4px'}} />
            Add item
          </Button>
          <MasterDataList masterData={mdManager[this.props.params.mdname]}/>
        </div>
      );
    }
  }

  handleClick = () => {
    let md = this.context.appState.mdManager[this.props.params.mdname];
    md.add({id: md.items.length+1, name: 'Hello'});
  }
}

export default MasterData;
