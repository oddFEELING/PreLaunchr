import React from 'react';
import Image from 'next/image';
import JairaImg from '../../assets/images/jaira.png';
import JSKImg from '../../assets/images/jsk.jpeg';
import EkitiImg from '../../assets/images/ekiti.jpg';
import TapImg from '../../assets/images/tap.jpeg';
import CleenImg from '../../assets/images/cleen.jpg';
import ConDevImg from '../../assets/images/condev.webp';
import * as S from './company.component';
import { Grid } from '@mui/material';

const Company = () => {
  const GridStyle = {
    width: '80%',
    height: '70%',
  };
  const CompData = [
    { name: 'Jairaa', image: JairaImg },
    { name: 'Ekiti state Govt.', image: EkitiImg },
    { name: 'Jsk', image: JSKImg },
    { name: 'TapNitiative', image: TapImg },
    { name: 'Clean Foundation', image: CleenImg },
    { name: 'Connected Development', image: ConDevImg },
  ];
  return (
    <S.Container>
      {/* ----- title section ----- */}
      <h1>Trusted by</h1>

      {/* ----- Companies section ----- */}
      <S.CompanySect>
        <Grid
          container
          style={{ ...GridStyle }}
          spacing={3}
          justifyContent='center'
        >
          {CompData.map((item, index) => {
            return (
              <Grid item key={index} lg={4} md={4} sm={6}>
                <S.CardItem data-aos='fade-up' data-aos-offset='300'>
                  <div className='img'>
                    <Image src={item.image} alt='' layout='fill' />
                  </div>
                  <h1>{item.name}</h1>
                </S.CardItem>
              </Grid>
            );
          })}
        </Grid>
      </S.CompanySect>
    </S.Container>
  );
};

export default Company;
