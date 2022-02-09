import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      shopCart: [],
    };

    this.addCartChange = this.addCartChange.bind(this);
    this.onQuantChange = this.onQuantChange.bind(this);
  }

  async onQuantChange(product, operation) {
    const { shopCart } = this.state;
    const foundProduct = shopCart.find((obj) => product.id === obj.id);
    const pushedCart = [...shopCart];
    if (operation === '-' && foundProduct.quant === 1) {
      return;
    }
    if (operation === '+') {
      pushedCart.find((Obj) => product.id === Obj.id).quant += 1;
      this.setState({
        shopCart: pushedCart,
      });
    } else {
      pushedCart.find((Obj) => product.id === Obj.id).quant -= 1;
      this.setState({
        shopCart: pushedCart,
      });
    }
  }

  addCartChange(product) {
    const { shopCart } = this.state;
    const productNotFound = undefined;
    const enteringProduct = shopCart.find((Obj) => product.id === Obj.id);
    const pushedCart = [...shopCart];
    if (enteringProduct === productNotFound) {
      pushedCart.push({
        ...product,
        quant: 1,
      });
    } else {
      pushedCart.find((Obj) => product.id === Obj.id).quant += 1;
    }
    this.setState({
      shopCart: pushedCart,
    });
  }

  render() {
    const { shopCart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (<ProductList
              { ...props }
              onClickButton={ this.addCartChange }
            />) }
          />
          <Route
            exact
            path="/shopping-cart"
            render={ () => (<ShoppingCart
              handleQuant={ this.onQuantChange }
              cartProducts={ shopCart }
            />) }
          />
          <Route
            exact
            path="/product-details/:id"
            render={ (props) => (<ProductDetails
              { ...props }
              addCartChange={ this.addCartChange }
            />) }
          />
          <Route
            exact
            path="/checkout"
            render={ (props) => (<Checkout { ...props } cart={ shopCart } />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
