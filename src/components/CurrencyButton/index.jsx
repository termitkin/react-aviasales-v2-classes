import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled/macro";

class CurrencyButton extends React.Component {
  handleClick = () => {
    return this.props.changeCurrency(this.props.currency);
  };

  render() {
    const StyledButton = styled.button`
      width: 33.3%;
      height: 40px;
      background-color: ${this.props.currency === this.props.currentCurrency
        ? "#2196f3"
        : "#fff"};
      border: ${this.props.currency === this.props.currentCurrency
        ? "1px solid #64b5f5"
        : "1px solid #d2d5d6"};
      cursor: pointer;
      color: ${this.props.currency === this.props.currentCurrency
        ? "#fff"
        : "#2196f3"};
      font-family: Open Sans, sans-serif;
      font-weight: 600;
      font-size: 0.75rem;
      line-height: 22px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      transition: color, background-color, border 0.15s;
      border-radius: ${this.props.borderRadius || "0 0 0 0"};

      &:nth-of-type(2),
      &:nth-of-type(3) {
        margin-left: -1px;
      }

      &:hover {
        background-color: ${this.props.currency === this.props.currentCurrency
          ? "#2196f3"
          : "#e5f9ff"};

        border: 1px solid #64b5f5;
        z-index: 1;
      }

      &:focus {
        background-color: ${this.props.currency === this.props.currentCurrency
          ? "#2196f3"
          : "#fff"};
        border: ${this.props.currency === this.props.currentCurrency
          ? "1px solid #64b5f5"
          : "3px solid #64b5f5"};
        z-index: 1;
      }
    `;

    return (
      <StyledButton
        onClick={this.handleClick}
        aria-label={this.props.ariaLabel}>
        {this.props.currency}
      </StyledButton>
    );
  }
}

export default CurrencyButton;

CurrencyButton.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  borderRadius: PropTypes.string,
  changeCurrency: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  currentCurrency: PropTypes.string.isRequired,
};
