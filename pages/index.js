import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Banners from "../components/banners/Banners";

export default function Home() {
  return (
    <div>
      <Banners
        purpose="RENT A HOME"
        title1="Rental Homes for "
        title2="everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and many more"
        butttonText="Explore More"
      />
    </div>
  );
}
