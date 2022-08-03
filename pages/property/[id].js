import React from "react";

// General Imports
import Link from "next/link";
import Image from "next/image";
import defaultPhoto from "../../assets/image/house.jpg";
import millify from "millify";

// Icons
import { BsFillPatchCheckFill, BsFillGridFill } from "react-icons/bs";
import { FaBed, FaBath } from "react-icons/fa";

// comps
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImgSlider from "../../components/Slider/ImgSlider";

// styles
import { Wrapper, Content } from "./[id].styles";

function PropertyDetails({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) {
  console.log(amenities);
  return (
    <Wrapper>
      <main className="m-1 m-lg-3 p-1 p-lg-3">
        {photos && <ImgSlider data={photos} />}
      </main>
      <Content className="container">
        <section className="CardTitle">
          {" "}
          {isVerified && <BsFillPatchCheckFill className="Verified" />}{" "}
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
        <section>
          <p className="title mt-5">{title} </p>
          <div
            className="desc"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </section>
      </Content>
      <section
        className="d-flex flex-wrap mt-4 details p-2 p-md-5 justify-content-between"
        style={{ background: "var(--grad)", color: "#fff" }}
      >
        <article className="d-flex flex-row align-items-center">
          <h5> Type:</h5> <h3 className="text-uppercase">{type} || </h3>
        </article>

        <article className="d-flex flex-row align-items-center ">
          <h5> Purpose:</h5> <h3 className="text-uppercase">{purpose} || </h3>
        </article>
        <article className="d-flex flex-row align-items-center">
          <h5> FurnishingStatus:</h5>{" "}
          <h3 className="text-uppercase">
            {furnishingStatus ? furnishingStatus : "None"}{" "}
          </h3>
        </article>

        <article className="d-flex flex-column mt-3 border-top col-12">
          {amenities ? <h5> Amenities:</h5> : null}
          <div className=" ">
            {amenities.map((item) =>
              item.amenities.map((amenity) => (
                <small key={amenity.text}> {amenity.text} </small>
              ))
            )}
          </div>
        </article>
      </section>
    </Wrapper>
  );
}

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
