import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { THEME } from "../common/constant/theme";
import { Spinner } from "../common/ui";

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f8f8f8;
`;

const Wrapper = styled.div`
  max-width: 768px;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #fff;
  box-sizing: border-box;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const ImageWrapper = styled.div`
  width: 50%;
`;

const Tag = styled.p`
  font: 12px ${THEME.font.fontFamily};
  text-align: center;
  text-decoration: underline;
  margin: 0;
`;

const Details = styled(Tag)`
  text-decoration: none;
`;

const Image = styled.img`
  max-width: 350px;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const LoginForm = styled.form`
  max-width: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  font: bold 28px ${THEME.font.fontFamily};
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 80%;
  border: none;
  border-bottom: 1px solid #cdcdcd;
  padding: 8px 24px;
  font: 12px ${THEME.font.fontFamily};
  margin-bottom: 10px;
  outline: none;
  cursor: pointer;
  transition: border-bottom 0.2s cubic-bezier(0.61, 0.18, 0.84, 0.7);

  &:focus {
    border-bottom: 1px solid #000;
  }
`;

const CheckBox = styled(Input)`
  width: 12px;
  margin: 0 12px 0 0;
`;

const Icon = styled.i`
  position: absolute;
  font-size: 10px;
  left: 0;
  top: 30%;
  color: #495057;
`;

const RightIcon = styled(Icon)`
  position: absolute;
  left: 90%;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0 20px 0;
`;

const PrimaryButton = styled.button`
  max-width: 120px;
  background: #145da0;
  border: none;
  box-sizing: border-box;
  padding: 10px 24px;
  color: #fff;
  border-radius: 5px;
  font: 12px ${THEME.font.fontFamily};
  margin-bottom: 50px;
  outline: none;
  transition: all 0.1s ease;

  :hover {
    background: #1a77cd;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  cursor: pointer;
`;

const SocialIcons = styled.i`
  font-size: 24px;
  margin-left: 20px;

  &.facebook {
    color: #3c599a;
  }
  &.twitter {
    color: #1e9df2;
  }
  &.google {
    color: #e44636;

    :hover {
      color: #cc2c1b;
    }
  }

  :hover {
    color: #1a77cd;
  }
`;

const GoBackbtn = styled(PrimaryButton)`
  position: absolute;
  top: 2%;
  left: 50%;
  transform: translateX(-50%);
`;

let timeout;

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
      alert("You have been succesfully signed in");
      history.push("/");
    }, 2000);
  };

  useEffect(() => {
    if (timeout) {
      clearTimeout(timeout);
    }
  }, []);

  return (
    <Body>
      {loading ? (
        <Spinner />
      ) : (
        <Wrapper>
          <Link to="/">
            <GoBackbtn> Go Back </GoBackbtn>
          </Link>
          <ImageWrapper>
            <Image src={`${process.env.PUBLIC_URL}/assets/img/login.jpg`} />
            <Tag> create an account</Tag>
          </ImageWrapper>
          <LoginForm>
            <Title> Log In</Title>
            <InputWrapper>
              <Icon className="fas fa-user" />
              <Input placeholder="Your Name" />
              <RightIcon className="far fa-keyboard" />
            </InputWrapper>
            <InputWrapper>
              <Icon className="fas fa-unlock-alt" />
              <Input placeholder="Password" />
              <RightIcon className="far fa-keyboard" />
            </InputWrapper>
            <CheckboxWrapper>
              <CheckBox type="checkbox" />
              <Details> Remember me</Details>
            </CheckboxWrapper>
            <PrimaryButton type="submit" onClick={handleSubmit}>
              Log in
            </PrimaryButton>
            <SocialWrapper>
              <Details> Or login with</Details>
              <SocialIcons className="fab fa-facebook-square facebook" />
              <SocialIcons className="fab fa-twitter-square twitter" />
              <SocialIcons className="fab fa-google-plus-square google" />
            </SocialWrapper>
          </LoginForm>
        </Wrapper>
      )}
    </Body>
  );
};
