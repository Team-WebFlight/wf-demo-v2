import React, { Component } from 'react';

class HTMLDemo extends Component {
  componentWillMount() {
        const galleryScript = document.createElement("script");
        const webflightScript = document.createElement("script");

        galleryScript.src = 'popup.js';
        webflightScript.src = 'htmldemo.js';

        document.body.appendChild(galleryScript);
        document.body.appendChild(webflightScript);
  }

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

        <div id="webflight">Web<span id="meddon">Flight</span></div>
        <div id="tagline">Static content is delivered through your peer network.</div>
        <div id="gallery">
          <div className="gallery-window">
            <img className="big-pic 70f833246b9ccab974af5c7c525682220e98f3cd0" alt="" />
          </div>
          <div className="gallery-window">
            <img className="gallery-pic 70f833246b9ccab974af5c7c525682220e98f3cd0" alt=""/>
            <img className="gallery-pic 70f833246b9ccab974af5c7c525682220e98f3cd1" alt=""/>
            <img className="gallery-pic 70f833246b9ccab974af5c7c525682220e98f3cd2" alt=""/>
            <img className="gallery-pic 70f833246b9ccab974af5c7c525682220e98f3cd3" alt=""/>
            <img className="gallery-pic 70f833246b9ccab974af5c7c525682220e98f3cd4" alt=""/>
            <img className="gallery-pic 70f833246b9ccab974af5c7c525682220e98f3cd5" alt=""/>
            <img className="gallery-pic 70f833246b9ccab974af5c7c525682220e98f3cd6" alt=""/>
            <img className="gallery-pic 70f833246b9ccab974af5c7c525682220e98f3cd7" alt=""/>
            <img className="gallery-pic 70f833246b9ccab974af5c7c525682220e98f3cd8" alt=""/>
            <img className="gallery-pic 70f833246b9ccab974af5c7c525682220e98f3cd9" alt=""/>
            <img className="gallery-pic 70f833246b9ccab974af5c7c525682220e98f3cd10" alt=""/>
            <img className="gallery-pic 70f833246b9ccab974af5c7c525682220e98f3cd11" alt=""/>
            <img className="gallery-pic 70f833246b9ccab974af5c7c525682220e98f3cd12" alt=""/>
          </div>
        </div>

        <div className="footer">
          <p className="footer-right">
            Brought to you by Team WebFlight: <a href="https://github.com/CarolAG/" target="_blank">Carol</a>, <a href="https://github.com/coryc5/" target="_blank">Cory</a>, <a href="https://github.com/10000highfives/" target="_blank">Jared</a>, <a href="https://github.com/tbywong/"
              target="_blank">Tiffany</a>
          </p>

        </div>
      </div>
    );
  }
}

export default HTMLDemo;