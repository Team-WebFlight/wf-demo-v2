import React, { Component } from 'react';
import Gallery from './GalleryNormal.jsx';

class ReactDemo extends Component {
  render() {
    return (
      <div className="white">
        <div className="navbar">
          <div id="html-title">WebFlight<sup><span id='beta'> alpha</span></sup></div>
          <div className="nav-links">
            <a className="words" href="https://www.github.com/Team-WebFlight/WebFlight" target="_blank">GitHub</a>
            <a className="words" href="https://github.com/Team-WebFlight/WebFlight/blob/master/README.md" target="_blank">Docs</a>
            <a className="words" href="#">Performance</a>
            <a className="words" href="#">Demo</a>
          </div>
        </div>

        <div id="webflight-right">Web<span id="meddon">Flight</span></div>
        <div id="tagline-right">React apps delivered through your peer network.</div>

        <Gallery />

        <div style={{height: 300}}></div>
      </div>
    );
  }
}

export default ReactDemo;