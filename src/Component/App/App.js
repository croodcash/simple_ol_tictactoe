import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Board from '../Board/Board.js';
import Game from '../Game/Game.js';
import Footer from '../Footer/Footer.js';
//import Header from '../Header/Header.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="header">
          <Header/>
        </div>
        <div className="container">
          <div className="left">
            <Game/>
          </div>
          <div className="right">

          </div>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
