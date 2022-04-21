import React from "react";
import { Wrapper, Content, Button, BannerImg } from "./Banner.styles";
import Link from "next/link";

function Banners({
  purpose,
  ImageUrl,
  title1,
  title2,
  desc1,
  desc2,
  LinkName,
  buttonText,
}) {
  return (
    <Wrapper>
      <BannerImg src={ImageUrl} alt="banners image" />
      <Content>
        <h4>{purpose}</h4>
        <h2>{title1}</h2>

        <p>{desc1}</p>

        <button className="btn">
          <Link href={LinkName}>{buttonText}</Link>
        </button>
      </Content>
    </Wrapper>
  );
}

export default Banners;
