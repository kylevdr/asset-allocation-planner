import React from 'React';
import { connect } from 'react-redux';

import Chart from './Chart';
import text from '../text/text';
import colors from '../styles/chartColors';

class DonutChart extends React.Component {
    render() {
        let options = {
            chart: {
                type: 'pie',
                backgroundColor: '#F5F5F5'
            },
            colors: colors.default,
            title: {
                text: text.chartTitle
            },
            plotOptions: {
                pie: {
                    borderColor: '#000000',
                    innerSize: '50%'
                }
            },
            tooltip: {
                valueSuffix: '%'
            },
            credits: false,
            series: [{
                name: text.seriesName,
                data: [
                    [text.largeCap, this.props.assetAllocation.largeCap],
                    [text.midSmallCap, this.props.assetAllocation.midSmallCap],
                    [text.international, this.props.assetAllocation.international],
                    [text.bonds, this.props.assetAllocation.bonds],
                    [text.cash, this.props.assetAllocation.cash]
                ],
                dataLabels: {
                    enabled: false,
                    distance: -50
                },
                showInLegend: true
            }]
        };
        return <Chart container={this.props.chartId} options={options} />
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