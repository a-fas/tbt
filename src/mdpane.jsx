import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './mdpane.less';

@observer
class MDPane extends Component {
  static propTypes = {
    title: React.PropTypes.string,
    md:    React.PropTypes.object
  };

  render() {
    return (
      <div className='md-container'>
        <span className='md-title'>{this.props.title}</span>
        <ul>{this.props.md.mdlist.map(item => <li key={item.id}>{item.name}</li>)}</ul>
      </div>
    );
  }
}

export default MDPane;
