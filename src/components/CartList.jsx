import React, { Component } from 'react';

class CartList extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage = () => {
    const { cart } = this.state;
    const cartSaved = cart;
    const cartItem = localStorage.getItem('cart');
    cartSaved.push(JSON.parse(cartItem));
    this.setState({
      cart: cartSaved,
    });
  }

  render() {
    const { cart } = this.state;
    console.log(cart);
    if (!cart[0]) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    return (
      <div
        data-testid="shopping-cart-product-name"
      >
        <h2>{cart[0].title}</h2>
        <h3
          data-testid="shopping-cart-product-quantity"
        >
          1
        </h3>
      </div>
    );
  }
}

export default CartList;
