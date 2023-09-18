import "./App.css";
import About from "./components/About/About";
import HomePage from "./components/Home/HomePage";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
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
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
