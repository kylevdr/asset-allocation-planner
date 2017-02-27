import React from 'React';
import { connect } from 'react-redux';

import Chart from './Chart';
import text from '../text/text';

class DonutChart extends React.Component {
    render() {
        let options = {
            chart: {
                type: 'pie'
            },
            title: {
                text: text.chartTitle
            },
            plotOptions: {
                pie: {
                    borderColor: '#000000',
                    innerSize: '60%'
                }
            },
            tooltip: {
                valueSuffix: '%'
            },
            series: [{
                name: text.seriesName,
                data: [
                    [text.largeCap, this.props.assetAllocation.largeCap],
                    [text.midSmallCap, this.props.assetAllocation.midSmallCap],
                    [text.international, this.props.assetAllocation.international],
                    [text.bonds, this.props.assetAllocation.bonds],
                    [text.cash, this.props.assetAllocation.cash]
                ]
            }]
        };
        return <Chart container="asset-allocation-chart" options={options} />
    }
}

function mapStateToProps(state) {
  return {
    assetAllocation: state.assetAllocation
  };
}

export default connect(
  mapStateToProps
)(DonutChart);