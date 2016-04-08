import React, { Component } from 'react';

class Redirect1 extends Component {
  render() {
    const resize = {height: '61%'};

    return (
      <div>
        <h1 className='header'>WebFlight Redirecting</h1>
        <img className='center' style={resize} src='assets/redirectStaticStart.png' />
      </div>
    );
  }
}

export default Redirect1;