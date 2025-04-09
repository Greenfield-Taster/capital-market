import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./pages/Main";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import About from "./pages/About";

import "./styles/main.scss";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/capital-market/");
  }, []);

  return (
    <>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/capital-market/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
