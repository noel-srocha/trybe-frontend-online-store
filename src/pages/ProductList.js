import React from 'react';
import PropTypes from 'prop-types';

import { getProductsFromCategoryAndQuery as ApiProducts } from '../services/api';

import ProductCard from '../components/ProductCard';
import img from '../image/Search.png';
import CategoryFilter from '../components/CategoryFilter';
import CartButton from '../components/CartButton';
import MainProductList from '../components/MainProductList';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      searchInput: '',
      categoryId: '',
    };

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleSearchInput(event) {
    const { value } = event.target;
    this.setState({
      searchInput: value,
    });
  }

  async handleSearchButton() {
    const { searchInput, categoryId } = this.state;
    const products = await ApiProducts(categoryId, searchInput);
    this.setState({
      products: products.results,
    });
  }

  handleCategoryChange(event) {
    this.setState({
      categoryId: event.target.id,
    }, () => this.handleSearchButton());
  }

  render() {
    const { products, searchInput } = this.state;
    const { onClickButton } = this.props;
    return (
      <div className="home">
        <div className="category-div">
          <CategoryFilter onChange={ this.handleCategoryChange } />
        </div>
        <div className="content-div">
          <div className="nav-search">
            <div className="input-button">
              <input
                placeholder="   Buscar produtos, items e muito mais..."
                data-testid="query-input"
                value={ searchInput }
                onChange={ this.handleSearchInput }
              />
              <button
                type="button"
                data-testid="query-button"
                onClick={ this.handleSearchButton }
              >
                🔎
              </button>
            </div>
            <CartButton />
          </div>
          <MainProductList products={ products } onClickButton={ onClickButton } />
        </div>
      </div>
    );
  }
}

ProductList.propTypes = {
  onClickButton: PropTypes.func.isRequired,
};

export default ProductList;
