import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  border: 2px solid #000;
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    background: #000;
    &:after {
      transform: translate(0);
    }
  }
  &::after {
    content: '';
    left: 8px;
    bottom: 0px;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: -1;
    transform: translate(0, 100%);
    transition: all 0.25s ease;
  }
`;

export const Button = () => {
  return <ButtonStyle> Button 1</ButtonStyle>;
};
