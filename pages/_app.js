import { useEffect } from "react";
import "../styles/globals.css";
import Head from "next/head";
import NProgress from "nprogress";
import Layout from "../components/layout/Layout";

import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  const AOS = require("aos");
  useEffect(() => {
    AOS.init();
  }, [AOS]);
  return (
    <>
      <Head></Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
