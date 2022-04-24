import React from "react";
import Head from "next/head";

// Styles
import { Wrapper } from "./layout.styles";

function layout({ children }) {
  return (
    <div>
      <Head> Realt Estate web-app created with reactjs and nextjs</Head>

      <Wrapper></Wrapper>
      <header>navbar</header>

      <main>{children}</main>

      <footer>footer</footer>
    </div>
  );
}

export default layout;
