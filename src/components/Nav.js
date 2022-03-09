import React from 'react';
import { Link } from 'react-router-dom';

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
  return (
    <>
      <ul>
        {LINKS.map(item => (
          <li key={item.to}>
            <Link to={item.to}>Go to {item.text} page</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Nav;
