import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 1.5em auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  /* :hover {
    box-shadow: 4px 15px 18px 1px rgba(0, 0, 0, 0.3);
    border: solid var(--grad) 2px;
    border-radius: 5px;
  } */

  small {
    /* display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center; */
    background var(--darkGrey);
    padding: .5em;
    margin: 0 .1em;
    line-height: 34px;
  }

`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  align-items: center;
  justify-content: space-around;

  /* h2,
  h4,
  p {
    color: var(--white);
  } */

  h2 {
    font-size: var(--fontBig);
    color: var(--main-color);
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
    margin-top: 2em;
  }

  .agentImg {
    border-radius: 50%;
  }

  .HomeIcons,
  .title {
    color: var(--medGrey);
  }

  .Verified {
    color: green;
  }

  .cardImg {
    width: 100%;
    height: 500px;
  }

  .desc {
    font-weight: 300;
    color: grey;
    text-align: justify;
    margin-top: 1em;
  }

  @media screen and (width: 500px) {
    width: 90%;
  }

  /* @media screen and (min-width: 768px) {
    h2 {
      font-size: 4rem;
    }
    p {
    }
  } */
`;
