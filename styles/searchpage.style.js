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
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  h2 {
    color: var(--darkGrey);
    text-align: start;
    margin: 1em 1.5em;
  }

  .Noresult p {
    color: #c6c6c6;
  }

  .Search {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 1em;
    justify-content: center;

    background: var(--lightGrey);

    :hover {
      box-shadow: var(--medShadow);
    }
  }

  .MapItems {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1em;
  }

  .EachItems {
    width: 33%;
  }

  .filterIcon {
    color: var(--main-color);
    font-size: 1.5rem;
    box-shadow: 4px 15px 18px 1px rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 768px) {
    .EachItems {
      width: 47%;
    }
  }
  @media screen and (max-width: 500px) {
    .EachItems {
      width: 100%;
    }
  }
`;
