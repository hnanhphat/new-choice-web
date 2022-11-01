import styles from "./News.module.scss";
import { Link } from "react-router-dom";
import HomeHeading from "../../../components/HomeHeading/HomeHeading";
import img_news_01 from "../../../images/home/img_news_01.jpeg";
import img_news_02 from "../../../images/home/img_news_02.jpeg";

import '../../../i18n/config';
import { useTranslation } from 'react-i18next';

const News = () => {
  const { t } = useTranslation(['ns1', 'ns2']);

  return (
    <section className={styles.News}>
      <ul className={styles.News__List}>
        <li>
          <Link to="/">
            <div className={styles.Box}>
              <div className={styles.Box__Img} style={{backgroundImage: `url(${img_news_01})`}}></div>
            </div>
            <p className={styles.Content}>{t('ns1:home.news.txt01')}</p>
            <i className={styles.Arrow}></i>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className={styles.Box}>
              <div className={styles.Box__Img} style={{backgroundImage: `url(${img_news_02})`}}></div>
            </div>
            <p className={styles.Content}>{t('ns1:home.news.txt02')}</p>
            <i className={styles.Arrow}></i>
          </Link>
        </li>
        <li>
          <HomeHeading heading={t('ns1:home.news.heading')} color="white" />
        </li>
      </ul>
    </section>
  );
};

export default News;
