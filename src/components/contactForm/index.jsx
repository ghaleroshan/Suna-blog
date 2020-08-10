import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { THEME } from '../../common/constant/theme';
import { Spinner } from '../../common/ui';
import { asRem } from '../../helpers';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  height: ${asRem(360)};
  width: 560px;
  margin: 0 auto;
  margin-top: 50px;
`;

const Wrapper = styled.div`
  max-width: 450px;
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  margin: 0 auto;
  margin-top: 10px;
`;

const Title = styled.h3`
  box-sizing: border-box;
  text-align: center;
  text-transform: uppercase;
  font-size: 24px;
  font-family: ${THEME.font.fontFamily};
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #ccc;
  font-family: ${THEME.font.fontFamily};
  margin: 10px 0;
  padding: 10px;
`;

const TextArea = styled.textarea`
  max-width: 450px;
  width: 100%;
  height: 100px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin: 10px 0;
  padding: 10px;
  font-family: ${THEME.font.fontFamily};
  border-radius: 3px;
`;

const Button = styled.button`
  border: none;
  border-radius: 3px;
  background: #3498db;
  width: 100%;
  font-size: 130%;
  text-transform: uppercase;
  height: 40px;
  color: #fff;
  font-family: ${THEME.font.fontFamily};
`;

let timeout;
export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    if (timeout) {
      clearTimeout(timeout);
    }
  }, []);

  return (
    <Form>
      <Title> Contact Me </Title>
      <Wrapper>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Input type='name' placeholder='Full Name' />
            <Input type='phone' placeholder='Phone' />
            <TextArea placeholder='Enter your message' />
          </>
        )}
        <Button disable={loading} onClick={handleSubmit} type='submit'>
          Submit
        </Button>
      </Wrapper>
    </Form>
  );
};
