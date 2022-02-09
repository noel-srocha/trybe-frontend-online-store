import React from 'react';
import PropTypes from 'prop-types';

class ShippingStatus extends React.Component {
  render() {
    const { status } = this.props;
    return (
      status ? <p data-testid="free-shipping">Frete Grátis</p> : null
    );
  }
}

ShippingStatus.propTypes = {
  status: PropTypes.bool.isRequired,
};

export default ShippingStatus;
