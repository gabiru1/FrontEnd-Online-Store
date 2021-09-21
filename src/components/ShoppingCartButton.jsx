import React from 'react';
import './ShoppingCart.css';
import { Link } from 'react-router-dom';

class ShoppingCartButton extends React.Component {
  render() {
    return (
      <Link data-testid="shopping-cart-button" to="/shopping-cart">
        <img className="img-shopping-cart" src="https://cdn-icons-png.flaticon.com/512/126/126510.png" alt="ícone shoppingcart" />
      </Link>
    );
  }
}

export default ShoppingCartButton;
