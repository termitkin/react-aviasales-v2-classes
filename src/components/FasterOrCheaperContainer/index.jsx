import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled/macro";
import FasterOrCheaperButton from "../FasterOrCheaperButton";
import { connect } from "react-redux";
import { changeFasterOrCheaper } from "../../store/fastesOrCheaper/actions";

const StyledTabsWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 50px;
  display: flex;
`;

class FasterOrCheaperContainer extends React.Component {
  render() {
    return (
      <StyledTabsWrapper>
        <FasterOrCheaperButton
          text="Самый дешевый"
          borderRadius="5px 0px 0px 5px"
          sortBy="cheaper"
          currentSortBy={this.props.sortBy}
          changeFasterOrCheaper={this.props.changeFasterOrCheaper}
        />
        <FasterOrCheaperButton
          text="Самый быстрый"
          borderRadius="0px 5px 5px 0px"
          sortBy="fastes"
          currentSortBy={this.props.sortBy}
          changeFasterOrCheaper={this.props.changeFasterOrCheaper}
        />
      </StyledTabsWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    sortBy: state.fastesOrCheaper.sortBy,
  };
};

const mapDispatchToProps = {
  changeFasterOrCheaper,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FasterOrCheaperContainer);

FasterOrCheaperContainer.propTypes = {
  sortBy: PropTypes.string.isRequired,
  changeFasterOrCheaper: PropTypes.func.isRequired,
};
