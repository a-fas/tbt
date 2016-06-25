import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { observer } from 'mobx-react';

@observer
class MasterDataList extends Component {
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

MasterDataList.propTypes = {
  masterData: React.PropTypes.object.isRequired
}

export default MasterDataList;
