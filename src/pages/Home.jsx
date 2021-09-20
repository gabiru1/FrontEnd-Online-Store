import React, { Component } from 'react';
import ShoppingCartButton from '../components/ShoppingCartButton';

class Home extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            id="home-message"
            type="text"
          />
          <ShoppingCartButton />
          <h2
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
        </form>
      </div>
    );
  }
}

export default Home;
