import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Charts
import Charts from '../../basicComponents/Charts';

// Moment
import moment from 'moment';

const Liquidity7D = ({
  data,
}) => {
  const [categories, setCategories] = useState();
  const [series, setSeries] = useState();

  const nameChart = "Last 7 days Liquidity";

  const parseData = (liquidities) => {
    const columns = []; // Columnas
    const seriesData = []; // Value

    liquidities.forEach((element) => {
      const { dt: date } = element;
      const { liquidity_quote: quote } = element;

      const parseDate = moment(date).format('DD MMM ')
      columns.push(parseDate);
      seriesData.push(quote);
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
      typeValue="exp"
      typeChar="area"
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

Liquidity7D.defaultProps = {
};

Liquidity7D.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(liquidityObjectShape)).isRequired,
};


export default Liquidity7D;
