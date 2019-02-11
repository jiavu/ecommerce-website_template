import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SmShpCartItem from './SmShpCartItem';

class SmShpCart extends Component {

    state = {
        listShown : false,
    }

    listWidth = null

    componentWillUpdate = () => {
        this.listWidth = "-" + document.getElementById("smShpCrt-list").offsetWidth + "px";
    }

    showList = () => {
        let newState = !this.state.listShown;
        this.setState( { listShown : newState })
    }

    render() {

        const shopCartList = this.props.shopCartList;
        const cssClasses = "sm-shp-cart flex-row" + (shopCartList.length ? "" : " hidden");

        return (
            <div className={ cssClasses }
                style={ this.state.listShown? {right:0} : {right:this.listWidth} }
                onClick={this.showList}>
                <div className="schniepel">
                    <h4><i className="fas fa-shopping-cart"></i></h4>
                </div>
                <div id="smShpCrt-list">
                    <ul>{
                        shopCartList.map( (item) => (
                            <SmShpCartItem key={item.id} item={item}/>
                        ))}
                    </ul>
                    {/* <Link to="/cart">&gt;</Link> */}
                </div>
            </div>
        )
    }
}

// PropTypes
SmShpCart.propTypes = {
    shopCartList: PropTypes.array.isRequired
}


export default SmShpCart;


/* style={{ color: 'var(--lightest)' }} */