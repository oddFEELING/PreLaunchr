import React from 'react';
import * as S from './Step.component';

const Step = () => {
  return (
    <S.Container>
      <S.ArrowHead />
      <S.Main>
        {/* ----- Header ----- */}
        <h1 data-aos='fade-down' data-aos-offset='400' style={{ zIndex: '10' }}>
          How it Works
        </h1>
        <S.HeaderDiv
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-offset='400'
          style={{ zIndex: '1' }}
        />
      </S.Main>
    </S.Container>
  );
};

export default Step;
