import React from "react";

// Style Components
import { Wrapper, Content, CardImg } from "./Property.styles";

// General Imports
import Link from "next/link";
import Image from "next/image";
import defaultPhoto from "../../assets/image/house.jpg";

// Icons
import { BsFillPatchCheckFill, BsFillGridFill } from "react-icons/bs";
import { FaBed } from "react-icons/fa";
import { MdBathroom } from "react-icons/md";

function Property({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    title,
    baths,
    rooms,
    area,
    agency,
    isVerified,
    externalID,
  },
}) {
  return (
    <Wrapper>
      <Link href={`/property/${externalID}`} passHref>
        <a>
          <Content>
            <Image
              className="cardImg"
              src={coverPhoto ? coverPhoto.url : defaultPhoto}
              alt="House Images"
              width={600}
              height={300}
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
            <p>{title}</p>
          </Content>
        </a>
      </Link>
    </Wrapper>
  );
}

export default Property;
