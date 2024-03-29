import { useState } from "react";
import styles from "./Home.module.scss";

/* MODULES */
import FirstView from "../../modules/Home/FirstView/FirstView";
import News from "../../modules/Home/News/News";
import Artists from "../../modules/Home/Artists/Artists";
import OurSpace from "../../modules/Home/OurSpace/OurSpace";
import Faq from "../../modules/Home/Faq/Faq";
import Contact from "../../modules/Home/Contact/Contact";
import Form from "../../modules/Home/Form/Form";

const Home = () => {
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <div id={styles.Home}>
      <FirstView />
      <Artists />
      <OurSpace />
      <Faq />
      <News />
      {/* <Tattoos /> */}
      <Contact setShowForm={setShowForm} />
      <Form showForm={showForm} setShowForm={setShowForm} />
    </div>
  );
};

export default Home;
