import React, { Component } from 'react';

class End extends Component {
  render() {
    const moveDown = { marginTop: 50 };

    return (
      <div className='slide'>
        <p className='subheader' style={moveDown}>Visit us at</p>
        <h1 className='header' >WebFlight.io</h1>
        <p className='subheader'>Thanks!</p>
        <p className='subheader'>Carol, Cory, Jared & Tiffany</p>
      </div>
    );
  }
}

export default End;