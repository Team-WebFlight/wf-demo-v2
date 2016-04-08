import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Picture from './Picture.jsx';
import images from './../utils/images'
import birds from './../utils/birds'

class Gallery extends Component {
  constructor() {
    super();

    const items = []


    this.state = {};
    this.state.max = birds.length;
    this.state.counter = items.length;
    this.state.items = items.slice();
  }

  componentWillMount() {
    window.addEventListener('scroll', function(ev) {
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight && this.state.counter < this.state.max - 5) {
      // you're at the bottom of the page
        const newItems = this.state.items.slice()

        for (var i = 0; i < 5; i++) newItems.push(<Picture key={images[this.state.counter + i]} src={images[this.state.counter + i]}/>)
        this.setState({items: newItems, counter: this.state.counter + 5});
      }
    }.bind(this))
  }

  componentDidMount() {
    const items = []

    for (var i = 0; i < 15; i++) items.push(<Picture key={birds[i]} src={`assets/birds/${birds[i]}`} />);

    this.setState({items, counter: 15})
  }


  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {this.state.items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Gallery;
