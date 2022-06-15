import styles from "./Artists.module.scss";
import { Link } from "react-router-dom";
import HomeHeading from "../../../components/HomeHeading/HomeHeading";

const Artists = () => {
  return (
    <section className={styles.Artists}>
      <ul className={styles.Artists__List}>
        <li>
          <HomeHeading heading="artists" color="white" />
        </li>
        <li>
          <Link to="/">
            <div className={styles.Front}>
              <div className={styles.Box}>
                <div className={styles.Box__Img}></div>
              </div>
              <div className={styles.Info}>
                <h3 className={styles.Info__Name}>Jun Teppei</h3>
                <p className={styles.Info__Quote}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias ullam officiis eaque eos repellat, explicabo
                  dignissimos reiciendis accusantium sequi corrupti culpa iste
                  repellendus expedita nisi eum earum modi maiores nemo.
                </p>
              </div>
            </div>
            <div className={styles.Back}>
              <span className={styles.View}>View gallery</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className={styles.Front}>
              <div className={styles.Box}>
                <div className={styles.Box__Img}></div>
              </div>
              <div className={styles.Info}>
                <h3 className={styles.Info__Name}>Jun Teppei</h3>
                <p className={styles.Info__Quote}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias ullam officiis eaque eos repellat, explicabo
                  dignissimos reiciendis accusantium sequi corrupti culpa iste
                  repellendus expedita nisi eum earum modi maiores nemo.
                </p>
              </div>
            </div>
            <div className={styles.Back}>
              <span className={styles.View}>View gallery</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className={styles.Front}>
              <div className={styles.Box}>
                <div className={styles.Box__Img}></div>
              </div>
              <div className={styles.Info}>
                <h3 className={styles.Info__Name}>Jun Teppei</h3>
                <p className={styles.Info__Quote}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias ullam officiis eaque eos repellat, explicabo
                  dignissimos reiciendis accusantium sequi corrupti culpa iste
                  repellendus expedita nisi eum earum modi maiores nemo.
                </p>
              </div>
            </div>
            <div className={styles.Back}>
              <span className={styles.View}>View gallery</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className={styles.Front}>
              <div className={styles.Box}>
                <div className={styles.Box__Img}></div>
              </div>
              <div className={styles.Info}>
                <h3 className={styles.Info__Name}>Jun Teppei</h3>
                <p className={styles.Info__Quote}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias ullam officiis eaque eos repellat, explicabo
                  dignissimos reiciendis accusantium sequi corrupti culpa iste
                  repellendus expedita nisi eum earum modi maiores nemo.
                </p>
              </div>
            </div>
            <div className={styles.Back}>
              <span className={styles.View}>View gallery</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className={styles.Front}>
              <div className={styles.Box}>
                <div className={styles.Box__Img}></div>
              </div>
              <div className={styles.Info}>
                <h3 className={styles.Info__Name}>Jun Teppei</h3>
                <p className={styles.Info__Quote}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias ullam officiis eaque eos repellat, explicabo
                  dignissimos reiciendis accusantium sequi corrupti culpa iste
                  repellendus expedita nisi eum earum modi maiores nemo.
                </p>
              </div>
            </div>
            <div className={styles.Back}>
              <span className={styles.View}>View gallery</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className={styles.Front}>
              <div className={styles.Box}>
                <div className={styles.Box__Img}></div>
              </div>
              <div className={styles.Info}>
                <h3 className={styles.Info__Name}>Jun Teppei</h3>
                <p className={styles.Info__Quote}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias ullam officiis eaque eos repellat, explicabo
                  dignissimos reiciendis accusantium sequi corrupti culpa iste
                  repellendus expedita nisi eum earum modi maiores nemo.
                </p>
              </div>
            </div>
            <div className={styles.Back}>
              <span className={styles.View}>View gallery</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className={styles.Front}>
              <div className={styles.Box}>
                <div className={styles.Box__Img}></div>
              </div>
              <div className={styles.Info}>
                <h3 className={styles.Info__Name}>Jun Teppei</h3>
                <p className={styles.Info__Quote}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias ullam officiis eaque eos repellat, explicabo
                  dignissimos reiciendis accusantium sequi corrupti culpa iste
                  repellendus expedita nisi eum earum modi maiores nemo.
                </p>
              </div>
            </div>
            <div className={styles.Back}>
              <span className={styles.View}>View gallery</span>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Artists;
