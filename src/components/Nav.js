import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/contact',
    text: 'Contact',
  },
];
const Nav = () => {
  return (
    <>
      <ul>
        {LINKS.map(item => (
          <li>
            <Link to={item.to}>Go to {item.text} page</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Nav;
