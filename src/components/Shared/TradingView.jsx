import { useTheme } from "next-themes";
import Script from "next/script";

export default function TradingView({
  Ticker = "BTCUSDT",
  Exchange = "BINANCE",
}) {
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
            symbol: `${Exchange || "BINANCE"}:${Ticker}`,
            container_id: "tradingview_87e23",
            width: "100%",
            height: "100%",
            locale: "en",
            timezone: "Asia/Tehran",
            interval: "D",
            dateRange: "12M",
            style: "1",
            colorTheme: theme === "light" ? "light" : "dark",
            trendLineColor: "rgba(232, 154, 50, 1)",
            underLineColor: "rgba(232, 154, 50, 0.3)",
            underLineBottomColor: "rgba(232, 154, 50, 0)",
            isTransparent: true,
            autosize: true,
            largeChartUrl: "",
          })}
        </Script>
      </div>
    </>
  );
}
