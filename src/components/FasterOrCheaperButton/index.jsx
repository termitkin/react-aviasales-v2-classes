import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled/macro";

class FasterOrCheaperButton extends React.Component {
  handleClick = () => this.props.changeFasterOrCheaper(this.props.sortBy);

  render() {
    const StyledButton = styled.button`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      height: 50px;
      background-color: ${this.props.sortBy === this.props.currentSortBy
        ? "#2196F3"
        : "#fff"};
      color: ${this.props.sortBy === this.props.currentSortBy
        ? "#fff"
        : "#4A4A4A"};
      border: ${this.props.sortBy === this.props.currentSortBy
        ? "1px solid #2196F3"
        : "1px solid #dfe5ec"};
      cursor: pointer;
      font-family: Open Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 0.75rem;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      border-radius: ${this.props.borderRadius || "0 0 0 0"};
      padding: 0;

      &:hover {
        background-color: ${this.props.sortBy === this.props.currentSortBy
          ? "#2196f3"
          : "#fff"};
        border: 1px solid #64b5f5;
      }

      &:focus {
        background-color: ${this.props.sortBy === this.props.currentSortBy
          ? "#2196f3"
          : "#fff"};
        border: ${this.props.sortBy === this.props.currentSortBy
          ? "1px solid #64b5f5"
          : "3px solid #64b5f5"};
      }
    `;

    return (
      <StyledButton onClick={this.handleClick}>{this.props.text}</StyledButton>
    );
  }
}

export default FasterOrCheaperButton;

FasterOrCheaperButton.propTypes = {
  sortBy: PropTypes.string.isRequired,
  currentSortBy: PropTypes.string.isRequired,
  changeFasterOrCheaper: PropTypes.func.isRequired,
  borderRadius: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
