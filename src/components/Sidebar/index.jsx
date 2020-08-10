import React from 'react';
import styled from 'styled-components';
import { THEME } from '../../common/constant/theme';

const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  max-width: 300px;
  height: 100vh;
  flex-flow: column;

  @media (max-width: 600px) {
    display: block;
    max-width: 600px;
    width: 100%;
  }
`;

const PersonalInfo = styled.div`
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  padding: 0 0 40px 0;
  margin-top: 40px;
`;

const Title = styled.h2`
  font-family: ${THEME.font.fontFamily};
  font-weight: ${THEME.font.weight.bold};
  text-transform: uppercase;
  word-spacing: 2px;
`;

const Description = styled.p`
  font-weight: ${THEME.font.weight.thin};
  font-family: ${THEME.font.fontFamily};
  font-size: 90%;
  color: #808080;
  word-spacing: 2px;
  line-height: 1.6;
`;

const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const SocialLink = styled.a`
  text-decoration: none;
  padding: 5px;
  color: #000;
`;

export const SideBar = ({ user }) => {
  return (
    <Wrapper>
      <PersonalInfo>
        {user && <Title> {user.name}</Title>}
        <Description>{user.description}</Description>
      </PersonalInfo>
      <PersonalInfo>
        <Title> Get in Touch </Title>
        <Description>
          Follow me on social networks for even more tips, outfits and photos!
          Trendy updates every day.
        </Description>
        <SocialWrapper>
          <SocialLink href='https://www.facebook.com/ghaleroshan/'>
            + FACEBOOK
          </SocialLink>
          <SocialLink href='https://www.facebook.com/ghaleroshan/'>
            + INSTAGRAM
          </SocialLink>
          <SocialLink href='https://www.facebook.com/ghaleroshan/'>
            + TWITTER
          </SocialLink>
        </SocialWrapper>
      </PersonalInfo>
    </Wrapper>
  );
};
