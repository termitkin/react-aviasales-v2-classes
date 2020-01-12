import React from "react";
import styled from "@emotion/styled/macro";

const StyledPlaceholder = styled.div`
  width: 100%;
  max-width: 500px;
  height: 184px;
  background-color: #eee;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.span`
  font-size: 1rem;
  color: #333;
  font-family: sans-serif;
  font-weight: bold;
`;

class TicketsPlaceholder extends React.Component {
  render() {
    return (
      <div>
        <StyledPlaceholder>
          <StyledText>Билет загружается</StyledText>
        </StyledPlaceholder>
        <StyledPlaceholder>
          <StyledText>Билет загружается</StyledText>
        </StyledPlaceholder>
        <StyledPlaceholder>
          <StyledText>Билет загружается</StyledText>
        </StyledPlaceholder>
        <StyledPlaceholder>
          <StyledText>Билет загружается</StyledText>
        </StyledPlaceholder>
        <StyledPlaceholder>
          <StyledText>Билет загружается</StyledText>
        </StyledPlaceholder>
      </div>
    );
  }
}

export default TicketsPlaceholder;
