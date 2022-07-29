import React, { useState } from "react";
import Link from "next/link";

import { BsMenuButtonWide, BsXLg } from "react-icons/bs";

// Styles
import { Wrapper, Content, NavBars } from "./Navbar.styles";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const ShowNavbar = () => {
    setNavbar(!navbar);
    console.log("clicked");
  };

  return (
    <Wrapper>
      <Content>
        <Link href="/" passHref>
          <h2>Realtor</h2>
        </Link>
        <NavBars navbar={navbar}>
          <Link href="/" passHref>
            <h4 className="navItems">Home</h4>
          </Link>
          <Link href="/search" passHref>
            <h4 className="navItems">Search</h4>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <h4 className="navItems">Buy Property</h4>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <h4 className="navItems">Rent property</h4>
          </Link>
          <BsXLg className="closeMenu " onClick={ShowNavbar} />
        </NavBars>
        <main>
          <BsMenuButtonWide className="menuIcon" onClick={ShowNavbar} />
        </main>
      </Content>
    </Wrapper>
  );
}

export default Navbar;
