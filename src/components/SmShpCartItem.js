import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SmShpCartItem extends Component {

    render() {
        return (<li>{ this.props.item.name }</li>)
    }
}

// PropTypes

SmShpCartItem.propTypes = {
    item: PropTypes.object.isRequired
}


export default SmShpCartItem;