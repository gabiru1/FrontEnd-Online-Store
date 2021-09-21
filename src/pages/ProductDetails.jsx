import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      requestComplete: false,
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await (await fetch(`https://api.mercadolibre.com/items/${id}`)).json();
    this.setState({
      product,
      requestComplete: true,
    });
  }

  render() {
    const { product, requestComplete } = this.state;
    return (
      <section>
        <p data-testid="product-detail-name">{ product.title }</p>
        <span>{`- R$ ${product.price}`}</span>
        <img src={ product.thumbnail } alt={ `foto do produto ${product.title}` } />
        <section>
          <ul>
            <li>{`Garantia: ${product.warranty}`}</li>
            {requestComplete
             && product.attributes.map((specification, index) => (
               <li
                 key={ index }
               >
                 { `${specification.name}: ${specification.value_name}` }
               </li>))}
          </ul>
        </section>
      </section>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
