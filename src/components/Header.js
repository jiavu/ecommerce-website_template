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
                            <li><Link to="/link3">link3</Link></li>
                            <li><Link to="/link4">link4</Link></li>
                        </ul>
                    </nav>
                    <div className="shopping-cart">
                        <Link to="/cart">
                            <i className="fas fa-shopping-cart"></i>
                        </Link>
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