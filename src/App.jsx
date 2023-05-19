
import About from "./Pages/About/About";
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import OfferPage from "./Pages/OfferPage/OfferPage";


import Contact from "./Pages/Contact/Contact";
import LegalPage from "./Pages/LegalPage/LegalPage";

import Aos from "aos";
import "aos/dist/aos.css";


import { useEffect } from "react";

import Footer from "./Components/Footer/Footer";


function App() {
  Aos.init();

  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);

  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<div className="text-5xl">under construction. available very soon</div>} />
        <Route path="/offer" element={<OfferPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/legal" element={<LegalPage />} />
      </Routes>
      <Footer />
      {/* <CookieConsent debug={true} enableDeclineButton flipButtons>
        This website uses cookies to enhance the user experience.
        <span
          style={{
            fontSize: "10px",
          }}
        >
          This bit of text is smaller :O
        </span>
      </CookieConsent> */}
      {/* <GoToTop /> */}
    </div>
  );
}

export default App;
