// import { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section/Section";
import Footer from "./components/Footer";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";

function App() {
  return (
    <MusicPlayerProvider>
      <Navbar Home="Home" />
      <Section />
      <Footer />
    </MusicPlayerProvider>
  );
}

export default App;

