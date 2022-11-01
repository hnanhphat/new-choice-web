import { Routes as Switch, Route } from "react-router-dom";
import { ThemeProvider } from "../context/LanguageContext";

/* COMPONENTS */
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

/* PAGES */
import Home from "../pages/Home/Home";
import Art from "../pages/Art/Art";
import About from "../pages/About/About";
import Tattoos from "../pages/Tattoos/Tattoos";

const Routes = () => {
  return (
    <ThemeProvider>
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/art-works" element={<Art />} />
        <Route path="/about" element={<About />} />
        <Route path="/tattoos" element={<Tattoos />} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
};

export default Routes;
