import React, { Component } from 'react';
import '../styles/footer.css';
import { Link } from 'react-router-dom';

// maybe a functional component would be sufficient
class Footer extends Component {
    render() {
        return (
            <footer>
                <div>
                    <div>
                        <Link to="/terms_and_conditions">Terms and Conditions</Link>    {/* or: terms_of_service ? */}
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