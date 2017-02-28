import React from 'react';
import { connect } from 'react-redux';

import text from '../text/text';
import Slider from './Slider';
import DonutChart from './DonutChart';
import AllocationForm from './AllocationForm';
import NextSteps from './NextSteps';

class Main extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="main-content well col-xs-12 col-sm-offset-1 col-sm-10">
					<h1 className="text-center">{text.title}</h1>
					<br />
					<Slider />
					<br />
					<div className="row">
						<div className="col-xs-12 col-md-6">
							<DonutChart />
						</div>
						<div className="col-xs-12 col-md-6">
							<AllocationForm />
						</div>
					</div>
					<NextSteps />
					<br />
				</div>
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