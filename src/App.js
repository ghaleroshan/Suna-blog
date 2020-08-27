import React from "react";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Hero } from "./components/hero";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
