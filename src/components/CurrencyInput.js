import React from 'react';

import text from '../text/text';

export default class CurrencyInput extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.category}>{text[this.props.category]}</label>
                <div className="input-group">
                    <span className="input-group-addon">{text.currency}</span>
                    <input onChange={this.props.onChangeFunc} type="number" className="form-control" name={this.props.category} id={this.props.category} placeholder={this.props.placeholderText} />
                </div>
            </div>
        );
    }
}