import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/main";
import BoxesContainer from "./components/BoxesContainer";
const App = () => {
  const [boxesData, setBoxesData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:5000/cards")
      .then((response) => response.json())
      .then((data) => setBoxesData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="help-center">
      <Header />
      <Main />
      <BoxesContainer boxesData={boxesData} />

      <footer className="footer">
        <div className="footer-column">
          <h3>Abstract</h3>
          <p>Branches</p>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <p>Blog</p>
          <p>Help Center</p>
          <p>Release Notes</p>
          <p>Status</p>
        </div>
        <div className="footer-column">
          <h3>Community</h3>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>Facebook</p>
          <p>Dribbble</p>
          <p>Podcast</p>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Legal</p>
          <p>Contact Us</p>
          <p>info@abstract.com</p>
        </div>
        <div className="footer-column footer-bottom">
          <p>@ Copyright 2022</p>
          <p>Abstract Studio Design, Inc.</p>
          <p>All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
