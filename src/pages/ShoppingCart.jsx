import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <img className="img-shopping-cart" src="https://cdn-icons-png.flaticon.com/512/126/126510.png" alt="ícone shoppingcart" />
        <span>Carrinho de Compras</span>

        <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
      </div>
    );
  }
}

export default ShoppingCart;
