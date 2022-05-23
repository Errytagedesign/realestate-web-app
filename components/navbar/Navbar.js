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
