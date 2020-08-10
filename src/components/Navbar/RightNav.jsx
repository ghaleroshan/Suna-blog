import React from 'react';
import { Link as ReactRouterDomLink } from 'react-router-dom';
import styled from 'styled-components';
import { THEME } from '../../common/constant/theme';

const Ul = styled.ul`
  list-style: none;
  box-sizing: border-box;
  padding: 10px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-flow: column wrap;
    position: fixed;
    box-sizing: border-box;
    background: #eee;
    margin: 0;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 350px;
    padding-top: 60px;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
  }

  .Link:hover {
    transition: border-bottom 0.4s linear;
    border-bottom: 1px solid #fff;
  }
`;

const Link = styled(ReactRouterDomLink)`
  display: inline;
  color: #000;
  padding: 10px;
  text-decoration: none;
  font-size: 80%;
  font-family: ${THEME.font.fontFamily};
  font-weight: ${THEME.font.weight.bold};
  text-transform: uppercase;
  margin-left: 60px;

  :hover {
    transition: border-bottom 0.4s linear;
    border-bottom: 1px solid #fff;
  }
`;

export const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="/"> Home </Link>
      <Link to="/about-me">About Me</Link>
      <Link to="/contact-me">Contact</Link>
      <Link to="/login"> Login </Link>
    </Ul>
  );
};
