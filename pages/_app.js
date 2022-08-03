import { useEffect } from "react";
import Head from "next/head";
import NProgress from "nprogress";
import Layout from "../components/layout/Layout";

// Styles
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  const AOS = require("aos");
  useEffect(() => {
    AOS.init();
  }, [AOS]);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
