import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactBootstrapSlider from 'react-bootstrap-slider';

import * as userInfoActions from '../actions/userInfo';

class Slider extends React.Component {

	handleSliderChange(e) {
		this.props.actions.setRiskProfile(e.target.value);
	}

	render() {
		return (
			<ReactBootstrapSlider className="slider-custom"
				change={this.handleSliderChange.bind(this)}
				value={this.props.userInfo.riskProfile}
				step={1}
				max={10}
				min={1}
			/>
		);
	}
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userInfoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slider);