import React, { useEffect, useState } from 'react';

// Query
import { getQuery } from './helpers';

// Styled
import {
  RowCharts,
  RowChartFullScreen,
} from '../FilterCard/stylecomponents';

// Charts
// import Charts from '../../basicComponents/Charts';
import Liquidity7D from './Liquidity7D';
import SwapCount7D from './SwapCount7D';
import VolumeLiquidity from './VolumeLiquidity';

const InvestorCharts = () => {
  const [liquidity7, setLiquidity7] = useState();
  const [swapCount7D, setSwapCount7D] = useState();
  const [volumeLiquidity, setVolumeLiquidity] = useState();

  useEffect(() => {
    const query = getQuery();
    fetch(query)
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        try {
          const { items } = json.data;
          const {
            liquidity_chart_7d,
            volume_chart_7d,
            liquidity_chart_30d,
            volume_chart_30d,
          } = items[0];

          setLiquidity7(liquidity_chart_7d);
          setSwapCount7D(volume_chart_7d);
          setVolumeLiquidity({ liquidity: liquidity_chart_30d, volume: volume_chart_30d });
        } catch (e) {
          console.error('Error getting charts data: ', e);
        }
      })
  }, []);

  if ((!liquidity7) || (!volumeLiquidity)) return <></>;
  return (
    <div id="investor-chars-container">
      <RowCharts id="liquidies-charts">
        <Liquidity7D data={liquidity7} />
        <SwapCount7D data={swapCount7D} />
      </RowCharts>

      <RowChartFullScreen id="volume-charts">
        <VolumeLiquidity data={volumeLiquidity} />
      </RowChartFullScreen>
    </div>
  )
};

export default InvestorCharts;