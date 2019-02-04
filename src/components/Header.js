import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="header">
                    <div>
                        Company
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/">Galery</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><a href="#">link3</a></li>
                            <li><a href="#">link4</a></li>
                        </ul>
                    </nav>
                    <div className="shopping-cart">
                        <a href="#">
                            <i className="fas fa-shopping-cart"></i>
                        </a>
                        <div className="shop-cart-length">{ this.props.shopCartList.length }</div>
                    </div>
                </div>

                <div>
                    <div>
                        <hr />
                    </div>
                </div>
            </header>
        );
        }
    }

// PropTypes
Header.propTypes = {
    shopCartList: PropTypes.array.isRequired
}

export default Header;