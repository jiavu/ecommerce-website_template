import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShoppingCartItem from './ShoppingCartItem';

import '../styles/shoppingCart.css';

class ShoppingCart extends Component {

    /* Continue:
        Format prices with function, use
        parseFloat(Math.round(num3 * 100) / 100).toFixed(2);
        should display 2 decimals.
        Where to place this function? In App.js, or here?
        Could maybe use it for the small ShoppingCartItem as well.

        Oh and what's with Mehrwertsteuer?
    */

    render() {
        return (
            <section>
                <h1>Shopping Cart</h1>

                <div className="segment flex-center">
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Preview</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>{
                                this.props.shopCartList.map( (item) => (
                                    <ShoppingCartItem key={item.id}
                                                    item={item}
                                                    curr={ this.props.currency }
                                                    modShopCart={ this.props.modShopCart }/>
                                ))
                            }</tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="2" >Sum</td>
                                    <td>
                                        { this.props.currency + " "}
                                        { this.props.shopCartSum }
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div>
                    <Link to="/">&lt;&lt; Continue shopping</Link>
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
    modShopCart: PropTypes.func.isRequired
}

export default ShoppingCart;