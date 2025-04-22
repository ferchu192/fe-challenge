import React, { useEffect, useRef } from 'react';

const TradingViewWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: "FOREXCOM:SPXUSD",
          title: "S&P 500 Index"
        },
        {
          proName: "FOREXCOM:NSXUSD",
          title: "US 100 Cash CFD"
        },
        {
          proName: "FX_IDC:EURUSD",
          title: "EUR to USD"
        },
        {
          proName: "BITSTAMP:BTCUSD",
          title: "Bitcoin"
        },
        {
          proName: "BITSTAMP:ETHUSD",
          title: "Ethereum"
        },
        {
          description: "Matic",
          proName: "COINBASE:MATICUSD"
        }
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en"
    });

    if (containerRef.current) {
      const widgetContainer = containerRef.current.querySelector('.tradingview-widget-container__widget');
      if (widgetContainer) {
        widgetContainer.appendChild(script);
      }
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingViewWidget;
