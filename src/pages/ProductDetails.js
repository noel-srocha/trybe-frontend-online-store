import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartButton from '../components/CartButton';
import CostumerEvaluation from '../components/CostumerEvaluation';
import ShippingStatus from '../components/ShippingStatus';

class ProductDetails extends React.Component {
  render() {
    const { props } = this;
    const { state } = props.location;
    const { product } = state;
    const { id, title, price, thumbnail, shipping } = product;
    const { addCartChange } = this.props;
    return (
      <div className="div-productdetail">
        <div className="div-productdetail-nav">
          <Link to="/">Retornar</Link>
          <CartButton />
        </div>
        <h2>
          Id:
          { id }
        </h2>
        <h2 data-testid="product-detail-name">{ title }</h2>
        <h2>
          Price:
          { price }
        </h2>
        <div className="div-productdetail-central">
          <div className="div-productdetail-img">
            <img src={ thumbnail } alt="test" />
          </div>
          <div className="div-productdetail-specification">
            <h4>Titulo para as especificações</h4>
            <ul>
              <li>
                Ul com a lista de especificações
              </li>
            </ul>
          </div>
          <ShippingStatus status={ shipping.free_shipping } />
        </div>
        <div>
          <button
            onClick={ () => addCartChange(product) }
            type="button"
            value={ title }
            data-testid="product-detail-add-to-cart"
          >
            Adicionar ao carrinho
          </button>
        </div>
        <div>
          <CostumerEvaluation title={ title } />
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  addCartChange: PropTypes.func.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
        shipping: PropTypes.shape({
          free_shipping: PropTypes.bool,
        }).isRequired,
      }),
    }),
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      productName: PropTypes.string,
      categoryId: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
