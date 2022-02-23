import React from 'react';
import { useRef, useEffect } from 'react';
import * as S from './Hero.component';
import Image from 'next/image';
import useScroll from '../../hooks/useScroll';
import WindowImg from '../../assets/svg/window-screen.svg';
import Ball_1 from '../../assets/svg/ball-one.svg';
import Ball_2 from '../../assets/svg/ball-two.svg';
import Ball_3 from '../../assets/svg/ball-three.svg';
import Ball_4 from '../../assets/svg/ball-four.svg';
import Ball_5 from '../../assets/svg/ball-five.svg';
import Ball_6 from '../../assets/svg/ball-six.svg';
import useParallax from '../../hooks/useParallax';
import useVH from '../../hooks/useVH';

const Hero = () => {
  // refs for parallax elements
  const ref_Window = useRef(null);
  const ref_BallOne = useRef(null);
  const ref_BallTwo = useRef(null);
  const ref_BallThree = useRef(null);
  const ref_BallFour = useRef(null);
  const ref_BallFive = useRef(null);
  const ref_BallSix = useRef(null);

  const all_refs = [
    ref_BallOne,
    ref_BallTwo,
    ref_BallThree,
    ref_Window,
    ref_BallFour,
    ref_BallFive,
    ref_BallSix,
  ];

  // custom parallax hook
  //   useParallax([...all_refs]);
  const scroll = useScroll([...all_refs]);

  //-->  Ball data
  const BallData = [
    {
      src: Ball_1,
      ref: ref_BallOne,
      speed: 1,
      class: 'ball-1',
      aos: 'fade-up',
      delay: '400',
    },
    {
      src: Ball_2,
      ref: ref_BallTwo,
      speed: 2,
      class: 'ball-2',
      aos: 'fade-up',
      delay: '600',
    },
    {
      src: Ball_3,
      ref: ref_BallThree,
      speed: -3.7,
      class: 'ball-3',
      aos: 'fade-up',
      delay: '900',
    },
    {
      src: Ball_4,
      ref: ref_BallFour,
      speed: 3,
      class: 'ball-4',
      aos: 'fade-up',
      delay: '800',
    },
    {
      src: Ball_5,
      ref: ref_BallFive,
      speed: 4,
      class: 'ball-5',
      aos: 'fade-up',
      delay: '1000',
    },
    {
      src: Ball_6,
      ref: ref_BallSix,
      speed: 5,
      class: 'ball-6',
      aos: 'fade-up',
      delay: '700',
    },
  ];

  const windowH = useVH();
  return (
    <S.HeroContainer bg-level={scroll / 900}>
      <S.Main vh={windowH}>
        {/* ----- text section  ----- */}
        <S.TextSection>
          {/* ----- top area  ----- */}
          <S.LogoText>DATAPHYTE</S.LogoText>
          <S.Content>
            {/* ----- title text ----- */}
            <h1 data-aos='fade-right'>GoLoka launching soon...</h1>
            {/* ----- title content ----- */}
            <p data-aos='fade-right' data-aos-delay='200'>
              Get data from anywhere in Nigeria with just a few clicks and a
              user friendly interface to communicate with
            </p>
            {/* ----- email section ----- */}
            <S.EmailDiv>
              <S.EmailInput
                placeholder='Your best email'
                data-aos='fade-right'
                data-aos-delay='600'
              />
              <S.EmailBtn data-aos='fade-left' data-aos-delay='1100'>
                Let me in!
              </S.EmailBtn>
            </S.EmailDiv>
          </S.Content>

          <S.CopyText className='desktop'>
            2022 Dataphyte, all rights reserved
          </S.CopyText>
        </S.TextSection>

        {/* ----- image section ----- */}
        <S.ImageSection>
          {/* ----- Window Screen ----- */}
          <S.WindowScreen
            data-speed='.5'
            data-aos='fade-left'
            // data-aos-duration='500'
            ref={ref_Window}
          >
            <Image src={WindowImg} alt='' layout='fill' />
          </S.WindowScreen>

          {/* ----- Ball One ----- */}
          {BallData &&
            BallData.map((Ball, index) => {
              return (
                <div
                  className={`${Ball.class} ball`}
                  data-aos={Ball.aos}
                  data-aos-delay={Ball.delay}
                  data-aos-duration='500'
                  data-speed={Ball.speed}
                  ref={Ball.ref}
                  key={index}
                >
                  <Image src={Ball.src} alt='' layout='intrinsic' />
                </div>
              );
            })}
          <S.CopyText className='mobile'>
            2022 Dataphyte, all rights reserved
          </S.CopyText>
        </S.ImageSection>
      </S.Main>
    </S.HeroContainer>
  );
};

export default Hero;
