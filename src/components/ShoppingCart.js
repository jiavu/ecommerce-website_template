import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShoppingCartItem from './ShoppingCartItem';

import '../styles/shoppingCart.css';

class ShoppingCart extends Component {

     
    // Oh and what's with Mehrwertsteuer?
    

    render() {

        const formatPrice = this.props.formatPrice;

        return (
            <section>
                <h1>Shopping Cart</h1>

                <div className="segment flex-column-center">
                    <div className="shop-cart">
                        <table>
                            {/* 
                            <thead>
                                <tr>
                                    <th>Preview</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                             */}
                            <tbody>{
                                this.props.shopCartList.map( (item) => (
                                    <ShoppingCartItem key={item.id}
                                                    item={item}
                                                    curr={ this.props.currency }
                                                    modShopCart={ this.props.modShopCart }
                                                    formatPrice={ formatPrice }/>
                                ))
                            }</tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="2" >Sum</td>
                                    <td>
                                        { this.props.currency + " "}
                                        { formatPrice(this.props.shopCartSum) }
                                    </td>
                                    <td />
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div className="segment flex-row">
                    <div className="small-link">
                        <Link to="/">&lt;&lt; Continue shopping</Link>
                    </div>
                    <div>
                        <button type="button" style={{ marginLeft:'2rem' }}
                                disabled={ this.props.shopCartList.length < 1 }
                                onClick={this.props.orderUpdatesState.bind(this, this.props.shopCartList)}>
                            Order
                        </button>
                    </div>
                    
                </div>
            </section>
        )
    }
}

// PropTypes
ShoppingCart.propTypes = {
    shopCartList: PropTypes.array.isRequired,
    shopCartSum: PropTypes.number.isRequired, 
    currency: PropTypes.string.isRequired,
    modShopCart: PropTypes.func.isRequired,
    formatPrice: PropTypes.func.isRequired,
    orderUpdatesState: PropTypes.func.isRequired
}

export default ShoppingCart;