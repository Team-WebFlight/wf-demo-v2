import React, { Component } from 'react';

class Picture extends Component {
  render() {
    return (
      <span className='inline-block-span'>
          <img src={this.props.src} style={{ height: 200, margin: 5}}/>
      </span>
    );
  }
}

export default Picture;
