import React from "react";
import { Wrapper, Content, CardImg } from "./Property.styles";
import Link from "next/link";
import { BsFillPatchCheckFill, BsFillGridFill } from "react-icons/bs";
import { FaBed } from "react-icons/fa";
import { MdBathroom } from "react-icons/md";
import Image from "next/image";
function Property({ LinKName }) {
  return (
    <Wrapper>
      <Link href="#">
        <a>
          <Content>
            <CardImg
              src="https://realtor.vercel.app/_next/image?url=https%3A%2F%2Fbayut-production.s3.eu-central-1.amazonaws.com%2Fimage%2F110499193%2F56b768304c344e3cb71d9b968dfb0323&w=640&q=75"
              alt="House Images"
            />

            <section className="CardTitle">
              {" "}
              <BsFillPatchCheckFill className="Verified" />{" "}
              <h3>AED 25000/monthly</h3>{" "}
              <Image
                className="agentImg"
                src="https://bayut-production.s3.eu-central-1.amazonaws.com/image/37082548/e7a7add5fd2b439086782eedc4e60f54"
                alt=""
                width={30}
                height={30}
              />
            </section>
            <section className="CardIcons">
              {" "}
              <p>2</p> <MdBathroom className="HomeIcons" /> <small>|</small>
              <p>2</p> <FaBed className="HomeIcons" /> <small>|</small>
              <p>2</p> <BsFillGridFill className="HomeIcons" /> <small>|</small>
            </section>
            <p>lllllllllllllllllll</p>
          </Content>
        </a>
      </Link>
    </Wrapper>
  );
}

export default Property;
