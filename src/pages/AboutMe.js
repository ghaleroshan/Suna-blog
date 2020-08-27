import React from "react";
import styled from "styled-components";
import { SortableCard } from "../components/Sort/index";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/hero";

const SortableContainer = styled.div`
  display: flex;
  max-width: 100vw;
  margin: 0 auto;
  flex-direction: column;
`;

const Title = styled.h4`
  margin: 0 auto;
  box-sizing: border-box;
  margin: 20px auto;
`;

export const AboutMe = () => {
  return (
    <>
      <Hero />

      <Navbar />
      <SortableContainer>
        <Title> Drag the items up or down to sort them to your wish </Title>
        <SortableCard />
      </SortableContainer>
    </>
  );
};
