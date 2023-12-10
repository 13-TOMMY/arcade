import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/app.scss";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Game from "./pages/Game";

function App() {
  return (
    <div className="application-container">
      <div className="bg-color-primary"></div>
      <div className="bg-color-secondary"></div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Homepage />} />
          <Route path="/game/:gameID" element={<Game/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
