import React, { Component } from 'react';

class Redirect3 extends Component {
  render() {
    const resize = {height: '61%'};

    return (
      <div>
        <h1 className='header'>WebFlight Redirecting</h1>
        <img className='center' style={resize} src='assets/redirectStaticEnd.png' />
      </div>
    );
  }
}

export default Redirect3;