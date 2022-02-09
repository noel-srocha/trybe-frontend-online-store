import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

export default class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.updateCategories = this.updateCategories.bind(this);
  }

  async componentDidMount() {
    const categoryList = await getCategories();
    this.updateCategories(categoryList);
  }

  updateCategories(categoryList) {
    this.setState({
      categories: [...categoryList],
    });
  }

  render() {
    const { categories } = this.state;
    const { onChange } = this.props;
    return (
      <div className="category-list">
        <h5>CATEGORIAS:</h5>
        <hr />
        {categories
          .map((category) => (
            <li className="category-li" key={ category.id }>
              <label htmlFor={ category.id }>
                <input
                  id={ category.id }
                  name="categoryInputs"
                  type="radio"
                  data-testid="category"
                  key={ category.id }
                  onChange={ onChange }
                />
                {category.name}
              </label>
            </li>
          ))}
      </div>
    );
  }
}

CategoryFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
