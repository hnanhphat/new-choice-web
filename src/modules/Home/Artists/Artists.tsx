import styles from "./Artists.module.scss";
import { Link } from "react-router-dom";
import HomeHeading from "../../../components/HomeHeading/HomeHeading";

import img_artist_01 from "../../../images/home/img_artist_01.jpeg";
import img_artist_02 from "../../../images/home/img_artist_02.jpeg";
import img_artist_03 from "../../../images/home/img_artist_03.jpeg";
import img_artist_04 from "../../../images/home/img_artist_04.jpeg";
import img_artist_05 from "../../../images/home/img_artist_05.jpeg";
import img_artist_06 from "../../../images/home/img_artist_06.jpeg";
import img_artist_07 from "../../../images/home/img_artist_07.jpeg";

const Artists = () => {
  return (
    <section className={styles.Artists}>
      <ul className={styles.Artists__List}>
        <li>
          <HomeHeading heading="artists" color="black" />
        </li>
        <li>
          <Link to="/">
            <div className={styles.Front}>
              <div className={styles.Box}>
                <div className={styles.Box__Img} style={{backgroundImage: `url(${img_artist_01})`}}></div>
              </div>
              <div className={styles.Info}>
                <h3 className={styles.Info__Name}>Elise Reilly</h3>
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
                <div className={styles.Box__Img} style={{backgroundImage: `url(${img_artist_02})`}}></div>
              </div>
              <div className={styles.Info}>
                <h3 className={styles.Info__Name}>Nolan Bruen</h3>
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
                <div className={styles.Box__Img} style={{backgroundImage: `url(${img_artist_03})`}}></div>
              </div>
              <div className={styles.Info}>
                <h3 className={styles.Info__Name}>Weldon Crooks</h3>
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
                <div className={styles.Box__Img} style={{backgroundImage: `url(${img_artist_04})`}}></div>
              </div>
              <div className={styles.Info}>
                <h3 className={styles.Info__Name}>Kaelyn Reichel</h3>
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
                <div className={styles.Box__Img} style={{backgroundImage: `url(${img_artist_05})`}}></div>
              </div>
              <div className={styles.Info}>
                <h3 className={styles.Info__Name}>Michelle Kling</h3>
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
                <div className={styles.Box__Img} style={{backgroundImage: `url(${img_artist_06})`}}></div>
              </div>
              <div className={styles.Info}>
                <h3 className={styles.Info__Name}>Rogelio Bruen</h3>
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
                <div className={styles.Box__Img} style={{backgroundImage: `url(${img_artist_07})`}}></div>
              </div>
              <div className={styles.Info}>
                <h3 className={styles.Info__Name}>Catherine Hilpert</h3>
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
