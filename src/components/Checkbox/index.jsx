import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled/macro";
import checkBoxIcon from "./check.svg";
import { device } from "../mediaQueries";

const StyledLabel = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: Open Sans, sans-serif;
  font-weight: normal;
  font-size: 0.8125rem;
  line-height: 35px;
  color: #4a4a4a;

  &::before {
    content: "";
    display: inline-block;
    width: 19px;
    height: 19px;
    border: 1px solid #d2d5d6;
    border-radius: 3px;
    box-sizing: border-box;
    margin-right: 10px;
  }
`;

const StyledCheckbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:checked + ${StyledLabel}::before {
    border: 1px solid #2196f3;
    background-image: url(${checkBoxIcon});
    background-position: center center;
    background-repeat: no-repeat;
  }

  &:focus + ${StyledLabel}::before {
    border: 3px solid #2196f3;
  }
`;

export const StyledOnlyButton = styled.button`
  width: 49px;
  background-color: transparent;
  border: none;
  margin-left: auto;
  font-family: Open Sans, sans-serif;
  font-weight: 600;
  font-size: 0.6875rem;
  line-height: 35px;
  letter-spacing: 0.5px;
  color: #2196f3;
  text-transform: uppercase;
  display: none;
  cursor: pointer;
  padding: 0;

  &:hover,
  &:focus {
    color: #ff9d1b;
  }
`;

const StyledCheckboxWrap = styled.div`
  width: 290px;
  height: 36px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  outline: none;

  @media ${device.desktop} {
    width: 232px;
  }

  &:hover {
    background-color: #f1fcff;
  }

  &:hover ${StyledOnlyButton} {
    display: table-cell;
    background-color: #f1fcff;
  }
`;

class Checkbox extends React.PureComponent {
  handleClickOnCheckbox = () => {
    return this.props.changeStops({
      currentClickedCheckbox: "checkbox" + this.props.id,
      only: false,
    });
  };

  handleClickOnOnlyButton = () => {
    return this.props.changeStops({
      currentClickedCheckbox: "checkbox" + this.props.id,
      only: true,
    });
  };

  render() {
    let onlyButton;
    if (this.props.stops !== "all") {
      onlyButton = (
        <StyledOnlyButton onClick={this.handleClickOnOnlyButton}>
          только
        </StyledOnlyButton>
      );
    }

    return (
      <StyledCheckboxWrap tabIndex="-1">
        <StyledCheckbox
          checked={this.props.isEnabled}
          id={"checkbox" + this.props.id}
          type="checkbox"
          onChange={this.handleClickOnCheckbox}
        />
        <StyledLabel htmlFor={"checkbox" + this.props.id}>
          {this.props.labelText}
        </StyledLabel>
        {onlyButton}
      </StyledCheckboxWrap>
    );
  }
}

export default Checkbox;

Checkbox.propTypes = {
  changeStops: PropTypes.func.isRequired,
  stops: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.number.isRequired,
  isEnabled: PropTypes.bool.isRequired,
  labelText: PropTypes.string.isRequired,
};
