import React from 'react';
import CartList from '../components/CartList';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <img className="img-shopping-cart" src="https://cdn-icons-png.flaticon.com/512/126/126510.png" alt="ícone shoppingcart" />
        <span>Carrinho de Compras</span>
        {/* <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2> */}
        <CartList />
      </div>
    );
  }
}

export default ShoppingCart;
