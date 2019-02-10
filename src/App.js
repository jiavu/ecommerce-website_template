import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/App.css';
import dataExample from "./data/data_example";
import Header from "./components/Header";
import Galery from "./components/Galery";
import Footer from "./components/Footer";
import SmShpCart from './components/SmShpCart';
import About from "./components/About";
import ShoppingCart from "./components/ShoppingCart";


class App extends Component {

  state = {
      products : dataExample.products,
      currency : dataExample.currency,
      shoppingCart : {
        list : [],
        sum : 0
      }
  }


  formatPrice(value) {
    return parseFloat(Math.round(value * 100) / 100).toFixed(2);
  }

  orderUpdatesState = (shopCart) => {
    this.setState( {
      products: this.state.products.map( product => {
        for (let i = 0; i < shopCart.length; i++) {
          if ( shopCart[i].id === product.id) product.available = false;
        }
        return product;
      }),
      shoppingCart : {
        list : [],
        sum : 0
      }
    });
  };

  modShopCart = (item) => {
    const shopCartListUpdate = item.inCart?
      this.state.shoppingCart.list.filter(i => i.id !== item.id )
    : [...this.state.shoppingCart.list, item];

    const calcSum = (list)=> {
      let result = 0;
      for (let i = 0; i < list.length; i++) {
          result += list[i].price;
      }
      return result;
  }

    this.setState( {
      products: this.state.products.map( product => {
        if (product.id === item.id) {
          product.inCart = !product.inCart;
        }
        return product;
      }),
      shoppingCart: {
        list : shopCartListUpdate,
        sum : calcSum(shopCartListUpdate)
      }
    });
  };


  render() {
    return (
      <Router>
        <React.Fragment>
          <Header shopCartList= { this.state.shoppingCart.list } />
          <main>
            <div className="main-container">

              <Route exact path="/" render={ props => (
                <React.Fragment>
                  <Galery products= { this.state.products }
                          modShopCart={ this.modShopCart }/>
                  <SmShpCart shopCartList= { this.state.shoppingCart.list }/>
                </React.Fragment>
              ) }/>

              <Route path="/about" render={ props => (
                <About />
              ) }/>

              <Route path="/link3" render={ props => (
                <React.Fragment />
              ) }/>

              <Route path="/link4" render={ props => (
                <React.Fragment />
              ) }/>

              <Route path="/cart" render={ props => (
                <ShoppingCart shopCartList= { this.state.shoppingCart.list }
                              shopCartSum={ this.state.shoppingCart.sum }
                              currency={ this.state.currency }
                              modShopCart={ this.modShopCart }
                              formatPrice={ this.formatPrice }
                              orderUpdatesState={ this.orderUpdatesState }/>
              ) }/>

              <Route path="/terms_and_conditions" render={ props => (
                <React.Fragment />
              ) }/>

            </div>
          </main>
          
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;