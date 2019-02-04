import React, { Component } from 'react';
import '../styles/footer.css';

// maybe a functional component would be sufficient
class Footer extends Component {
    render() {
        return (
            <footer>
                <div>
                    <div>
                        <a href="#">Terms and Conditions</a>
                    </div>
                    <div>
                        social media links
                    </div>
                </div>
                <div>
                &copy; 2019 copyright owner. All rights reserved.
                </div>
          </footer>
        );
        }
    }

export default Footer;