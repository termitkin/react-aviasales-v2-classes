import React from "react";
import styled from "@emotion/styled/macro";
import Logo from "../Logo";
import Filter from "../Filter";
import FasterOrCheaperContainer from "../FasterOrCheaperContainer";
import TicketsContainer from "../TicketsContainer";
import { device } from "../mediaQueries";

const StyledApp = styled.div`
  padding: 1px;
  min-height: 100%;
  background-color: #f3f7fa;
  box-sizing: border-box;
`;

const StyledWrapper = styled.div`
  width: 292px;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  justify-content: flex-start;

  @media ${device.desktop} {
    width: 752px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const StyledRightColumn = styled.div`
  width: 100%;
  max-width: 500px;
  dispay: flex;
  flex-direction: column;
`;

class App extends React.Component {
  render() {
    return (
      <StyledApp>
        <Logo />
        <StyledWrapper>
          <Filter />
          <StyledRightColumn>
            <FasterOrCheaperContainer />
            <TicketsContainer />
          </StyledRightColumn>
        </StyledWrapper>
      </StyledApp>
    );
  }
}

export default App;
