import { useTheme } from "next-themes";
import Script from "next/script";

export default function TradingView({ Exchange, Ticker }) {
  const { theme } = useTheme();

  const wrapperStyle = {
    width: "100%",
    height: "100%",
    minHeight: 500,
  };
  return (
    <>
      <div id="tradingview-wrapper" style={wrapperStyle}>
        <Script
          id="tradingview-widget"
          src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js"
          onLoad={() => {
            document
              .getElementById("tradingview-wrapper")
              .appendChild(document.getElementById("tradingview-widget"));
          }}
        >
          {JSON.stringify({
            symbol: `BINANCE:BTCUSDT`,
            width: "100%",
            height: "100%",
            locale: "en",
            dateRange: "12M",
            interval: "D",
            colorTheme: theme === "light" ? "light" : "dark",
            trendLineColor: "rgba(232, 154, 50, 1)",
            underLineColor: "rgba(232, 154, 50, 0.3)",
            underLineBottomColor: "rgba(232, 154, 50, 0)",
            isTransparent: true,
            autosize: true,
            largeChartUrl: "",
          })}
        </Script>
        {/* <div class="tradingview-widget-container">
  <div id="tradingview_87e23"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/BTCUSDT/?exchange=BINANCE" rel="noopener" target="_blank"><span class="blue-text">BTCUSDT Chart</span></a> by TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
  <script type="text/javascript">
  new TradingView.widget(
  {
  "autosize": true,
  "symbol": "BINANCE:BTCUSDT",
  "interval": "D",
  "timezone": "Asia/Tehran",
  "theme": "dark",
  "style": "1",
  "locale": "en",
  "toolbar_bg": "#f1f3f6",
  "enable_publishing": false,
  "container_id": "tradingview_87e23"
}
  );
  </script>
</div> */}
      </div>
    </>
  );
}
