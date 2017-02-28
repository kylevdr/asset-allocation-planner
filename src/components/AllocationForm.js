import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userInfoActions from '../actions/userInfo';
import text from '../text/text';

class AllocationForm extends React.Component {
	
	// Update current allocation of assets when form changes
	handleFormChange(e) {
		this.props.actions.setCurrentAllocation(e.target.name, e.target.value);
	}

	render() {
		return (
			<div>
				<h4 className="text-center form-title">{text.formTitle}</h4>
				<form>
					<div className="form-group">
						<label htmlFor="largeCap">{text.largeCap}</label>
						<input onChange={this.handleFormChange.bind(this)} type="number" className="form-control" name="largeCap" id="largeCap" placeholder={0} />
					</div>
					<div className="form-group">
						<label htmlFor="midSmallCap">{text.midSmallCap}</label>
						<input onChange={this.handleFormChange.bind(this)} type="number" className="form-control" name="midSmallCap" id="midSmallCap" placeholder={0} />
					</div>
					<div className="form-group">
						<label htmlFor="international">{text.international}</label>
						<input onChange={this.handleFormChange.bind(this)} type="number" className="form-control" name="international" id="international" placeholder={0} />
					</div>
					<div className="form-group">
						<label htmlFor="bonds">{text.bonds}</label>
						<input onChange={this.handleFormChange.bind(this)} type="number" className="form-control" name="bonds" id="bonds" placeholder={0} />
					</div>
					<div className="form-group">
						<label htmlFor="cash">{text.cash}</label>
						<input onChange={this.handleFormChange.bind(this)} type="number" className="form-control" name="cash" id="cash" placeholder={0} />
					</div>
				</form>
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
)(AllocationForm);