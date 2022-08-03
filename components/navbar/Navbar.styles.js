import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  /* background: var(--grad); */
  align-items: center;
  justify-content: space-around;
  border-bottom: solid 2px var(--lightGrey);

  /* 
  :hover {
    box-shadow: 4px 15px 18px 1px rgba(0, 0, 0, 0.3);
    border: solid var(--medGrey) 2px;
    border-radius: 5px;
  } */
`;

export const Content = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  padding: 0.5em;
  text-align: center;
  align-items: center;
  justify-content: space-between;

  h2 {
    cursor: pointer;
    color: var(--main-color);
  }

  .menuIcon {
    color: #fff;
    font-weight: 700;
    font-size: var(--fontBig);
    cursor: pointer;
    visibility: hidden;
    color: var(--grad);
  }

  @media screen and (max-width: 768px) {
    .menuIcon {
      visibility: visible;
    }
  }
`;

export const NavBars = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;

  .navItems {
    padding: 0.5em;
    /* text-transform: uppercase; */
    font-weight: 500;
    cursor: pointer;
    color: #000;
  }
  .closeMenu {
    color: #fff;
    font-weight: 700;
    font-size: var(--fontBig);
    cursor: pointer;
    visibility: hidden;
  }

  @media screen and (max-width: 768px) {
    .closeMenu {
      position: absolute;
      left: 70%;
      visibility: visible;
    }
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    width: 100%;
    top: ${({ navbar }) => (navbar ? "0" : "-100%")};
    /* top: -100%; */
    left: 0;
    /* right: 0; */
    flex-direction: column;
    background: var(--grad);
    padding: 1.5em;
    transition: 350ms;
    z-index: 200000000;
    .navItems {
      color: #fff;
    }
  }
  /* .navItems {
    background: var(--grad);
  } */
`;
