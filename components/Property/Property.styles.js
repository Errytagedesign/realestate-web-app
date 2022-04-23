import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
  margin: 1.5em auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space- between;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2em;
  text-align: center;

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
    color: var(--main-color);
  }

  button {
    margin-top: 3em;
    padding: 2em;
    text-transform: uppercase;
  }

  a {
    font-size: 1.5rem;
  }

  .CardTitle,
  .CardIcons {
    width: 100%;
    display: inherit;
    justify-content: space-between;
    align-items: center;
    margin-top: 1em;
  }

  .agentImg {
    border-radius: 50%;
  }

  .HomeIcons {
    color: var(--sec-color);
  }

  .Verified {
    color: green;
  }

  .cardImg {
    width: 100%;
    height: 500px;
  }

  /* @media screen and (min-width: 768px) {
    h2 {
      font-size: 4rem;
    }
    p {
    }
  } */
`;

export const CardImg = styled(Image)`
  width: 100%;
  height: 500px;

  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
