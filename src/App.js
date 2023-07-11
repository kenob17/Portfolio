import React from "react";
import Header from "./components/Header.js";
import Title from "./components/Title.js";
import Projects from "./components/Projects.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";

export default function App() {
  return (
    <div className="">
      <Header />
      <Title />
      <About />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}
