import React, { Component } from 'react';

class Watch extends Component {
  render() {
    const resize = { marginTop: 100 };

    return (
      <div>
        <h1 className='header'>WebFlight</h1>
        <p className='subheader'>React Support</p>
        <img className='center' style={resize} src='assets/reactjs.png' />
      </div>
    );
  }
}

export default Watch;