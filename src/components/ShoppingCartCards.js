import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCartCards extends React.Component {
  render() {
    const { cartProducts, handleQuant } = this.props;
    return (
      <div>
        {cartProducts.map((product) => (
          <div key={ product.id }>
            <h4 data-testid="shopping-cart-product-name">{product.title}</h4>
            <p>Quantidade:</p>
            <button
              type="button"
              data-testid="product-decrease-quantity"
              onClick={ () => handleQuant(product, '-') }
            >
              -
            </button>
            <p data-testid="shopping-cart-product-quantity">{product.quant}</p>
            <button
              type="button"
              data-testid="product-increase-quantity"
              onClick={ () => handleQuant(product, '+') }
            >
              +
            </button>
            <p>
              Price:
              {product.price * product.quant}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

ShoppingCartCards.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleQuant: PropTypes.func.isRequired,
};

export default ShoppingCartCards;
