import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardItems extends Component {
  saveItemOnCart = (product) => {
    const item = { title: product.title };
    localStorage.setItem('cart', JSON.stringify(item));
  }

  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        <h2>{ product.title }</h2>
        <img src={ product.thumbnail } alt="Imagem do produto" />
        <h3>{`Preço: R$${product.price}`}</h3>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.saveItemOnCart(product) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

CardItems.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CardItems;
