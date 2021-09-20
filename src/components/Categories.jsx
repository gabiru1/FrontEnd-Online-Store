import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = () => {
    getCategories()
      .then((data) => this.setState({ categories: data }));
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ul>
          {categories.map((category, index) => (
            <li
              key={ index }
              data-testid="category"
            >
              <input type="checkbox" key={ index } />
              {category.name}
            </li>))}
        </ul>
      </div>
    );
  }
}

export default Categories;
