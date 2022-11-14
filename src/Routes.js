import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import NotFound from "./components/NotFound";
import ConsentText from "./ConsentText";
import Contact from "./Contact";
import Homepage from "./Homepage";
import Kvkk from "./Kvkk";
import PrivacyPolicy from "./PrivacyPolicy";
import ProjectDetail from "./ProjectDetail";
import Projects from "./Projects";
import Team from "./Team";

export default function AllRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/project/:category/:subCategory/:slug" element={<ProjectDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<Team />} />
      <Route path="/kvkk" element={<Kvkk />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/consent-text" element={<ConsentText />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
