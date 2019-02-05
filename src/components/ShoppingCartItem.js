import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCartItem extends Component {

    render() {

        const item = this.props.item;

        return (
            <tr>
                <td><img src= { item.src } alt={ item.id } className="img-shp-cart" /></td>
                <td>{ item.name }</td>
                <td>{ this.props.curr } { item.price }</td>
                <td>
                    <button type='button' className='removeButton'
                            onClick={ this.props.modShopCart.bind(this, item) }>
                        x
                    </button></td>
            </tr>
        )   // should add a tooltip / mouseover-text for removing button.
    }
}

// PropTypes

ShoppingCartItem.propTypes = {
    item: PropTypes.object.isRequired,
    curr: PropTypes.string.isRequired,
    modShopCart: PropTypes.func.isRequired
}


export default ShoppingCartItem;