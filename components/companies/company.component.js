//--------------------------------------->
//-- # COMPANY STLE COMPONENT ------------------/
//--------------------------------------->

import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  min-height: 40vh;
  display: flex;
  gap: 3vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.clr_3};
  z-index: 10;
  padding: 2vh 3vw;
`;

//-- company setion ------------------/
export const CompanySect = styled.section`
  width: 100%;
  height: auto;
  padding: 2vh 3vw;
  display: flex;
  gap: 5vw;
  align-items: center;
  justify-content: center;
`;

export const CardItem = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  gap: 2vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .img {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  h1 {
    font-size: clamp(1rem, 0.8vw, 2rem);
    font-family: ${(props) => props.theme.font.font_2};
    font-weight: 500;
  }
`;
