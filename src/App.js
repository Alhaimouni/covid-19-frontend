import { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Countries from "./components/Countries";
import Records from "./components/Records";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allcountries" element={<Countries />} />
          <Route path="/myrecords" element={<Records />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
