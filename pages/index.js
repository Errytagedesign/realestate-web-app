import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

const Header = styled.h3`
  color: red;
`;

export default function Home() {
  return (
    <div className={styles.container}>
      <Header> Hello world </Header>
    </div>
  );
}
