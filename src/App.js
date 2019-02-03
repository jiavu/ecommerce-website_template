import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import dataExample from "./data/data_example";
import ShoppingCart from './components/ShoppingCart';

class App extends Component {

  state = {
      products : dataExample.products,
      shoppingCart : [...dataExample.products]  //for testing only
  }

  modifyShoppingCart = (item) => {

    console.log(this.state.shoppingCart);

    this.setState( {
      products: this.state.products.map( product => {
        if (product.id === item.id) {
          product.onHold = !product.onHold;
        }
        return product;
      }),
      shoppingCart: []  // write a function that returns a new array.
      
      /* ,
      shoppingCart : this.state.shoppingCart.push("item")
      // that changes shoppingCart to a number?*/
    }
   );

  }

  render() {
    return (
      <div>
        <Header />
        <Main products={ this.state.products } modShopCart={ this.modifyShoppingCart }/>
        <Footer />

        <ShoppingCart shopCartList= { this.state.shoppingCart }/>

      </div>
    );
  }
}

export default App;