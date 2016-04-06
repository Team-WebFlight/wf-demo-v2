import React, { Component } from 'react';

class PeerDiscovery1 extends Component {
  render() {
    const resize = { height: '48%' };

    return (
      <div>
        <h1 className='header'>WebFlight</h1>
        <p className='subheader'>Peer Discovery</p>
        <img className='center' style={resize} src='assets/peerDiscoveryStart.png' />
      </div>
    );
  }
}

export default PeerDiscovery1;