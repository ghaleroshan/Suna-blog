import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Burger } from './Burger';
import { LOGO } from '../../common/constant/icon_base64';

const Nav = styled.nav`
  max-height: 90px;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all s ease-in;

  &.scrolled {
    position: fixed;
    background-color: #fff;
    top: 0;
    left: 0;
  }
`;
/* change background only when scrolled */

export const ImgStyle = styled.img`
  max-width: 150px;
  width: 100%;
  height: 100%;
`;

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    let scroll = window.scrollY;
    if (scroll > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }
  return (
    <Nav className={navbarClasses.join(' ')}>
      <ImgStyle src={`data:image/png;base64 ${LOGO}`} />
      <Burger />
    </Nav>
  );
};
