import React, { Component } from 'react';
import './mdpane.less';

class MDPane extends Component {
  static propTypes = {
    title: React.PropTypes.string,
    md: React.PropTypes.object
  };

  render() {
    let list = this.props.md.list.map(item => <li key={item.id}>{item.name}</li>);
    return (
      <div className='md-container'>
        <span className='md-title'>{this.props.title}</span>
        <ul>{list}</ul>
      </div>
    );
  }
}

export default MDPane;
