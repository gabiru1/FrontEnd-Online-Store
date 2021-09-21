import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchFilter extends Component {
  render() {
    const { list } = this.props;

    return (
      <div>
        {
          list.map(({ id, title, thumbnail, price }) => (
            <div data-testid="product" key={ id }>
              <Link
                to={ `/productdetails/${id}` }
                data-testid="product-detail-link"
              >
                <h2>{ title }</h2>
                <img src={ thumbnail } alt="Imagem do produto" />
                <h3>{`Preço: R$${price}`}</h3>
              </Link>
            </div>
          ))
        }
      </div>
    );
  }
}

SearchFilter.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
};

export default SearchFilter;
