import React, { Component } from 'react';
import Categories from './Categories';

class Home extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            id="home-message"
            type="text"
            value=""
          />
          <h2
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
        </form>
        <Categories />
      </div>
    );
  }
}

export default Home;
