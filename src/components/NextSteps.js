import React from 'react';
import { connect } from 'react-redux';

import text from '../text/text';

class NextSteps extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<h1 className="text-center">{text.nextSteps}</h1>
				<p className="text-center">{text.nextStepsSub}</p>
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
)(NextSteps);