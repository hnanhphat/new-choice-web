import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* PAGES */
import Home from "./pages/Home/Home";
import Tattoos from "./pages/Tattoos/Tattoos";

/* COMPONENTS */
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tattoos" element={<Tattoos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
