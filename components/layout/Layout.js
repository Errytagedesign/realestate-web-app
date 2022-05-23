import React from "react";
import Head from "next/head";

import Navbar from "../Navbar/navbar";

function Layout({ children }) {
  return (
    <div>
      <Head> Realt Estate web-app created with reactjs and nextjs</Head>

      <header>
        <Navbar />
      </header>

      <main>{children}</main>

      <footer>footer</footer>
    </div>
  );
}

export default Layout;
