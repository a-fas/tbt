import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { observer } from 'mobx-react';

@observer
class MasterDataList extends Component {
  static propTypes = {
    masterData: React.PropTypes.object.isRequired
  }

  render() {
    return(
      <Table hover>
        <tbody>
          {this.props.masterData.items.map(i =>
            <tr key={i.id}><td>{i.name}</td></tr>
          )}
        </tbody>
      </Table>
    )
  }
}

export default MasterDataList;
