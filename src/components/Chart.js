import React from 'React';
import Highcharts from 'highcharts';

export default class Chart extends React.Component {
    // When the DOM is ready, create the chart.
    componentDidMount() {
        // Extend Highcharts with modules
        if (this.props.modules) {
            this.props.modules.forEach(function (module) {
                module(Highcharts);
            });
        }
        // Set container which the chart should render to.
        this.chart = new Highcharts[this.props.type || "Chart"](
            this.props.container, 
            this.props.options
        );
    }

    // Re-render chart when options change.
    componentDidUpdate() {
        this.chart = new Highcharts[this.props.type || "Chart"](
            this.props.container, 
            this.props.options
        );
    }

    // Destroy chart before unmount.
    componentWillUnmount() {
        this.chart.destroy();
    }

    // Create the div which the chart will be rendered to.
    render() {
        return (
            <div id={this.props.container}></div>
        );
    }
}