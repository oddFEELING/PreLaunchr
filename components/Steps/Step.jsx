import React from 'react';
import * as S from './Step.component';
import Image from 'next/image';
import CreateImg from '../../assets/images/create_img.svg';
import TaskImg from '../../assets/images/task_img.svg';
import PayImg from '../../assets/images/pay_img.svg';

const Step = () => {
  //-- step data ------------------/
  const stepData = [
    {
      title: `Create an `,
      focus: `ACCOUNT`,
      content: `Get our app on our Android or IOS device for free and registera new account with your credentials to join the GoLoKa community`,
      image: CreateImg,
      align: `right`,
    },
    {
      title: `Complete `,
      focus: `SURVEYS`,
      content: `Check out all avakilable surveys and engage in simple surveys within minutes `,
      image: TaskImg,
      align: `left`,
    },
    {
      title: `Get `,
      focus: `PAID!`,
      content: `After completing surveys ou get rewarded, choose from a vast range of methods to receive your reward based on your location.`,
      image: PayImg,
      align: `right`,
    },
  ];
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
        {/* ----- step content ----- */}
        {stepData.map((step, index) => {
          return (
            <S.StepDiv align={step.align} key={index}>
              {/* ----- image area ----- */}
              <S.StepImg data-aos='zoom-in' data-aos-offset='100'>
                <Image src={step.image} alt='' layout='fill' />
              </S.StepImg>
              {/* ----- text area ----- */}
              <S.StepTxt align={step.align}>
                <h1 data-aos={`fade-${step.align}`}>
                  {step.title} <b>{step.focus}</b>
                </h1>
                <p data-aos={`fade-${step.align}`} data-aos-delay='300'>
                  {step.content}
                </p>
              </S.StepTxt>
            </S.StepDiv>
          );
        })}
      </S.Main>
    </S.Container>
  );
};

export default Step;
