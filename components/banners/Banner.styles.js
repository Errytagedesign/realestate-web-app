import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 100%;
  background-color: var(--main-color);

  :hover {
    background-color: var(--sec-color);
  }
`;
