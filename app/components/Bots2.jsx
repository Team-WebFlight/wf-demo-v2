import React, { Component } from 'react';

class Bots2 extends Component {
  render() {
    const resize = { height: '50%' };

    return (
      <div>
        <h1 className='header'>WebFlight</h1>
        <p className='subheader'>Electron Bots</p>
        <img className='center' style={resize} src='assets/bots2.png' />
      </div>
    );
  }
}

export default Bots2;