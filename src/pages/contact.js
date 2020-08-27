import React from "react";
import { Contact } from "../components/contactForm";
import { Hero } from "../components/hero";
import { Navbar } from "../components/Navbar";

export const ContactPage = () => {
  return (
    <>
      <Hero />
      <Navbar />
      <Contact />
    </>
  );
};
