import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactBootstrapSlider from 'react-bootstrap-slider';

import { title } from '../text/text';
import * as userInfoActions from '../actions/userInfo';
import Slider from './Slider';
import DonutChart from './DonutChart';

class Main extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<h1 className="text-center">{title}</h1>
				<p className="text-center">{this.props.userInfo.riskProfile}</p>
				<div className="h-center">
					<Slider />
				</div>
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