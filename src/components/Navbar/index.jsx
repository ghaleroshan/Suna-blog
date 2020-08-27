import React from "react";
import styled from "styled-components";
import { Burger } from "./Burger";

const Nav = styled.nav`
  height: 100%;
  width: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  background: #777;
  position: sticky;
  margin-bottom: 5px;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all s ease-in;
  z-index: 1;
`;

export const Navbar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  );
};
