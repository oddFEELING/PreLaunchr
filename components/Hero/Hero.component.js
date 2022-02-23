//--------------------------------------->
//-- # HERO STYLES ------------------/
//--------------------------------------->

import styled from 'styled-components';

//-- Hero container  ------------------/
export const HeroContainer = styled.div`
  width: 100%;
  height: ${(props) => (props.vh ? `${props.vh}px ` : '100vh')};
  position: sticky;
  top: 0;
  left: 0;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    background-color: ${(props) => `rgba(242,241,255,${props['bg-level']})`};
    transition: 100ms all ease-in;
  }
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

//--------------------------------------->  text section
export const TextSection = styled.section`
  width: 60%;
  height: 100%;
  padding: 2vh 3.5vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 720px) {
    width: 100%;
    justify-content: center;
    text-align: center;
  }
`;

// logo text
export const LogoText = styled.h3`
  color: ${(props) => props.theme.color.clr_7};
  font-family: ${(props) => props.theme.font.font_1};
  font-weight: 800;
  user-select: none;
  font-size: clamp(1rem, 1.3vw, 2rem);

  @media (max-width: 720px) {
    position: absolute;
    top: 2vh;
    left: 2vw;
  }
`;

// Text content
export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 0 2vw;
  margin-top: -10vh;
  flex-direction: column;
  justify-content: center;
  gap: 1vh;

  h1 {
    width: 80%;
    font-family: ${(props) => props.theme.font.font_3};
    font-size: clamp(2rem, 4vw, 10rem);
    color: ${(props) => props.theme.color.clr_9};
    font-weight: 800;

    @media (max-width: 720px) {
      width: 80%;
      font-size: 2.5rem;
    }
  }
  p {
    width: 70%;
    font-family: ${(props) => props.theme.font.font_2};
    font-size: clamp(1rem, 1vw, 6rem);
    color: ${(props) => props.theme.color.clr_8};

    @media (max-width: 720px) {
      width: 60%;
    }
  }

  @media (max-width: 720px) {
    margin: 0;
    align-items: center;
  }
`;

// email section
export const EmailDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 10px;
  margin-top: 3vh;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 720px) {
    justify-content: center;
  }
`;

// email input
export const EmailInput = styled.input`
  width: 60%;
  height: 50px;
  padding: 1% 3%;
  font-style: italic;
  border-radius: 0.2vw;
  font-size: clamp(0.8rem, 0.9vw, 2rem);
  font-family: ${(props) => props.theme.font.font_2};
  border: thin solid ${(props) => props.theme.color.clr_8};
  outline-color: transparent;

  &:focus {
    outline-color: ${(props) => props.theme.color.clr_2};
  }

  @media (max-width: 720px) {
    height: 40px;
  }
`;

// email button
export const EmailBtn = styled.button`
  width: 20%;
  height: 50px;
  border: 0;
  cursor: pointer;
  position: relative;
  font-style: italic;
  font-weight: 600;
  border-radius: 0.2vw;
  font-size: clamp(0.7rem, 0.9vw, 2rem);
  color: ${(props) => props.theme.color.clr_3};
  font-family: ${(props) => props.theme.font.font_3};
  background: linear-gradient(to right, #685ff0, #685ff0, #8582e4);

  &::after {
    content: '';
    width: 0;
    height: 92%;
    z-index: 3;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    user-select: none;
    transition: 300ms all ease-in-out;
    background-color: rgba(255, 255, 255, 0.05);
    border: 0px solid ${(props) => props.theme.color.clr_3};
  }

  &:hover {
    transform: scale(1.15) translateX(10px);
  }
  &:hover::after {
    width: 97%;
    /* transform: scale(1.15); */
    border: 3px solid ${(props) => props.theme.color.clr_3};
    box-shadow: ${(props) => props.theme.shadow.sm};
  }

  @media (max-width: 720px) {
    height: 40px;
  }
`;
//--------------------------------------->  image section

export const ImageSection = styled.section`
  width: 40%;
  height: 100%;
  display: flex;
  transform-style: preserve-3d;
  position: relative;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #685ff0, #9790f3);

  @media (max-width: 720px) {
    width: 100%;
  }

  .ball {
    @media (max-width: 720px) {
      /* display: none; */
    }
  }
  .ball-1 {
    position: absolute;
    z-index: 4;
    left: 0;
    top: 12vh;
    width: 10vw;
    height: 3vh;
  }

  .ball-2 {
    position: absolute;
    z-index: 1;
    right: -8vw;
    top: 4vh;
    width: 25vw;
    height: 10vh;
  }

  .ball-3 {
    position: absolute;
    z-index: 1;
    left: 10vw;
    top: 12vh;
    width: 2vw;
    height: 2vh;
  }

  .ball-4 {
    position: absolute;
    z-index: 2;
    left: -9vw;
    top: 65vh;
    width: 12vw;
    height: 4vh;
  }

  .ball-5 {
    position: absolute;
    z-index: 6;
    right: 3vw;
    bottom: 28vh;
    width: 7vw;
    height: 4vh;
  }

  .ball-6 {
    position: absolute;
    z-index: 6;
    right: 15vw;
    bottom: 10vh;
    width: 2vw;
    height: 4vh;
  }
`;

export const WindowScreen = styled.div`
  width: 120%;
  height: 55%;
  display: flex;
  z-index: 3;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-left: -11vw;
`;

// copy text
export const CopyText = styled.p`
  color: ${(props) => props.theme.color.clr_9};

  &.desktop {
    display: block;
    @media (max-width: 720px) {
      display: none;
    }
  }

  &.mobile {
    display: none;

    @media (max-width: 720px) {
      display: block;
      position: absolute;
      bottom: 2vh;
    }
  }
`;
