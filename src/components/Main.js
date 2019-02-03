import React, { Component } from 'react';
import './main.css';
import Galery from "./Galery";
import PropTypes from 'prop-types';

class Main extends Component {

    render() {
        return (
            <main>
                <div className="main-container">
    
                    <section>
                        <h1>Awesome Text</h1>
                        <p className="segment">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat dignissim ultricies. Fusce egestas arcu eu maximus mattis. Sed metus felis, tincidunt eget metus eu, vestibulum sollicitudin odio. Proin id orci ut turpis porttitor placerat. Quisque rhoncus libero bibendum, rhoncus ligula in, vestibulum metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sit amet suscipit massa. Donec ornare sit amet urna at semper.
                            <br />
                            Curabitur placerat iaculis orci nec dictum. Mauris venenatis odio hendrerit tellus placerat varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque laoreet molestie convallis. Praesent ac turpis venenatis, gravida ipsum eget, mollis turpis. Aenean lobortis, sem ut ultrices tristique, ligula turpis ultrices odio, ac cursus mauris metus at elit.
                        </p>
                        <p className="segment">
                            Proin euismod urna dui, quis pharetra velit sollicitudin et. Donec ut leo quis dui hendrerit consectetur. Nam vestibulum in risus sit amet aliquam. Praesent in urna feugiat, sagittis elit vitae, accumsan mauris. Pellentesque placerat, diam a fermentum feugiat, nibh ipsum mattis felis, ullamcorper sollicitudin purus nunc eget velit. Morbi ultricies consectetur rhoncus. Maecenas quis lacus aliquet, fringilla magna ut, rhoncus dolor.
                        </p>
                    </section>
        
                    <Galery products_from_App= { this.props.products } modShopCart={ this.props.modShopCart }/>
                    
                </div>
            </main>
        );
    }
}

// PropTypes
Main.propTypes = {
    products: PropTypes.array.isRequired
}


export default Main;