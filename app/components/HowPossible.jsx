import React, { Component } from 'react';

class HowPossible extends Component {
  render() {
    const resize = {height: 305};

    return (
      <div>
        <h1 className='header'>WebFlight</h1>
        <p className='subheader'>Rebuilding Process</p>
        <table className='center'>
          <tr>
            <td><img className='center' src='assets/webRTC.png' /></td>
            <td><img className='center' style={resize} src='assets/webtorrent.png' /></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default HowPossible;