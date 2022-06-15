import styles from "./News.module.scss";
import { Link } from "react-router-dom";
import HomeHeading from "../../../components/HomeHeading/HomeHeading";

const News = () => {
  return (
    <section className={styles.News}>
      <ul className={styles.News__List}>
        <li>
          <Link to="/">
            <div className={styles.Box}>
              <div className={styles.Box__Img}></div>
            </div>
            <p className={styles.Content}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium sapiente vel et veniam distinctio temporibus, vero totam at ut vitae. Quis alias maiores doloribus, quam laboriosam libero illum sapiente provident.</p>
            <i className={styles.Arrow}></i>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className={styles.Box}>
              <div className={styles.Box__Img}></div>
            </div>
            <p className={styles.Content}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium sapiente vel et veniam distinctio temporibus, vero totam at ut vitae. Quis alias maiores doloribus, quam laboriosam libero illum sapiente provident.</p>
            <i className={styles.Arrow}></i>
          </Link>
        </li>
        <li>
          <HomeHeading heading="news" color="white" />
        </li>
      </ul>
    </section>
  );
};

export default News;
