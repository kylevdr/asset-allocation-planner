import React from 'React';
import { connect } from 'react-redux';

import Chart from './Chart';
import text from '../text/text';

class DonutChart extends React.Component {
    render() {
        let options = {
            chart: {
                type: 'pie',
                backgroundColor: '#F5F5F5'
            },
            // Blue and grey color scheme
            // colors: ['#045177', '#0b86c3', '#58ABD3', '#5C5C61', '#8F8F93'],
            // Icy color scheme
            // colors: ['#022B3A', '#1F7A8C', '#BFDBF7', '#E1E5F2', '#FFFFFF'],
            // Bright color scheme
            colors: ['#D11149', '#F17105', '#E6C229', '#6610F2', '#1A8FE3'],
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