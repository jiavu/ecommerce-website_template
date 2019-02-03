import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCartItem extends Component {

    render() {
        return (<li>{ this.props.item.name }</li>)
    }
}

// PropTypes

ShoppingCartItem.propTypes = {
    item: PropTypes.object.isRequired
}


export default ShoppingCartItem;