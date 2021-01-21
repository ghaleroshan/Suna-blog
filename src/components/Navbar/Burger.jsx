import React, { useState } from "react";
import styled from "styled-components";
import { RightNav } from "./RightNav";
import { LOGO } from "../../common/constant/icon_base64";


const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  cursor: pointer;

  @media (max-width: 790px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 1px;
    background-color: #000;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.2s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const ImgStyle = styled.img`
  max-width: 150px;
  width: 100%;
  height: auto;
  opacity: 0.9;
`;

export const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ImgStyle src={`data:image/png;base64 ${LOGO}`} />
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};
