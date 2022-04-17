import React from "react";
import { Wrapper, Contents, Button } from "./Banner.styles";
import Link from " next/link";
import Image from "next/image";

function Banners({
  purpose,
  ImageUrl,
  title1,
  title2,
  desc1,
  desc2,
  LinkName,
  butttonText,
}) {
  return (
    <Wrapper>
      <Image src={ImageUrl} alt="banners image" width={500} height={300} />
      <Contents>
        <h2>{purpose}</h2>
        <h2>{title1}</h2>
        <h2>{title2}</h2>
        <p>{desc1}</p>
        <Button>
          <Link href={LinkName}> {butttonText} </Link>
        </Button>
      </Contents>
    </Wrapper>
  );
}

export default Banners;
