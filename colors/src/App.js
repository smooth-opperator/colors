import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ColorTracker from './components/ColorTracker';
import ColorGrid from './components/ColorGrid';
import RGBHex from './components/RGBHex';
import HexRGB from './components/HexRGB';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <div className="links">
                <Link to='/rgb-hex'>
                  <div className="Example-link">RGB to Hex</div>
                </Link>
                <Link to='/hex-rgb'>
                  <div className="Example-link">Hex to RGB</div>
                </Link>
                <Link to='/color-tracker'>
                  <div className="Example-link">Color Tracker</div>
                </Link>
                <Link to='/color-grid'>
                  <div className="Example-link">Color Grid</div>
                </Link>
                <Link to='/recoloring-grid'>
                  <div className="Example-link">Recoloring Grid</div>
                </Link>
                <Link to='/changing-grid'>
                  <div className="Example-link">Changing Grid</div>
                </Link>
                <Link to='/greyscale'>
                  <div className="Example-link">Greyscale</div>
                </Link>
              </div>
            </Route>
            <Route path="/rgb-hex" render={() => <RGBHex />} />
            <Route path="/hex-rgb" render={() => <HexRGB />} />
            <Route path="/color-tracker" render={() => <ColorTracker />} />
            <Route path="/color-grid" render={() => <ColorGrid type="colorGrid" />} />
            <Route path="/recoloring-grid" render={() => <ColorGrid type="recoloringGrid" />} />
            <Route path="/changing-grid" render={() => <ColorGrid type="changingGrid" />} />
            <Route path="/greyscale" render={() => <ColorGrid type="greyscale" />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
