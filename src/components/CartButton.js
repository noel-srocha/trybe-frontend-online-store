import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import img from '../image/Cart.png';

class CartButton extends React.Component {
  render() {
    return (
      <Link data-testid="shopping-cart-button" to="/shopping-cart">
        <img className="shopcart-img" src={ img } alt="shop cart" />
      </Link>
    );
  }
}

export default CartButton;
