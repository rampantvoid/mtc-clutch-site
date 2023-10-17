import "./App.css";
import About from "./components/About/About";
import EventsPage from "./components/EventsPage/EventsPage";
import HomePage from "./components/Home/HomePage";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sponsors from "./components/Sponsors/Sponsors";
import Gallery from "./components/Gallery/Gallery";
import { useEffect } from "react";
import AOS from "aos";
import Team from "./components/Team/Team";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <HomePage />
                <About />
                <EventsPage />
                <Sponsors />
              </>
            }
          />
          <Route
            path="/gallery"
            exact
            element={
              <>
                <Gallery />
              </>
            }
          />
          <Route
            path="/team"
            exact
            element={
              <>
                <Team />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
