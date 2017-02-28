import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactBootstrapSlider from 'react-bootstrap-slider';

import * as userInfoActions from '../actions/userInfo';
import text from '../text/text';

class Slider extends React.Component {
	
	// Update risk profile when slider changes
	handleSliderChange(e) {
		this.props.actions.setRiskProfile(e.target.value);
	}

	render() {
		return (
			<div>
				<p className="text-center">{text.sliderInstructions}</p>
				<div className="slider-container h-center">
					<ReactBootstrapSlider className="slider-custom"
						slideStop={this.handleSliderChange.bind(this)}
						value={this.props.userInfo.riskProfile}
						step={1}
						max={10}
						min={1}
						ticks={[1, 10]}
					/>
				</div>
				<p className="text-center" style={{marginTop: 10}}><b>{text.riskProfileLabel}</b> {this.props.userInfo.riskProfile}</p>
			</div>
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