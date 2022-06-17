import { Link } from "react-router-dom";
import styles from "./FirstView.module.scss";

import logo from "../../../images/common/logo.jpeg";
import img_firstview from "../../../images/home/img_firstview.jpeg";

const FirstView = () => {
  return (
    <section className={styles.FirstView}>
      <div className={styles.FirstView__Container}>
        <div className={styles.Content}>
          <div className={styles.Logo}>
            <img src={logo} alt="New Choice Tattoo" />
          </div>
          <h2 className={styles.Heading}>New Choice Tattoo</h2>
          <p className={styles.Txt}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
            debitis corporis! Magni illum dolorem nemo quod laborum quia, enim
            perspiciatis eaque possimus tenetur. Animi, accusantium similique.
            Praesentium quisquam modi sapiente?
          </p>
          <Link to="/" className={styles.Btn}>
            Book Now
          </Link>
        </div>
      </div>
      <div className={styles.FirstView__Box}>
        <div
          className={styles.Img}
          style={{ backgroundImage: `url('${img_firstview}')` }}
        ></div>
      </div>
    </section>
  );
};

export default FirstView;
