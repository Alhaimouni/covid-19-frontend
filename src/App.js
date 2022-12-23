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
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home data='meow' />} />
          <Route path="/allcountries" element={<Countries />} />
          <Route path="/records" element={<Records />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
