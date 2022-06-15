import { Routes as Switch, Route } from "react-router-dom";

/* COMPONENTS */
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

/* PAGES */
import Home from "../pages/Home/Home";

const Routes = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
      <Footer />
    </div>
  )
}

export default Routes