import React from "react";
import styled from "styled-components";
import { THEME } from "../../common/constant/theme";
import {COLORS } from "../../common/constant/colors"

const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  max-width: 300px;
  flex-flow: column;
  padding: 0 0 50px 0;

  @media (max-width: 600px) {
    display: block;
    max-width: 600px;
    width: 100%;
    text-align: center;
  }
  `;

const PersonalInfo = styled.div`
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
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
  color: ${COLORS.offBlack};
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
`;

const SocialTitle = styled(Description)`
  color: ${COLORS.offBlack};
  font-weight: ${THEME.font.weight.normal};
  margin: 0;
`;

const ImgStyle = styled.img`
  max-width: 400px;
  width: 100%;
  height: auto;
  opacity: 0.9;
`;

export const SideBar = ({ user }) => {
  return (
    <Wrapper>
      <PersonalInfo>
        {user && <Title> {user.name}</Title>}
        <ImgStyle src={require('../../common/constant/img/suna.jpeg')}> 
      </ImgStyle>
        <Description>{user.description}</Description>
      </PersonalInfo>
      <>
        <Title> Get in Touch </Title>
        <Description>
          Follow me on social networks for even more tips, outfits and photos!
          Trendy updates every day.
        </Description>
        <SocialWrapper>
          <SocialLink href="https://www.facebook.com/ghaleroshan/">
            <SocialTitle>+ FACEBOOK</SocialTitle>  
          </SocialLink>
          <SocialLink href="https://www.facebook.com/ghaleroshan/">
          <SocialTitle>+ INSTAGRAM</SocialTitle>  
            
          </SocialLink>
          <SocialLink href="https://www.facebook.com/ghaleroshan/">
          <SocialTitle>+ TWITTER</SocialTitle>  
            
          </SocialLink>
        </SocialWrapper>
      </>
    </Wrapper>
  );
};
