import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import { LanguageProvider } from "./i18n/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <Body />
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
}

export default App;
