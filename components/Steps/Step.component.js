//--------------------------------------->
//-- # STEP STYLE COMPONENT ------------------/
//--------------------------------------->

import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 20;
`;

export const ArrowHead = styled.span`
  width: 100%;
  height: 15vh;
  background-color: #685ff0;
  clip-path: polygon(50% 0%, 50% 0, 100% 100%, 0 100%);
`;

//-- main content div ------------------/
export const Main = styled.section`
  width: 100%;
  min-height: 120vh;
  display: flex;
  padding: 2% 3%;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.color.clr_3};
  background-color: ${(props) => props.theme.color.clr_1};

  h1 {
    font-family: ${(props) => props.theme.font.font_1};
    font-size: clamp(1.5rem, 3.5vw, 5rem);
  }
`;

export const HeaderDiv = styled.span`
  width: 20%;
  height: 0.7%;
  margin-left: -12%;
  margin-top: -1.7%;
  background-color: ${(props) => props.theme.color.clr_2};
`;

//-- Step content ------------------/
export const StepDiv = styled.section`
  width: 100%;
  height: 85vh;
  display: flex;
  display: flex;
  padding: 0 12%;
  flex-direction: ${(props) =>
    props.align === 'left' ? 'row-reverse' : 'row'};
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  /* background-color: red; */

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    padding: 0;
  } ;
`;

export const StepImg = styled.div`
  width: 38%;
  height: 110%;
  position: relative;
  /* background-color: green; */

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
  } ;
`;

export const StepTxt = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) =>
    props.align === 'left' ? ' flex-start' : 'flex-end'};
  text-align: ${(props) => (props.align === 'left' ? ' left' : 'right ')};
  gap: 30px;
  /* background-color: yellow; */
  padding: 5%;

  h1 {
    font-weight: 700;
    font-size: clamp(1rem, 2.5vw, 5rem);
    font-family: ${(props) => props.theme.font.font_3};

    @media screen and (max-width: 800px) {
      font-size: clamp(1rem, 5vw, 5rem);
    }
  }

  b {
    font-weight: 900;
    position: relative;
    letter-spacing: 2.5px;
    font-size: clamp(1rem, 3vw, 7rem);
    padding: 1% 0;
    color: ${(props) => props.theme.color.clr_6};

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 5px;
      background-color: ${(props) => props.theme.color.clr_2};
      bottom: 0;
      left: 10%;
      z-index: -1;
    }

    @media screen and (max-width: 800px) {
      font-size: clamp(1rem, 6vw, 5rem);
    }
  }

  p {
    width: 80%;
    font-weight: 400;
    font-size: clamp(1rem, 1.1vw, 2rem);
    color: ${(props) => props.theme.color.clr_10};

    @media screen and (max-width: 800px) {
      font-size: clamp(1rem, 2.2vw, 10rem);
    }
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 50%;
    align-items: center;
    text-align: center;
  } ;
`;
