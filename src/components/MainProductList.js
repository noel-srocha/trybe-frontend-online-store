import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class MainProductList extends React.Component {
  render() {
    const { products, onClickButton } = this.props;
      if (products.length === 0) {
        return (
          <div>
            <h4 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h4>
          </div>
        )
      }
      return (
      <div className="product-list">
        {products.map((product) => (<ProductCard
          onClickButton={ onClickButton }
          key={ product.id }
          product={ product }
        />))}
      </div>
    )
  }
}

MainProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickButton: PropTypes.func.isRequired,
};

export default MainProductList;
