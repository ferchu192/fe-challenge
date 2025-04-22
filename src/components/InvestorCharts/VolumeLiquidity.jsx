import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Charts
import Charts from '../../basicComponents/Charts';

// Moment
import moment from 'moment';

const VolumeLiquidity = ({ data }) => {
  const [categories, setCategories] = useState();
  const [series, setSeries] = useState();

  const nameChart = "Liquidity vs. Volume";

  const parseData = (liquidity, volume) => {
    const columns = []; // Columnas
    const seriesLiquidity = []; // Value
    const seriesVolume = []; // Value

    // Serie: Liquidity
    liquidity.forEach((element, index) => {
      if (index < 25) {
        const { dt: date } = element;
        const { liquidity_quote: quote } = element;

        const parseDate = moment(date).format('DD MMM ')
        columns.push(parseDate);
        seriesLiquidity.push(quote);
      }
    });

    // Serie: Volume
    volume.forEach((element, index) => {
      if (index < 25) {
        const { dt: date } = element;
        const { volume_quote: quote } = element;

        const parseDate = moment(date).format('DD MMM ')
        columns.push(parseDate);
        seriesVolume.push(quote);
      }
    });

    const newSeriesLiquidity = {
      name: 'Liquidity',
      data: seriesLiquidity,
    };

    const newSeriesVolume = {
      name: 'Volume',
      data: seriesVolume,
    };

    setCategories(columns)
    setSeries([newSeriesLiquidity, newSeriesVolume]);
  }

  useEffect(() => {
    const {
      liquidity,
      volume,
    } = data;
    parseData(liquidity, volume);
  }, [data]);

  if (!categories && !series) return <></>;
  return (
    <Charts
      title={nameChart}
      witdh="100%"
      height="500px"
      categories={categories}
      series={series}
      typeValue="exp"
      typeChar="area"
      fullScreen
      showYAxis
    />
  )
};

const liquidityObjectShape = {
  chain_id: PropTypes.string,
  dex_name: PropTypes.string,
  dt: PropTypes.string,
  liquidity_quote: PropTypes.number,
  quote_currency: PropTypes.string,
};

const volumeObjectShape = {
  chain_id: PropTypes.string,
  dex_name: PropTypes.string,
  dt: PropTypes.string,
  swap_count_24: PropTypes.number,
  volume_quote: PropTypes.number,
  quote_currency: PropTypes.string,
};

const volumeLiquidityObjectShape = {
  liquidity: PropTypes.arrayOf(PropTypes.shape(liquidityObjectShape)),
  volume: PropTypes.arrayOf(PropTypes.shape(volumeObjectShape)),
}

VolumeLiquidity.defaultProps = {
};

VolumeLiquidity.propTypes = {
  data: PropTypes.shape(volumeLiquidityObjectShape).isRequired,
};

export default VolumeLiquidity;
