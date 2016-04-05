import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Slideshow from './components/Slideshow.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Slideshow />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
