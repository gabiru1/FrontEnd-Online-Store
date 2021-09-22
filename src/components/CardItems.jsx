import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Requisito 7

class CardItems extends Component {
  saveItemOnCart = (product) => {
    const item = { title: product.title };
    localStorage.setItem('cart', JSON.stringify(item));
  }

  render() {
    const { product } = this.props;
    return (
      <Link data-testid="product-detail-link" to={ `/productdetails/${product.id}` }>
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
      </Link>
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
