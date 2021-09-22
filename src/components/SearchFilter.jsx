import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardItems from './CardItems';

class SearchFilter extends Component {
  render() {
    const { list } = this.props;

    return (
      <div>
        {
          list.map((product) => <CardItems product={ product } key={ product.id } />)
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
