import React, { Component } from 'react';

class PeerTechnologies extends Component {
  render() {
    const resize = {height: 305, margin: '0 50'};

    return (
      <div>
        <h1 className='header'>Peer-to-Peer Technologies</h1>
        <div style={{ textAlign: 'center', marginTop: 100 }}>
            <img style={resize} src='assets/webRTC.png' />
            <img style={resize} src='assets/webtorrent.png' />
        </div>
      </div>
    );
  }
}

export default PeerTechnologies;