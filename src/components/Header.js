import React, { Component } from 'react';
import './header.css';

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
                            <li><a href="#">link1</a></li>
                            <li><a href="#">link2</a></li>
                            <li><a href="#">link3</a></li>
                            <li><a href="#">link4</a></li>
                        </ul>
                    </nav>
                    <div>
                        <a href="#" className="shopping-cart"><i className="fas fa-shopping-cart"></i></a>
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

export default Header;