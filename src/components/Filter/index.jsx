import React from "react";
import styled from "@emotion/styled/macro";
import CurrencyButtonContainer from "../CurrencyButtonContainer";
import CheckboxContainer from "../CheckboxContainer";
import { device } from "../mediaQueries";

const StyledFilter = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  background-color: #fff;
  box-shadow: 0px 1px 4px rgba(91, 137, 164, 0.25);
  border-radius: 5px;
  margin-bottom: 30px;
  border: 1px solid #fff;

  @media ${device.desktop} {
    width: 232px;
    margin-bottom: 0;
  }
`;

const StyledControlsWrap = styled.fieldset`
  width: 100%;
  max-width: 100%;
  display: block;
  border: none;
  padding: 0;
  margin: 15px 0 0 0;

  &:last-child {
    margin: 15px 0 15px 0;
  }
`;

const StyledTitle = styled.legend`
  font-family: Open Sans, sans-serif;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 19px;
  letter-spacing: 0.5px;
  color: #4a4a4a;
  text-transform: uppercase;
  margin-left: 14px;
  margin-bottom: 15px;
  padding: 0;
`;

class Filter extends React.Component {
  render() {
    return (
      <StyledFilter>
        <StyledControlsWrap>
          <StyledTitle>Валюта</StyledTitle>
          <CurrencyButtonContainer />
        </StyledControlsWrap>

        <StyledControlsWrap>
          <StyledTitle>Количество пересадок</StyledTitle>
          <CheckboxContainer />
        </StyledControlsWrap>
      </StyledFilter>
    );
  }
}

export default Filter;
