import React from 'react';
import PropTypes from 'prop-types';

class EvaluationCard extends React.Component {
  render() {
    const { evaluation } = this.props;
    const { email, opinion, rating } = evaluation;
    return (
      <div>
        <h4>
          Email:
          {email}
        </h4>
        <p>
          Opinião:
          {opinion}
        </p>
        <p>
          Avaliação:
          {rating}
        </p>
      </div>
    );
  }
}

EvaluationCard.propTypes = {
  evaluation: PropTypes.shape({
    email: PropTypes.string,
    opinion: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default EvaluationCard;
