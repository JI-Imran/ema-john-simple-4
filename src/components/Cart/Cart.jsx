import React from 'react';
import "./Cart.css"

const Cart = ({cart}) => {
    // const cart = props.cart;  option:1
    // const {cart} = props; option: 2

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
        </div>
    );
};

export default Cart;