import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background: red;
  align-items: center;
  justify-content: space-around;

  /* 
  :hover {
    box-shadow: 4px 15px 18px 1px rgba(0, 0, 0, 0.3);
    border: solid var(--medGrey) 2px;
    border-radius: 5px;
  } */
`;

export const Content = styled.div`
  position: relative;
  width: 85%;
  display: flex;
  flex-direction: row;
  padding: 0.5em;
  text-align: center;
  align-items: center;
  justify-content: space-between;

  h2 {
    cursor: pointer;
  }

  .menuIcon {
    color: #fff;
  }
`;

export const NavBars = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
  cursor: pointer;

  .navItems {
    color: #fff;
    padding: 1em;
  }

  @media screen and (max-width: 768px) {
    width: 40%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    cursor: pointer;
    background: var(--main-color);
    padding: 1.5em;
  }
`;
