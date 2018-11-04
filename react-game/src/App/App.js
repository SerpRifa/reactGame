import React, { Component } from 'react';
import WithStyles from './AppStyles';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import styled from 'styled-components';

const IN_PIXELS = 50;

class App extends Component {
  render() {
    const {position, exitPosition, isTutorialEnd} = this.props;
    return (
      <div className="App">
        <WithStyles>
          <div className="field" >
          <div 
            className="player" 
            style={{
              top: position.y * IN_PIXELS, 
              left: position.x * IN_PIXELS
            }}
          />
          <div 
            className="exit"
            style={{
              top: exitPosition.y * IN_PIXELS, 
              left: exitPosition.x * IN_PIXELS
            }}
          />
          </div>
        </WithStyles>        
      </div>
    );
  }
}

export default App;
