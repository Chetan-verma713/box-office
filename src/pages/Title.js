import React from 'react';
import { TitleWrapper } from './Title.styled';

const Title = ({ title, subTitle }) => {
  return (
    <TitleWrapper title={title}>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </TitleWrapper>
  );
};

export default Title;
