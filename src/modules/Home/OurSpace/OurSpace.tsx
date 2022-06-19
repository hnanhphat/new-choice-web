import styles from "./OurSpace.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import HomeHeading from "../../../components/HomeHeading/HomeHeading";

import img_space_01 from "../../../images/home/img_space_01.jpeg";
import img_space_02 from "../../../images/home/img_space_02.jpeg";
import img_space_03 from "../../../images/home/img_space_03.jpeg";
import img_space_04 from "../../../images/home/img_space_04.jpeg";
import img_space_05 from "../../../images/home/img_space_05.jpeg";
import img_space_06 from "../../../images/home/img_space_06.jpeg";
import img_space_07 from "../../../images/home/img_space_07.jpeg";
import img_space_08 from "../../../images/home/img_space_08.jpeg";
import img_space_09 from "../../../images/home/img_space_09.jpeg";
import img_space_10 from "../../../images/home/img_space_10.jpeg";
import img_space_11 from "../../../images/home/img_space_11.jpeg";
import img_space_12 from "../../../images/home/img_space_12.jpeg";

const OurSpace = () => {
  const carouselSetting = {
    fade: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className={styles.OurSpace}>
      <div className={styles.OurSpace__Container}>
        <div className={styles.Content}>
          <Slider {...carouselSetting} className={styles.Content__Carousel}>
            <div className={styles.Item}>
              <div
                className={styles.Img}
                style={{ backgroundImage: `url(${img_space_01})` }}
              ></div>
            </div>
            <div className={styles.Item}>
              <div
                className={styles.Img}
                style={{ backgroundImage: `url(${img_space_02})` }}
              ></div>
            </div>
            <div className={styles.Item}>
              <div
                className={styles.Img}
                style={{ backgroundImage: `url(${img_space_03})` }}
              ></div>
            </div>
            <div className={styles.Item}>
              <div
                className={styles.Img}
                style={{ backgroundImage: `url(${img_space_04})` }}
              ></div>
            </div>
            <div className={styles.Item}>
              <div
                className={styles.Img}
                style={{ backgroundImage: `url(${img_space_05})` }}
              ></div>
            </div>
            <div className={styles.Item}>
              <div
                className={styles.Img}
                style={{ backgroundImage: `url(${img_space_06})` }}
              ></div>
            </div>
            <div className={styles.Item}>
              <div
                className={styles.Img}
                style={{ backgroundImage: `url(${img_space_07})` }}
              ></div>
            </div>
            <div className={styles.Item}>
              <div
                className={styles.Img}
                style={{ backgroundImage: `url(${img_space_08})` }}
              ></div>
            </div>
            <div className={styles.Item}>
              <div
                className={styles.Img}
                style={{ backgroundImage: `url(${img_space_09})` }}
              ></div>
            </div>
            <div className={styles.Item}>
              <div
                className={styles.Img}
                style={{ backgroundImage: `url(${img_space_10})` }}
              ></div>
            </div>
            <div className={styles.Item}>
              <div
                className={styles.Img}
                style={{ backgroundImage: `url(${img_space_11})` }}
              ></div>
            </div>
            <div className={styles.Item}>
              <div
                className={styles.Img}
                style={{ backgroundImage: `url(${img_space_12})` }}
              ></div>
            </div>
          </Slider>
          <p className={styles.Content__Txt}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
            eligendi labore cumque tempore aspernatur cupiditate officia
            doloremque sed ratione, dolore repellendus facere, fuga laborum!
            Adipisci corporis alias reprehenderit soluta atque. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Et eligendi labore
            cumque tempore aspernatur cupiditate officia doloremque sed ratione,
            dolore repellendus facere, fuga laborum! Adipisci corporis alias
            reprehenderit soluta atque. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Et eligendi labore cumque tempore aspernatur
            cupiditate officia doloremque sed ratione, dolore repellendus
            facere, fuga laborum! Adipisci corporis alias reprehenderit soluta
            atque.{" "}
          </p>
        </div>
        <div className={styles.Heading}>
          <HomeHeading heading="ourspace" color="black" />
        </div>
      </div>
    </section>
  );
};

export default OurSpace;
