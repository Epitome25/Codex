import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { React, createContext, useEffect, useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";

// Import components and pages
import Home from "pages/landingPage/Home";
import About from "pages/landingPage/AboutUs/About";
import PrivacyPolicy from "pages/landingPage/AboutUs/PrivacyPolicy";
import Navbar from "components/Navbar";
import InfoBar from "components/InfoBar";






export const SetPopupContext = createContext();

export default function App() {
  const location = useLocation();
  const type = userType();
  const [popup, setPopup] = useState({ open: false, icon: "", message: "" });

  useEffect(() => {
    if (popup.open) {
      toast[popup.icon](popup.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        transition: Slide,
      });
      setPopup({ ...popup, open: false });
    }
  }, [popup.open, popup.icon, popup.message]);

  const excludeLayoutPaths = [
    

  ];
  const shouldShowLayout = !excludeLayoutPaths.some((path) =>
    new RegExp(`^${path.replace(/:[^/]+/, "[^/]+")}$`).test(location.pathname)
  );

  return (
    <SetPopupContext.Provider value={setPopup}>

        <PlaygroundProvider>
          <ModalProvider>
            <ScrollToTop />
            <GlobalStyle />
            {shouldShowLayout && <InfoBar />}
            {shouldShowLayout && <Navbar />}
            <RecoilRoot>

            <Routes>
              {/* Existing Routes */}
              <Route exact path="/" element={<Home />} />
              <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route exact path="/cookie-policy" element={<CookiePolicy />} />
              
              <Route exact path="/about" element={<About />} />
              
            </Routes>

            </RecoilRoot>
            {shouldShowLayout && <Footer />}
            <ToastContainer limit={2} autoClose={2000} />
          </ModalProvider>
        </PlaygroundProvider>


    </SetPopupContext.Provider>
  );
}