import React from 'react';
import PropTypes from 'prop-types';
import EvaluationCard from './EvaluationCard';

class CostumerEvaluation extends React.Component {
  constructor() {
    super();
    this.state = {
      evaluation: {
        email: '',
        opinion: '',
        rating: 0,
      },
      evaluations: [],
    };
    this.sendToLocalStorage = this.sendToLocalStorage.bind(this);
    this.getLocalStorage = this.getLocalStorage.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage() {
    const { title } = this.props;
    const savedProducts = JSON.parse(localStorage.getItem(`Product: ${title}`));
    if (savedProducts) {
      this.setState({
        evaluation: savedProducts,
      });
    }
  }

  updateState(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      evaluation: {
        ...prevState.evaluation,
        [name]: value,
      },
    }));
  }

  sendToLocalStorage() {
    const { evaluation } = this.state;
    const { title } = this.props;
    const savedProducts = JSON.parse(localStorage.getItem(`Product: ${title}`));
    if (savedProducts) {
      localStorage.setItem(`Product: ${title}`,
        JSON.stringify([...savedProducts, evaluation]));
      this.setState({
        evaluations: [...savedProducts, evaluation],
      });
    } else {
      localStorage.setItem(`Product: ${title}`, JSON.stringify([evaluation]));
      this.setState({
        evaluations: [evaluation],
      });
    }
    this.setState({
      evaluation: {
        email: '',
        opinion: '',
        rating: 0,
      },
    });
  }

  render() {
    const { evaluation, evaluations } = this.state;
    const { email, opinion, rating } = evaluation;
    return (
      <div>
        <h3>Avalie o produto:</h3>
        <div>
          <form>
            <div>
              <input
                type="text"
                name="email"
                value={ email }
                onChange={ this.updateState }
                placeholder="Digite seu email..."
                required
              />
            </div>
            <div>
              <textarea
                data-testid="product-detail-evaluation"
                type="text"
                name="opinion"
                value={ opinion }
                onChange={ this.updateState }
                placeholder="Comente sobre o produto..."
              />
            </div>
            <div>
              <input
                type="number"
                name="rating"
                value={ rating }
                onChange={ this.updateState }
                min={ 1 }
                max={ 5 }
                required
              />
            </div>
            <div>
              <button
                type="button"
                onClick={ this.sendToLocalStorage }
              >
                Enviar Avaliação
              </button>
            </div>
          </form>
        </div>
        <div>
          <h3>Todas as avaliações:</h3>
          <div>
            {evaluations ? evaluations
              .map((element, index) => (
                <EvaluationCard key={ index } evaluation={ element } />)) : null}
          </div>
        </div>
      </div>
    );
  }
}

CostumerEvaluation.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CostumerEvaluation;
