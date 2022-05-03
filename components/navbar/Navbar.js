import React from "react";
import Link from "next/link";

import { BsMenuButtonWide } from " react-icons/bs";

// Styles
import { Wrapper, Content, NavBars } from "./Navbar.styles";

function navbar() {
  return (
    <Wrapper>
      <Content>
        <Link href="/" passHref>
          <h2>Realtor</h2>
        </Link>

        <NavBars>
          <Link href="/" passHref>
            <div className="navItems">Home</div>
          </Link>
          <Link href="/search" passHref>
            <div className="navItems">Search</div>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <div className="navItems">Buy Property</div>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <div className="navItems">Rent property</div>
          </Link>
        </NavBars>

        <main>
          <BsMenuButtonWide className="menuIcon" />
        </main>
      </Content>
    </Wrapper>
  );
}

export default navbar;
