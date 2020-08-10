import React from 'react';
import styled from 'styled-components';
import { THEME, CONTAINER_WIDTH } from '../../common/constant/theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${CONTAINER_WIDTH.md};
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
`;

const Title = styled.h2`
  font-family: ${THEME.font.fontFamily};
  font-weight: ${THEME.font.weight.bold};
  text-transform: uppercase;
  text-align: center;
  word-spacing: 5px;
  letter-spacing: 1.8px;
`;

const Description = styled.p`
  font-family: ${THEME.font.fontFamily};
  text-align: justify;
  font-weight: ${THEME.font.weight.thin};
  font-size: 90%;
  line-height: 1.6;
`;

export const Articles = ({ articles }) => {
  return (
    <Wrapper>
      <Title>{articles.title}</Title>
      <Description>{articles.content}</Description>
    </Wrapper>
  );
};
