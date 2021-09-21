import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import SearchFilter from '../components/SearchFilter';
import Categories from '../components/Categories';
import ShoppingCartButton from '../components/ShoppingCartButton';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      userText: '',
      list: [],
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  handleButton = () => {
    const { userText } = this.state;
    getProductsFromCategoryAndQuery('', userText)
      .then((data) => {
        this.setState({
          list: data.results,
        });
      });
  }

  render() {
    const { userText, list } = this.state;
    return (
      <div>
        <form>
          <input
            name="userText"
            data-testid="query-input"
            id="home-message"
            type="text"
            value={ userText }
            onChange={ this.handleChange }
          />
          <ShoppingCartButton />
          <h2
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleButton }
          >
            Pesquisar
          </button>
        </form>
        <Categories />
        <SearchFilter list={ list } />
      </div>
    );
  }
}

export default Home;
