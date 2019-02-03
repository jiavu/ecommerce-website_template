import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GaleryItem extends Component {

    render() {

        return this.props.products_from_Galery.map( (item) => (
            <div className="img-container" key={ item.id }>
                <img src= { item.src } alt={ item.id } className="img-t1" />
                <h4>{ item.name }</h4>
                <p>Available: { item.available? "Yes" : "No" }</p>
                <button type='button'
                        onClick={ this.props.modShopCart.bind(this, item) }
                >
                    { item.onHold? "Remove from Shopping Cart" : "Add to Shopping Cart"}
                </button>
            </div>

        ));
    }
}

// PropTypes
GaleryItem.propTypes = {
    products_from_Galery: PropTypes.array.isRequired
}


export default GaleryItem;


/*
Error when trying to import images from local.

img= {require("../src/data/img_prev/id_001_150x300.png")} causes

Error: Cannot find module '../src/data/img_prev/id_001_150x300.png'


*/