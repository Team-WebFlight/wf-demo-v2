import React, { Component } from 'react';

class ResponseTime extends Component {
  render() {
    const resize = { height: '60%' };

    return (
      <div>
        <h1 className='header'>Response Times</h1>
        <img className='center' style={resize} src='assets/responseTime.jpg' />
      </div>
    );
  }
}

export default ResponseTime;