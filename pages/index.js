import React from "react";
import Head from "next/head";

// Components
import Banners from "../components/banners/Banners";
import Property from "../components/Property/Property";

// Utils
import { baseUrl, fetchApi } from "../utils/fetchApi";

export default function Home({ propertiesForSale, propertiesForRent }) {
  console.log(propertiesForSale, propertiesForRent);
  return (
    <main>
      <section>
        <Banners
          purpose="RENT A HOME"
          title1="Rental Homes for Everyone "
          desc1="Explore Apartments, Villas, Homes and many more"
          buttonText="Explore More"
          LinkName=""
          ImageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        />
        <article className="forSale">
          {propertiesForSale.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </article>
      </section>
      <section>
        <Banners
          purpose="BUY A HOME"
          title1="Find, Buy & Own Your
        Dream Home "
          desc1="Explore from Apartments, land, builder floors,
        villas and more"
          buttonText="Explore More"
          LinkName=""
          ImageUrl="https://psgroup.in/blog/wp-content/uploads/2021/02/photo-1564013799919-ab600027ffc6.jpeg"
        />
      </section>
    </main>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
