import React from "react";
import styled from "styled-components";
import { THEME } from "../../common/constant/theme";
import { LOGO } from "../../common/constant/icon_base64";
import { Link } from "react-router-dom";

const HeroImage = styled.div`
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  width: 100%;
  height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 54px;
  font-family: ${THEME.font.fontFamily};
  font-weight: ${THEME.font.weight.thin};
  color: #333;
  text-transform: uppercase;
  margin: 40px 0 10px 0;
`;

const SubTitle = styled.h4`
  font-size: 32px;
  font-family: ${THEME.font.fontFamily};
  font-weight: ${THEME.font.weight.thin};
  margin: 0;
`;

const ImgStyle = styled.img`
  max-width: 200px;
  width: 100%;
  height: auto;
  opacity: 0.7;
`;

export const Hero = () => {
  return (
    <HeroImage>
      <Link to="/">
        <ImgStyle src={`data:image/png;base64 ${LOGO}`} />
      </Link>

      <Title> Welcome to My world</Title>
      <SubTitle> Hope You will enjoy </SubTitle>
    </HeroImage>
  );
};
