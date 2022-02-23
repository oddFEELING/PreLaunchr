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

export const Main = styled.section`
  width: 100%;
  height: 120vh;
  display: flex;
  padding: 2% 3%;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.color.clr_3};
  background-color: ${(props) => props.theme.color.clr_1};

  h1 }
  font-family: ${(props) => props.theme.font.font_1};
  font-size: clamp(1.5rem, 3.5vw, 5rem);
`;

export const HeaderDiv = styled.span`
  width: 20%;
  height: 0.7%;
  margin-left: -12%;
  margin-top: -1.7%;
  background-color: ${(props) => props.theme.color.clr_2};
`;
