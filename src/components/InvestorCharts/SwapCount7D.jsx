import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Charts
import Charts from '../../basicComponents/Charts';

// Moment
import moment from 'moment';

const SwapCount7D = ({
  data,
}) => {
  const [categories, setCategories] = useState();
  const [series, setSeries] = useState();

  const nameChart = "Last 7 Days Swap count";

  const parseData = (volume) => {
    const columns = []; // Columnas
    const seriesData = []; // Value

    volume.forEach((element) => {
      const { dt: date } = element;
      const { swap_count_24: cantSwap } = element;

      const parseDate = moment(date).format('DD MMM ')
      columns.push(parseDate);
      seriesData.push(cantSwap);
    });

    const newSeries = {
      name: nameChart,
      data: seriesData,
    };

    setCategories(columns)
    setSeries([newSeries]);
  }

  useEffect(() => {
    parseData(data);
  }, []);

  if (!categories && !series) return <></>;
  return (
    <Charts
      title={nameChart}
      witdh="100%"
      height="300px"
      categories={categories}
      series={series}
      typeChar="area"
    />
  )
};

const volumeObjectShape = {
  chain_id: PropTypes.string,
  dex_name: PropTypes.string,
  dt: PropTypes.string,
  swap_count_24: PropTypes.number,
  volume_quote: PropTypes.number,
  quote_currency: PropTypes.string,
};

SwapCount7D.defaultProps = {
};

SwapCount7D.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(volumeObjectShape)).isRequired,
};



export default SwapCount7D;
