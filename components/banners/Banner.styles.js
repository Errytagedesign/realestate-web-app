import styled from "styled-components";
// import Image from "next/image";

export const Wrapper = styled.div`
  margin: 1.5em auto;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 4em;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2em;
  text-align: center;
  background: var(--main-color);

  align-items: center;
  justify-content: space-between;

  h2,
  h4,
  p {
    color: var(--white);
  }

  h2 {
    font-size: var(--fontSuperBig);
  }

  p {
    font-size: var(--fontMed);
  }

  button {
    margin-top: 3em;
    padding: 2em;
    text-transform: uppercase;
  }

  a {
    font-size: 1.5rem;
  }

  /* @media screen and (min-width: 768px) {
    h2 {
      font-size: 4rem;
    }
    p {
    }
  } */
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

  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
