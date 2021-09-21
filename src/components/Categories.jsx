import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import SearchFilter from './SearchFilter';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      productsFiltered: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = () => {
    getCategories()
      .then((data) => this.setState({ categories: data }));
  }

  filterProduct = async (_event, categoryID) => {
    const productsFiltered = await getProductsFromCategoryAndQuery(categoryID);

    console.log(categoryID);
    console.log(productsFiltered.results);

    this.setState({
      productsFiltered: productsFiltered.results,
    });
  }

  render() {
    const { categories, productsFiltered } = this.state;
    return (
      <div>
        <ul>
          {categories.map((category) => (
            <li
              role="menuitem"
              onKeyDown={ this.filterProduct }
              key={ category.id }
              data-testid="category"
              onClick={ (event) => this.filterProduct(event, category.id) }
            >
              {category.name}
            </li>))}
        </ul>
        <SearchFilter list={ productsFiltered } />
      </div>
    );
  }
}

export default Categories;
