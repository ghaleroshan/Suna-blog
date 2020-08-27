import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { THEME } from "../../common/constant/theme";
import { asRem } from "../../helpers";

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

const Title = styled.h1`
  box-sizing: border-box;
  text-align: center;
  text-transform: uppercase;
  font: 24px ${THEME.font.fontFamily};
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
  outline: none;
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
  outline: none;
  resize: vertical;
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
  outline: none;
`;

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const submitValue = {
      email: email,
      contact_number: phone,
      message: message,
    };

    const service_id = "default_service";
    const user_id = "user_ZV7jfFiGSchESSCRKBAKT";
    const template_id = "contact_form";
    emailjs.send(service_id, template_id, submitValue, user_id).then(
      (result) => {
        alert("Email sent successfully.");
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <Form onSubmit={sendEmail}>
      <Title> Contact Me </Title>
      <Wrapper>
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <Input
          type="phone"
          placeholder="Phone"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <TextArea
          type="text"
          placeholder="Enter your message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          required
        />
        <Button> Submit </Button>
      </Wrapper>
    </Form>
  );
};
