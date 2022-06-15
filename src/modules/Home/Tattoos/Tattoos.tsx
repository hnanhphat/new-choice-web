import styles from "./Tattoos.module.scss";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import HomeHeading from "../../../components/HomeHeading/HomeHeading";

import img_tattoo_01 from "../../../images/home/img_tattoo_01.jpeg";
import img_tattoo_02 from "../../../images/home/img_tattoo_02.jpeg";
import img_tattoo_03 from "../../../images/home/img_tattoo_03.jpeg";
import img_tattoo_04 from "../../../images/home/img_tattoo_04.jpeg";
import img_tattoo_05 from "../../../images/home/img_tattoo_05.jpeg";
import img_tattoo_06 from "../../../images/home/img_tattoo_06.jpeg";
import img_tattoo_07 from "../../../images/home/img_tattoo_07.jpeg";
import img_tattoo_08 from "../../../images/home/img_tattoo_08.jpeg";
import img_tattoo_09 from "../../../images/home/img_tattoo_09.jpeg";
import img_tattoo_10 from "../../../images/home/img_tattoo_10.jpeg";

const Tattoos = () => {
  const carouselSetting = {
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className={styles.Tattoos}>
      <div className={styles.Tattoos__Container}>
        <div className={styles.Heading}>
          <HomeHeading heading="tattoos" color="white" />
        </div>
        <Slider {...carouselSetting} className={styles.Carousel}>
          <div className={styles.Item}>
            <div
              className={styles.Img}
              style={{ backgroundImage: `url(${img_tattoo_01})` }}
            ></div>
          </div>
          <div className={styles.Item}>
            <div
              className={styles.Img}
              style={{ backgroundImage: `url(${img_tattoo_02})` }}
            ></div>
          </div>
          <div className={styles.Item}>
            <div
              className={styles.Img}
              style={{ backgroundImage: `url(${img_tattoo_03})` }}
            ></div>
          </div>
          <div className={styles.Item}>
            <div
              className={styles.Img}
              style={{ backgroundImage: `url(${img_tattoo_04})` }}
            ></div>
          </div>
          <div className={styles.Item}>
            <div
              className={styles.Img}
              style={{ backgroundImage: `url(${img_tattoo_05})` }}
            ></div>
          </div>
          <div className={styles.Item}>
            <div
              className={styles.Img}
              style={{ backgroundImage: `url(${img_tattoo_06})` }}
            ></div>
          </div>
          <div className={styles.Item}>
            <div
              className={styles.Img}
              style={{ backgroundImage: `url(${img_tattoo_07})` }}
            ></div>
          </div>
          <div className={styles.Item}>
            <div
              className={styles.Img}
              style={{ backgroundImage: `url(${img_tattoo_08})` }}
            ></div>
          </div>
          <div className={styles.Item}>
            <div
              className={styles.Img}
              style={{ backgroundImage: `url(${img_tattoo_09})` }}
            ></div>
          </div>
          <div className={styles.Item}>
            <div
              className={styles.Img}
              style={{ backgroundImage: `url(${img_tattoo_10})` }}
            ></div>
          </div>
        </Slider>
        <div className={styles.View}>
          <Link to="/">All Tattoos</Link>
        </div>
      </div>
    </section>
  );
};

export default Tattoos;
