import React, { Component } from 'react';

import Intro from './Intro.jsx';
import TypicalLoadBalancing from './TypicalLoadBalancing.jsx';

class Slideshow extends Component {
  constructor() {
    super();

    this.state = {
      slides: [<Intro />, <TypicalLoadBalancing />],
      index: 0
    };
  }

  componentWillMount() {
    document.addEventListener('keydown', function(e) {
      if (e.keyCode === 37) {
        if (this.state.index) {
          this.setState({index: this.state.index - 1})
        }
      } else if (e.keyCode === 39) {
        if (this.state.index < this.state.slides.length - 1) {
          this.setState({index: this.state.index + 1})
        }
      }
    }.bind(this))
  }

  render() {
    return (
      <div>
        {this.state.slides[this.state.index]}
      </div>
    );
  }
}



export default Slideshow;