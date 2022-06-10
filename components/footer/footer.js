import React from "react";
import Link from "next/link";

// Styles
import { Wrapper, Content, NavBars } from "./footer.styles";

function Footer() {
  return (
    <Wrapper>
      <Content>
        <section>
          {" "}
          <small> created with love by errytage </small>{" "}
        </section>
        <section>
          <h3> Contact us: </h3>
          <Link href="mailto: errytage@gmail.com" passHref>
            errytage@gmail.com ||
          </Link>
          <Link href="tel: +2348095342136" passHref>
            08095342136
          </Link>
        </section>
      </Content>
    </Wrapper>
  );
}

export default Footer;
