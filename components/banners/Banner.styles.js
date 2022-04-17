import styled from "styled-components";
// import Image from "next/image";

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* padding: 1em; */
  text-align: center;
  background: grey;
`;

export const Button = styled.button`
  width: 100%;
  background-color: var(--main-color);
  padding: 1em;
  border: none;
  border-radius: 10px;

  a {
    color: #fff;
    font-weight: 700;
  }

  :hover {
    background-color: var(--sec-color);
  }
`;

export const BannerImg = styled.img`
  width: 100%;
  height: 500px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
