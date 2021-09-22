import React, { Component } from 'react';

class Rating extends Component {
  render() {
    return (
      <div>
        <form>
          <h2>Avaliações</h2>
          <label htmlFor="1">
            1
            <input type="radio" name="rate" value="1" />
          </label>
          <label htmlFor="2">
            2
            <input type="radio" name="rate" value="2" />
          </label>
          <label htmlFor="3">
            3
            <input type="radio" name="rate" value="3" />
          </label>
          <label htmlFor="4">
            4
            <input type="radio" name="rate" value="4" />
          </label>
          <label htmlFor="5">
            5
            <input type="radio" name="rate" value="5" />
          </label>

          <input
            type="e-mail"
            placeholder="E-mail"
          />
          <textarea
            cols="30"
            rows="10"
            data-testid="product-detail-evaluation"
            placeholder="Comentário"
          />
        </form>
      </div>
    );
  }
}

export default Rating;
