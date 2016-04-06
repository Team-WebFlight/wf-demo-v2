import React, { Component } from 'react';

class Redirect3 extends Component {
  render() {
    const resize = {height: '61%'};

    return (
      <div>
        <h1 className='header'>WebFlight</h1>
        <p className='subheader'>Redirecting</p>
        <img className='center' style={resize} src='assets/redirectStaticEnd.png' />
      </div>
    );
  }
}

export default Redirect3;