import React, { Component } from 'react';
import '../styles/galery.css';
import GaleryItems from "./GaleryItems";
import PropTypes from 'prop-types';

class Galery extends Component {

    render() {
        return (
            <section>
                <h1>Awesome Pictures</h1>

                <div className="segment galery">
                    <GaleryItems products={ this.props.products }
                                modShopCart={ this.props.modShopCart } />
                </div>
            </section>
        );
        }
    }

// PropTypes
Galery.propTypes = {
    products_from_App: PropTypes.array.isRequired,
    modShopCart: PropTypes.func.isRequired
}

export default Galery;