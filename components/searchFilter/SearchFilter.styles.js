import styled from "styled-components";

export const Wrapper = styled.div`
  /* margin: 1em 0em; */
  width: 100%;
  display: flex;
  background: var(--lightGrey);
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.div`
  display: flex;

  margin: 1em 0em;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.5em;
  width: 100%;
  border-top: solid grey 1px;

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 33%;
  }
  select {
    width: 100%;
    padding: 1em;
    margin: 0.5em;
  }

  @media screen and (max-width: 500px) {
    section {
      width: 100%;
    }
  }
`;
