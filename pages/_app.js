import "../styles/globals.css";
import Head from "next/head";
import NProgress from "nprogress";
import Layout from "../components/Layout/layout";

function MyApp({ Component, pageProps }) {
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
