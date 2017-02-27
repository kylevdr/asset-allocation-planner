import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactBootstrapSlider from 'react-bootstrap-slider';

import text from '../text/text';
import * as userInfoActions from '../actions/userInfo';
import Slider from './Slider';
import DonutChart from './DonutChart';

class Main extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<h1 className="text-center">{text.title}</h1>
				<br />
				<p className="text-center">{text.sliderInstructions}</p>
				<div className="h-center">
					<Slider />
				</div>
				<p className="text-center"><b>{text.riskProfileLabel}</b> {this.props.userInfo.riskProfile}</p>
				<br />
				<DonutChart />
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  };
}

export default connect(
  mapStateToProps
)(Main);