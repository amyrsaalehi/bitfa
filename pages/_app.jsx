import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";
import "styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider themes={["light", "luxury"]} defaultTheme="light">
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
    </ThemeProvider>
  );
}

export default App;
