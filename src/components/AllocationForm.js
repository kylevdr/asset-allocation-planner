import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userInfoActions from '../actions/userInfo';
import text from '../text/text';
import CurrencyInput from './CurrencyInput';

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
					<CurrencyInput category="largeCap" placeholderText={text.largeCap} onChangeFunc={this.handleFormChange.bind(this)} />
					<CurrencyInput category="midSmallCap" placeholderText={text.midSmallCap} onChangeFunc={this.handleFormChange.bind(this)} />
					<CurrencyInput category="international" placeholderText={text.international} onChangeFunc={this.handleFormChange.bind(this)} />
					<CurrencyInput category="bonds" placeholderText={text.bonds} onChangeFunc={this.handleFormChange.bind(this)} />
					<CurrencyInput category="cash" placeholderText={text.cash} onChangeFunc={this.handleFormChange.bind(this)} />
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