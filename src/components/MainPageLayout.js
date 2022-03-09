import React from 'react';
import Title from '../pages/Title';
import Nav from './Nav';

const MainPageLayout = ({ children }) => {
  return (
    <div
      className="container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Title
        title="Box-Office"
        subTitle="Are you looking for a movie or an actor?"
      />
      <Nav />
      {children}
    </div>
  );
};

export default MainPageLayout;
