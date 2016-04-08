import React, { Component } from 'react';

class ResponseTime extends Component {
  render() {
    const resize = { height: '60%' };

    return (
      <div>
        <h1 className='header'>Response Times</h1>
        <img className='center' style={resize} src='assets/responseTimev2.png' />
      </div>
    );
  }
}

export default ResponseTime;