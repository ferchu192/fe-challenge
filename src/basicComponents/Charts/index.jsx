import React from 'react';
import PropTypes from 'prop-types';

// ApexChart
import ReactApexChart from 'react-apexcharts';

// Styled
import {
  CardCharts,
} from '../../components/FilterCard/stylecomponents';

// Helpers
import { parseNumber } from './helpers';

const Charts = ({
  title,
  typeValue,
  typeChar,
  categories,
  series,
  witdh, // 500
  height, // 700
  fullScreen,
  showYAxis,
}) => {
  const defaultOptions = {
    chart: {
      toolbar: {
        show: false,
        // offsetX: 0,
        offsetY: 0,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
          customIcons: []
        },
      },
    },
    title: {
      text: title.toUpperCase(),
      align: 'center',
      floating: false,
      style: {
        fontSize: '30px',
        fontWeight: 'bold',
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        color: '#263238'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
    yaxis: {
      show: showYAxis,
      // logarithmic: true,
      labels: {
        /**
        * Allows users to apply a custom formatter function to yaxis labels.
        *
        * @param { String } value - The generated value of the y-axis tick
        * @param { index } index of the tick / currently executing iteration in yaxis labels array
        */
        formatter: function (val) {
          return parseNumber(val, typeValue);
        }
      }
    },
    xaxis: {
      categories,
    }
  };

  return (
    <CardCharts id="card-input-charts" fullScreen={fullScreen} >
      <ReactApexChart
        options={defaultOptions}
        series={series}
        type={typeChar}
        width={witdh}
        height={height} />
    </CardCharts >
  )
};

const seriesObjectShape = {
  name: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.number),
};

Charts.defaultProps = {
  witdh: '500px',
  height: '300px',
  fullScreen: false,
  showYAxis: false,
};

Charts.propTypes = {
  title: PropTypes.string.isRequired,
  typeValue: PropTypes.string,
  typeChar: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  series: PropTypes.arrayOf(PropTypes.shape(seriesObjectShape)).isRequired,
  witdh: PropTypes.string,
  height: PropTypes.string,
  fullScreen: PropTypes.bool,
  showYAxis: PropTypes.bool,
};

export default Charts;
