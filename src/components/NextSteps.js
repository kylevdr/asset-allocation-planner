import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as movesActions from '../actions/moves';
import text from '../text/text';

class NextSteps extends React.Component {
	// Re-calculate steps if change to risk profile or current allocation of assets
	componentWillReceiveProps(nextProps) {
		if (this.props.userInfo !== nextProps.userInfo) {
			this.props.actions.calculateMoves(nextProps.userInfo, nextProps.assetAllocation);
		}
	}

	// Render section differently depending on whether user needs to make any transactions
	renderSteps() {
		if (this.props.userInfo.total === 0) {
			return(
				<p className="text-center">{text.nextStepsInstructions}</p>
			);
		} else if (this.props.moves.moves.length > 0) {
			return(
				<div>
					<p className="text-center"><b>{text.nextStepsSub}</b></p>
					{this.renderMoves.bind(this)()}
				</div>
			);
		} else {
			return(
				<p className="text-center">{text.noStepsText}</p>
			);
		}
	}

	// Return a paragraph element for each item in the moves array
	renderMoves() {
		return this.props.moves.moves.map((item, index) => {
			return (
				<p className="text-center" key={index}><b>{index + 1}.</b> {item}</p>
			);
		})
	}


	// Render the entire component
	render() {
		return (
			<div className="container-fluid">
				<h2 className="text-center">{text.nextSteps}</h2>
				{this.renderSteps.bind(this)()}
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo,
    assetAllocation: state.assetAllocation,
    moves: state.moves
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(movesActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NextSteps);