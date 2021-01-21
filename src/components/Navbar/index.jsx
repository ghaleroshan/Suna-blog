import React from "react";
import styled from "styled-components";
import { Burger } from "./Burger";

const Nav = styled.nav`
  box-sizing: border-box;
  height: 5rem;
  background:#eee;
  position: sticky;
  margin-bottom: 5px;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: all s ease-in;
  z-index: 10;
`;

export const Navbar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  );
};
