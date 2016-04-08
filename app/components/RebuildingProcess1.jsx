import React, { Component } from 'react';

class RebuildingProcess1 extends Component {
  render() {
    const resize = {height: '35%'};

    return (
      <div>
        <h1 className='header'>Rebuilding Process</h1>
          <h3 className='subheader center'>Normal HTML</h3>
          <img className='center sixty' src='assets/normalHTMLv2.png' />
          <h3 className='subheader center'>P2P HTML</h3>
          <img className='center eighty' src='assets/p2pHTMLv2.png' />
      </div>
    );
  }
}

export default RebuildingProcess1;