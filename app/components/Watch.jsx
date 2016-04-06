import React, { Component } from 'react';

class Watch extends Component {
  render() {
    const resize = { height: '20%', marginTop: 100 };

    return (
      <div>
        <h1 className='header'>WebFlight</h1>
        <p className='subheader'>Server Watching</p>
        <img className='center' style={resize} src='assets/watch.png' />
      </div>
    );
  }
}

export default Watch;