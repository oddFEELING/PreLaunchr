//--------------------------------------->
//-- # FOOTER STYLE COMPONENT ------------------/
//--------------------------------------->
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  min-height: 10vh;
  z-index: 10;
  display: flex;
  gap: 3vw;
  padding: 0 4vh;
  align-items: center;
  color: ${(props) => props.theme.color.clr_3};
  background-color: ${(props) => props.theme.color.clr_9};

  h1 {
    color: ${(props) => props.theme.color.clr_7};
  }

  p {
    font-weight: 400;
    cursor: pointer;
    font-size: clamp(0.6rem, 0.8vw, 1rem);
    transition: 300ms all ease-in-out;

    &:hover {
      color: ${(props) => props.theme.color.clr_10};
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
