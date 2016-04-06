import React, { Component } from 'react';

import Intro from './Intro.jsx';
import TypicalLoadBalancing from './TypicalLoadBalancing.jsx';
import PeerLoadBalancing from './PeerLoadBalancing.jsx';
import RebuildingProcess1 from './RebuildingProcess1.jsx';
import RebuildingProcess2 from './RebuildingProcess2.jsx';
import RebuildingProcess3 from './RebuildingProcess3.jsx';
import Redirect1 from './Redirect1.jsx';
import Redirect2 from './Redirect2.jsx';
import Redirect3 from './Redirect3.jsx';
import HowPossible from './HowPossible.jsx';
import Bots1 from './Bots1.jsx';
import Bots2 from './Bots2.jsx';
import Bots3 from './Bots3.jsx';
import PeerDiscovery1 from './PeerDiscovery1.jsx'
import PeerDiscovery2 from './PeerDiscovery2.jsx'
import Watch from './Watch.jsx'
import WFReact from './WFReact.jsx'
import End from './End.jsx'

class Slideshow extends Component {
  constructor() {
    super();

    this.state = {
      slides: [<Intro />, <TypicalLoadBalancing />, <PeerLoadBalancing />,
      <RebuildingProcess1 />, <RebuildingProcess2 />, <RebuildingProcess3 />,
      <Redirect1 />, <Redirect2 />, <Redirect3 />, <HowPossible />,
      <Bots1 />, <Bots2 />, <Bots3 />, <PeerDiscovery1 />, <PeerDiscovery2 />,
      <Watch />, <WFReact />, <End />],
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