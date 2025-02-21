import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { React, createContext, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";


// Import components and pages
import Home from "./pages/landingPage/Home";




export const SetPopupContext = createContext();

export default function App() {




 

  return (
    
            <Routes>
              {/* Existing Routes */}
              <Route exact path="/" element={<Home />} />
              </Routes>

            
  );
}