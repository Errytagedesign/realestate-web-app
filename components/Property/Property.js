import React from "react";

// Style Components
import { Wrapper, Content, CardImg } from "./Property.styles";

// General Imports
import Link from "next/link";
import Image from "next/image";
import defaultPhoto from "../../assets/image/house.jpg";
import millify from "millify";

// Icons
import { BsFillPatchCheckFill, BsFillGridFill } from "react-icons/bs";
import { FaBed, FaBath } from "react-icons/fa";

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
      <main>
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
                {isVerified && (
                  <BsFillPatchCheckFill className="Verified" />
                )}{" "}
                <h2>
                  AED {millify(price)} {rentFrequency && `/${rentFrequency}`}{" "}
                </h2>{" "}
                <Image
                  className="agentImg"
                  src={agency.logo.url}
                  alt=""
                  width={30}
                  height={30}
                />
              </section>
              <section className="CardIcons">
                {" "}
                <p>{baths}</p> <FaBath className="HomeIcons" /> |<p>{rooms}</p>{" "}
                <FaBed className="HomeIcons" /> |<p>{millify(area)} sqft</p>{" "}
                <BsFillGridFill className="HomeIcons" />|
              </section>
              <p className="title">
                {title.length > 30 ? `${title.slice(0, 30)}...` : title}{" "}
              </p>
            </Content>
          </a>
        </Link>
      </main>
    </Wrapper>
  );
}

export default Property;
