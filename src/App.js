import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import dataExample from "./data/data_example";

class App extends Component {

  state = dataExample

  render() {
    return (
      <div>
        <Header />
        <Main products={ this.state.products }/>
        <Footer />
      </div>
    );
  }
}

export default App;