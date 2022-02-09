import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Checkout extends React.Component {
  fullName() {
    return (
      <input
        type="text"
        data-testid="checkout-fullname"
        id="fullname"
        name="fullname"
        placeholder="Nome Completo"
      />
    );
  }

  cpf() {
    return (
      <input
        type="text"
        data-testid="checkout-cpf"
        id="cpf"
        name="cpf"
        placeholder="CPF"
      />
    );
  }

  email() {
    return (
      <input
        type="text"
        data-testid="checkout-email"
        id="email"
        name="email"
        placeholder="Email"
      />
    );
  }

  phone() {
    return (
      <input
        type="text"
        data-testid="checkout-phone"
        id="tel"
        name="tel"
        placeholder="Telefone"
      />
    );
  }

  zip() {
    return (
      <input
        type="text"
        data-testid="checkout-cep"
        id="cep"
        name="cep"
        placeholder="CEP"
      />
    );
  }

  address() {
    return (
      <input
        type="text"
        data-testid="checkout-address"
        id="address"
        name="address"
        placeholder="Endereço"
      />
    );
  }

  render() {
    const { cart } = this.props;
    const total = cart.reduce((acc, { price }) => (acc + price), 0).toFixed(2);
    return (
      <main>
        <header>
          <Link to="/">
            <img src="" alt="voltar" />
          </Link>
        </header>
        <section>
          <h3>Finalizar Compras</h3>
          <div>
            <h4>Revise seus Produtos</h4>
            <table>
              <tbody>
                {cart.map(({ id, title, price }) => (
                  <tr key={ id }>
                    <td><img src="" alt="checked" /></td>
                    <td>{`${title}`}</td>
                    <td>R$: </td>
                    <td>{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h4>
              Total: R$
              {total}
            </h4>
          </div>
          <div>
            <h4>Informações do Comprador</h4>
            <div>
              {this.fullName()}
              {this.cpf()}
              {this.email()}
              {this.phone()}
              {this.zip()}
              {this.address()}
            </div>
          </div>
          <div>
            <h4>Método de Pagamento</h4>
            <div>
              <span>Boleto: </span>
              <input type="radio" id="boleto" name="payment" />
              <img src="" alt="Ícone de Boleto" />
            </div>
            <div>
              <p>Cartão de Crédito: </p>
              <input type="radio" id="visa" name="payment" />
              <span>Visa</span>
              <img src="" alt="Ícone do Cartão Visa" />
              <input type="radio" id="master" name="payment" />
              <span>Master</span>
              <img src="" alt="Ícone do Cartão Master" />
              <input type="radio" id="elo" name="payment" />
              <span>Elo</span>
              <img src="" alt="Ícone do Cartão Elo" />
            </div>
          </div>
          <nav>
            <button type="button">
              Comprar
            </button>
          </nav>
        </section>
      </main>
    );
  }
}

Checkout.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Checkout;
