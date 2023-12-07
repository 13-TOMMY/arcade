import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/app.scss";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-color-primary"></div>
      <div className="bg-color-secondary"></div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
