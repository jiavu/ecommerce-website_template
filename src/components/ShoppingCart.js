import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShoppingCartItem from './ShoppingCartItem';

class ShoppingCart extends Component {

    render() {
        return (
            <div style= { shopListStyle }>
                <h3>Shopping Cart:</h3>
                <ul>{
                    this.props.shopCartList.map( (item) => (
                        <ShoppingCartItem key={item.id} item={item}/>
                    ))
                }</ul>
            </div>
        )
    }
}

// PropTypes
ShoppingCart.propTypes = {
    shopCartList: PropTypes.array.isRequired
}


const shopListStyle = {
    border: "1px solid black",
    position: "fixed",
    top: 0, right: 0,
    backgroundColor: "var(--dark)",
    color: "var(--lightest)",
    padding: "0.5rem",
    margin: "0.3rem"

}



export default ShoppingCart;