import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SmShpCartItem from './SmShpCartItem';

class SmShpCart extends Component {

    render() {
        return (
            <div style= { shopListStyle }>
                <h3><Link to="/cart" style={{ color: 'var(--lightest)' }}>
                        Shopping Cart:
                    </Link></h3>
                <ul>{
                    this.props.shopCartList.map( (item) => (
                        <SmShpCartItem key={item.id} item={item}/>
                    ))
                }</ul>
            </div>
        )
    }
}

// PropTypes
SmShpCart.propTypes = {
    shopCartList: PropTypes.array.isRequired
}

const shopListStyle = {
    /* display: this.props.shopCartList.length? 'block' : 'none', */
    border: "1px solid black",
    position: "fixed",
    top: '20%', right: 0,
    backgroundColor: "var(--dark)",
    color: "var(--lightest)",
    padding: "0.5rem",
    margin: "0.3rem"
}

export default SmShpCart;