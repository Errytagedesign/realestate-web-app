import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  align-items: center;

  .slick-prev:before,
  .slick-next:before {
    color: white;
  }

  .slick-prev {
    left: -2px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    align-items: center;
    background: var(--grad);
    z-index: 10000;
  }

  .slick-next {
    right: 0px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    align-items: center;
    background: var(--grad);
    z-index: 10000;
  }

  .slideCon {
    width: 100%;
  }
`;

// export const Content = styled.div`
//   display: flex;

//   margin: 1em 0em;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   padding: 0.5em;
//   width: 100%;
//   border-top: solid grey 1px;

//   section {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
//     width: 33%;
//   }
//   select {
//     width: 100%;
//     padding: 1em;
//     margin: 0.5em;
//   }

//   @media screen and (max-width: 500px) {
//     section {
//       width: 100%;
//     }
//   }
// `;
