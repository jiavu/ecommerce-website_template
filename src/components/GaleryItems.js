import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GaleryItem extends Component {

    render() {

        return this.props.products.map( (item) => (

            <div className="proj-container"
                    key={ item.id }>
                <div className= { item.available? " hoverable" : null }>
                    <img src= { item.src } alt={ item.id } className="img-t1" />
                </div>

                <div className="flex-row proj-info">
                    <div>
                        <h4>{ item.name }</h4>
                        <p>Available: { item.available? "Yes" : "No" }</p>
                    </div>
                    <button type='button'
                            className="round"
                            onClick={ this.props.modShopCart.bind(this, item) }
                            style={{ visibility: item.available? 'visible' : 'hidden'}}
                            disabled= { item.available? false : true } >
                        { item.inCart? "-" : "+"}
                    </button>
                </div>
            </div>

        ));
    }
}

// PropTypes
GaleryItem.propTypes = {
    products: PropTypes.array.isRequired,
    modShopCart: PropTypes.func.isRequired
}


export default GaleryItem;


/*
Error when trying to import images from local.

img= {require("../src/data/img_prev/id_001_150x300.png")} causes

Error: Cannot find module '../src/data/img_prev/id_001_150x300.png'
*/