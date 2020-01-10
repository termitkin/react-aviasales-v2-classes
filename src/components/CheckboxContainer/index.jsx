import React from "react";
import PropTypes from "prop-types";
import Checkbox from "../Checkbox";
import { changeStops } from "../../store/stops/actions";
import { connect } from "react-redux";

class CheckboxContainer extends React.Component {
  render() {
    return (
      <div>
        {Object.values(this.props.stops).map(checkbox => {
          return (
            <Checkbox
              key={checkbox.id}
              id={checkbox.id}
              labelText={checkbox.labelText}
              stops={checkbox.stops}
              isEnabled={checkbox.isEnabled}
              changeStops={this.props.changeStops}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stops: state.stops,
  };
};

const mapDispatchToProps = {
  changeStops,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxContainer);

CheckboxContainer.propTypes = {
  changeStops: PropTypes.func.isRequired,
  stops: PropTypes.object.isRequired,
};
