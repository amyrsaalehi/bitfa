import Head from "next/head";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";

export default function Layout({ children, title = null }) {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="Content-Language" content="fa" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/bitfa.png"></link>
        <title>{title ? `${title} | بیتفا` : "بیتفا"}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
