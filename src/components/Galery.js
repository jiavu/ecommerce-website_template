import React, { Component } from 'react';
import './galery.css';
import GaleryItems from "./GaleryItems";
import PropTypes from 'prop-types';

class Galery extends Component {
    render() {
        return (
            <section>
                <h1>Awesome Pictures</h1>

                <div className="segment galery">
                    <GaleryItems products_from_Galery={ this.props.products_from_App }/>
                </div>
            </section>
        );
        }
    }

// PropTypes
Galery.propTypes = {
    products_from_App: PropTypes.array.isRequired
}

export default Galery;