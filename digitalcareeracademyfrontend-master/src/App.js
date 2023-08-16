import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/Home";

import About from "./page/About";
import WorkExperience from "./page/workExperience";
import Contact from "./page/Contact";
import FAQ from "./page/Faq";
import Login from "./page/Login";
import FreeTaster from "./page/FreeTransfer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work Experience" element={<WorkExperience />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/taster" element={<FreeTaster />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
