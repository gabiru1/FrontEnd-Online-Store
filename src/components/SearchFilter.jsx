import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchFilter extends Component {
  render() {
    const { list } = this.props;

    return (
      <div>
        {
          list.map(({ id, title, thumbnail, price }) => (
            <div key={ id } data-testid="product">
              <h2>{ title }</h2>
              <img src={ thumbnail } alt="Imagem do produto" />
              <h3>{`Preço: R$${price}`}</h3>
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
