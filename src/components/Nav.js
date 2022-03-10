import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { LinkStyled, NavList } from './Nav.styled';

const LINKS = [
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/Starred',
    text: 'Starred',
  },
];
const Nav = () => {
  const location = useLocation();

  return (
    <>
      <NavList>
        {LINKS.map(item => (
          <li key={item.to}>
            <LinkStyled
              to={item.to}
              className={item.to === location.pathname ? 'active' : ''}
            >
              <b>{item.text}</b>
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </>
  );
};

export default Nav;
