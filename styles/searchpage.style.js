import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 1em auto;

  /*width: 100%;
  display: flex;

  align-items: center;
  justify-content: space-around; */
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  background: var(--lightGrey);
  flex-direction: row;
  padding: 1em;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;

  :hover {
    box-shadow: var(--medShadow);
  }

  h2 {
    color: var(--darkGrey);
    text-align: center;
    margin: 0 1.5em;
  }

  section {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .filterIcon {
    color: var(--main-color);
    font-size: 1.5rem;
    box-shadow: 4px 15px 18px 1px rgba(0, 0, 0, 0.3);
  }
`;
