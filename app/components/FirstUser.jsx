import React, { Component } from 'react';

class FirstUser extends Component {
  render() {
    const resize = { height: '40%', marginTop: 100 };

    return (
      <div>
        <h1 className='header'>First User</h1>
        <img className='center' style={resize} src='assets/firstUser.png' />
      </div>
    );
  }
}

export default FirstUser;