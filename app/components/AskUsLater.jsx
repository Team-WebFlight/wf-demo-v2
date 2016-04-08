import React, { Component } from 'react';

class AskUsLater extends Component {
  render() {
    const resize = { height: '40%', marginTop: 100 };

    return (
      <div>
        <h1 className='header'>Ask Us Later</h1>
        <img className='center' style={resize} src='assets/mystery.png' />
      </div>
    );
  }
}

export default AskUsLater;