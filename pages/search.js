import React, { useState } from "react";
import { useRouter } from "next/router";

// utils
import { fetchApi, baseUrl } from "../utils/fetchApi";

// Styles
import { Wrapper, Content } from "../components/searchpage.style";

// Comps
import SearchFilter from "../components/searchFilter/SearchFilter";
import { BsFilterCircle } from "react-icons/bs";
import Property from "../components/Property/Property";
import Image from "next/image";

// Images
import Noresult from "../assets/image/noresult.svg";

function Search({ properties }) {
  // console.log(properties);
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();
  return (
    <Wrapper>
      <Content>
        <section
          onClick={() => setSearchFilters((prev) => !prev)}
          className="Search"
        >
          <BsFilterCircle className="filterIcon" />{" "}
          <h2> Search Property by Filter</h2>
        </section>
        {searchFilters && <SearchFilter />}

        <h2 className="ProTitle">Properties {router.query.purpose}</h2>
        <section className="MapItems">
          {properties.map((property) => (
            <section key={property.id} className="EachItems">
              <Property property={property} key={property.id} />
            </section>
          ))}
        </section>
        {properties.length === 0 && (
          <section className="Noresult mx-auto d-flex flex-column align-items-center justify-content-center text-center">
            <Image src={Noresult} alt="No result" />
            <p> No result found </p>
          </section>
        )}
      </Content>
    </Wrapper>
  );
}

export default Search;

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}
