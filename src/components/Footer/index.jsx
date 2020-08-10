import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon as faIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { COLORS } from '../../common/constant/colors/index';
import { THEME } from '../../common/constant/theme';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  box-sizing: border-box;
  text-align: center;
  height: 80px;
  font-family: ${THEME.font.fontFamily};
  color: ${COLORS.dimGray};
  padding: 20px;
  border-top: 1px solid #ccc;
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 250px;
  justify-content: center;
  padding: 5px;
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  padding: 10px;
`;

const FontAwesomeIcon = styled(faIcon)`
  &:hover {
    color: ${COLORS.midBlue};
    transform: rotate('360deg');
  }
`;

const today = new Date().getUTCFullYear();

export const Footer = () => {
  return (
    <Wrapper>
      <Container>&#169; {today} SUKUNA LAMA &reg; &trade;</Container>
      <Container>
        <SocialMediaWrapper>
          <FontAwesomeIcon icon={faTwitter} size='2x' />
        </SocialMediaWrapper>
        <SocialMediaWrapper>
          <FontAwesomeIcon icon={faFacebook} size='2x' />
        </SocialMediaWrapper>
        <SocialMediaWrapper>
          <FontAwesomeIcon icon={faInstagram} size='2x' />
        </SocialMediaWrapper>
      </Container>
    </Wrapper>
  );
};
