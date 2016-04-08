import React, { Component } from 'react';

class PeerDiscovery1 extends Component {
  render() {
    const resize = { height: '58%' };

    return (
      <div>
        <h1 className='header'>Peer Discovery</h1>
        <img className='center' style={resize} src='assets/peerDiscoveryStart.png' />
      </div>
    );
  }
}

export default PeerDiscovery1;