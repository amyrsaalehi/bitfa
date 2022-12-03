import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";
import { Analytics } from "@vercel/analytics/react";
import "styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider themes={["light", "halloween"]} defaultTheme="light">
      <NextNProgress
        color="#E78400"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow={true}
        options={{
          showSpinner: false,
        }}
      />
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
