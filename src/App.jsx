import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./pages/Main";
import Construction from "./pages/Construction";
import ConstructionDetail from "./pages/ConstructionDetail";
import Manufacturing from "./pages/Manufacturing";
import Design from "./pages/Design";
import DesignDetail from "./pages/DesignDetail";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ScrollToTop from "./utils/ScrollToTop";
import Preloader from "./components/common/Preloader";

import "./styles/main.scss";

function App() {
  return (
    <>
      <div className="app">
        <Preloader />
        <ScrollToTop />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/construction" element={<Construction />} />
            <Route
              path="/construction/:slug"
              element={<ConstructionDetail />}
            />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/design" element={<Design />} />
            <Route path="/design/:slug" element={<DesignDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
