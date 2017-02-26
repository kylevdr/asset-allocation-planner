import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { title } from '../text/text';
import * as userInfoActions from '../actions/userInfo';

class Title extends React.Component {
	render() {
		return (
			<div>
				<h1>{title}</h1>
				<p>{this.props.userInfo.riskProfile}</p>
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
)(Title);