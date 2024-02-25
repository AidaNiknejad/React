import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Nav } from "./pages/Nav";
import { Profile } from "./pages/Profile";

function App() {
  const [username, setUsername] = useState("sarvinstyle");

  return (
    <div className="App">
      <Router>
        <div>SarvinStyle</div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home username={username} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:name?" element={<Profile />} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
        <div>This is Footer</div>
      </Router>
    </div>
  );
}

export default App;
