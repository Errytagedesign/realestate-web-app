import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 1em 0em;
  width: 100%;
  display: flex;
  background: var(--lightGrey);
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5em;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  h2 {
    color: var(--darkGrey);
  }
`;
