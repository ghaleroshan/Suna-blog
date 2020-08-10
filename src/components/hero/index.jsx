import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const ImageStyle = styled.img`
  width: 100vw;
  height: auto;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
`;

export const Hero = () => {
  return (
    <Wrapper>
      <ImageStyle src={`${process.env.PUBLIC_URL}/assets/img/Hero.JPG`} />
    </Wrapper>
  );
};
