import React from "react";
import Head from "next/head";

import Banners from "../components/banners/Banners";

export default function Home() {
  return (
    <div>
      <Banners
        purpose="RENT A HOME"
        title1="Rental Homes for Everyone "
        desc1="Explore Apartments, Villas, Homes and many more"
        buttonText="Explore More"
        LinkName=""
        ImageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
    </div>
  );
}
