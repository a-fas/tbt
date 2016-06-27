import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { observer } from 'mobx-react';

const MasterDataList = observer((props) => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {props.masterData.items.map(i =>
          <tr key={i.id}>
            <td>{i.name}</td>
          </tr>
        )}
      </tbody>
    </Table>
)});

MasterDataList.propTypes = {
  masterData: React.PropTypes.object.isRequired
}

export default MasterDataList;
