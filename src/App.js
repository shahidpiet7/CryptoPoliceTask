import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Home />
      <Footer />
      </div>
    );
  }
}

export default App;
