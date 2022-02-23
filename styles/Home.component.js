import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 800px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//-- test box ------------------/

export const TestB = styled.div`
  width: 100%;
  height: 15vh;
  z-index: 20;
  background-color: #685ff0;
  clip-path: polygon(50% 0, 50% 0, 100% 100%, 0 100%);
`;

export const TestC = styled.div`
  width: 100%;
  height: 160vh;
  z-index: 20;
  background-color: #685ff0;
`;
