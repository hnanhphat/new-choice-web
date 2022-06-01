import "./Home.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

/* IMAGES */
import img_artist_01 from "../../images/home/img_artist_01.jpg";
import img_artist_02 from "../../images/home/img_artist_02.jpg";

import img_space_video from "../../images/home/img_space_video.jpeg";
import img_space_01 from "../../images/home/img_space_01.jpeg";
import img_space_02 from "../../images/home/img_space_02.jpeg";
import img_space_03 from "../../images/home/img_space_03.jpeg";
import img_space_04 from "../../images/home/img_space_04.jpeg";
import img_space_05 from "../../images/home/img_space_05.jpeg";
import img_space_06 from "../../images/home/img_space_06.jpeg";
import img_space_07 from "../../images/home/img_space_07.jpeg";
import img_space_08 from "../../images/home/img_space_08.jpeg";
import img_space_09 from "../../images/home/img_space_09.jpeg";
import img_space_10 from "../../images/home/img_space_10.jpeg";
import img_space_11 from "../../images/home/img_space_11.jpeg";
import img_space_12 from "../../images/home/img_space_12.jpeg";

import img_brand_01 from "../../images/home/img_brand_01.png";
import img_brand_02 from "../../images/home/img_brand_02.png";
import img_brand_03 from "../../images/home/img_brand_03.png";
import img_brand_04 from "../../images/home/img_brand_04.png";
import img_brand_05 from "../../images/home/img_brand_05.png";
import img_brand_06 from "../../images/home/img_brand_06.png";
import img_brand_07 from "../../images/home/img_brand_07.png";
import img_brand_08 from "../../images/home/img_brand_08.png";
import img_brand_09 from "../../images/home/img_brand_09.png";
import img_brand_10 from "../../images/home/img_brand_10.png";

import img_about_book from "../../images/home/img_about_book.png";
import img_about_01 from "../../images/home/img_about_01.png";
import img_about_02 from "../../images/home/img_about_02.png";
import img_about_03 from "../../images/home/img_about_03.png";
import img_about_04 from "../../images/home/img_about_04.png";
import img_about_05 from "../../images/home/img_about_05.png";
import img_about_06 from "../../images/home/img_about_06.png";
import img_about_07 from "../../images/home/img_about_07.png";
import img_about_08 from "../../images/home/img_about_08.png";

const Home = () => {
  const carouselSetting = {
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    fade: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <div id="home" className="home">
      <section id="main-visual" className="main-visual">
        <div className="main-visual__container container">
          <h1 className="page-title">NEW CHOICE TATTOO</h1>
          <div className="page-desc">
            <p>
              <a href="#location01">337/6 Nguyen Dinh Chieu st. HCMC VN</a>
            </p>
          </div>
        </div>
        <div className="main-visual__scroll">
          <button>
            <span className="front"></span>
            <span className="back">SCROLL DOWN</span>
          </button>
        </div>
      </section>
      <section id="information" className="information">
        <ul className="information__list container">
          <li>
            <h2 className="ttl">LOCATIONS</h2>
            <p className="txt">
              337/6 NGUYEN DINH CHIEU STREET <br />
              HO CHI MINH city VN 700000
            </p>
            <p className="txt">
              <a href="#website">NEW CHOICE SHOP</a>
            </p>
          </li>
          <li>
            <h2 className="ttl">HOURS OF OPERATION</h2>
            <p className="txt">OPEN 6 DAYS 1PM TO 9PM</p>
            <p className="txt">CLOSED MONDAYS</p>
          </li>
          <li>
            <h2 className="ttl">CONTACT</h2>
            <p className="txt">
              <a href="#send-mail">EMAIL</a>
            </p>
            <p className="txt">646.918.7021</p>
            <p className="txt">212.219.2799</p>
            <p className="txt">
              <a href="#make-appointment">MAKE AN APPOINTMENT</a>
            </p>
          </li>
        </ul>
      </section>
      <section id="artists" className="artists">
        <div className="page-banner">
          <div className="container">
            <h1 className="page-title">ARTISTS</h1>
          </div>
        </div>
        <ul className="artists__list container">
          <li>
            <div
              className="avatar"
              style={{ backgroundImage: `url('${img_artist_01}')` }}
            ></div>
            <a href="#personal-gallery" className="view">
              VIEW GALLERY
            </a>
            <h2 className="name">JUN TEPPEI</h2>
            <p className="overview">
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet autem beatae, consequuntur delectus eligendi est facilis id in incidunt iusto neque nihil placeat provident recusandae sapiente sequi tempora voluptate?</span><span>Aperiam atque dicta dolore facere illum in, ipsum itaque iusto officia optio qui reiciendis repudiandae similique temporibus tenetur, voluptatem voluptatibus? Dicta eligendi incidunt ipsa iusto obcaecati reprehenderit temporibus vel voluptatibus.</span>
            </p>
          </li>
          <li>
            <div
              className="avatar"
              style={{ backgroundImage: `url('${img_artist_02}')` }}
            ></div>
            <a href="#personal-gallery" className="view">
              VIEW GALLERY
            </a>
            <h2 className="name">JOHN</h2>
            <p className="overview">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at, atque cumque enim fugiat harum illo incidunt laudantium libero nam nostrum nulla praesentium quae repellat tenetur totam veritatis voluptatibus voluptatum?
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium corporis deleniti dolorem doloribus enim eveniet fugit iste iure, iusto labore nesciunt odit quae quam qui, quidem rem tempora, vero voluptatum?
            </p>
          </li>
        </ul>
      </section>
      <section id="spaces" className="spaces">
        <div className="page-banner">
          <div className="container">
            <h1 className="page-title">SPACES</h1>
            <div className="page-desc">
              <p>Unlike any other tattoo shop on the planet</p>
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="spaces__ttl">OUR SPACES</h2>
          <button className="spaces__video">
            <img
              src={img_space_video}
              alt="62 Grand Street New York NY 10013"
            />
          </button>
          <p className="spaces__txt">337/6 Nguyen Dinh Chieu, Ho Chi Minh city VN 700000</p>
          <div className="spaces__carousel">
            <Slider {...carouselSetting}>
              <div className="item">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${img_space_01})` }}
                ></div>
              </div>
              <div className="item">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${img_space_02})` }}
                ></div>
              </div>
              <div className="item">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${img_space_03})` }}
                ></div>
              </div>
              <div className="item">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${img_space_04})` }}
                ></div>
              </div>
              <div className="item">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${img_space_05})` }}
                ></div>
              </div>
              <div className="item">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${img_space_06})` }}
                ></div>
              </div>
              <div className="item">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${img_space_07})` }}
                ></div>
              </div>
              <div className="item">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${img_space_08})` }}
                ></div>
              </div>
              <div className="item">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${img_space_09})` }}
                ></div>
              </div>
              <div className="item">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${img_space_10})` }}
                ></div>
              </div>
              <div className="item">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${img_space_11})` }}
                ></div>
              </div>
              <div className="item">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${img_space_12})` }}
                ></div>
              </div>
            </Slider>
          </div>
          <p className="spaces__txt">328 Broome Street New York NY 10002</p>
        </div>
      </section>
      <section id="brands" className="brands">
        <div className="page-banner">
          <div className="container">
            <h1 className="page-title">PRESS</h1>
            <div className="page-desc">
              <p>
                Keith “Bang Bang” McCurdy has left his mark on Rihanna, Justin
                Bieber, and Miley Cyrus. The 29-year-old is the most famous
                tattoo artist in the world, or, better yet, tattoo artist to the
                most famous in the world. -Vogue
              </p>
            </div>
          </div>
        </div>
        <ul className="brands__list container">
          <li>
            <img src={img_brand_01} alt="Brand 01" />
          </li>
          <li>
            <img src={img_brand_02} alt="Brand 02" />
          </li>
          <li>
            <img src={img_brand_03} alt="Brand 03" />
          </li>
          <li>
            <img src={img_brand_04} alt="Brand 04" />
          </li>
          <li>
            <img src={img_brand_05} alt="Brand 05" />
          </li>
          <li>
            <img src={img_brand_06} alt="Brand 06" />
          </li>
          <li>
            <img src={img_brand_07} alt="Brand 07" />
          </li>
          <li>
            <img src={img_brand_08} alt="Brand 08" />
          </li>
          <li>
            <img src={img_brand_09} alt="Brand 09" />
          </li>
          <li>
            <img src={img_brand_10} alt="Brand 10" />
          </li>
        </ul>
      </section>
      <section id="about" className="about">
        <div className="page-banner">
          <div className="container">
            <h1 className="page-title">FAVOURITE QUOTES</h1>
          </div>
        </div>
        <div className="about__container container">
          <div className="img">
            <img src={img_about_book} alt="BANG BANG : MY LIFE IN INK" />
          </div>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque debitis dicta dolor dolore earum illum in, incidunt magni modi natus nemo neque nisi nobis perspiciatis, quasi sequi tenetur vitae.
              <br />
              <br />
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto consectetur corporis distinctio esse, est ex, ipsa libero modi natus nemo nihil officia quis quod saepe ullam ut voluptate voluptatibus.</span><span>Accusamus accusantium alias assumenda distinctio doloremque ea excepturi facilis hic id in laboriosam laborum magni modi molestiae neque officiis pariatur perspiciatis quaerat quisquam ratione similique suscipit tempora, temporibus vel voluptatum?</span><span>Adipisci at atque commodi consequatur consequuntur corporis cumque debitis dolor dolorum ea et eveniet ipsum iusto laboriosam laborum magnam magni modi, neque optio placeat praesentium repudiandae vero vitae voluptatem voluptatum.</span><span>Accusamus beatae corporis cupiditate dicta eius est facere mollitia quam similique, sit. Architecto at atque blanditiis consequatur dignissimos doloremque, eligendi, enim explicabo impedit iusto nostrum, praesentium quidem ratione sapiente voluptatibus.</span><span>Iure possimus praesentium vel veniam! Hic, nostrum, tenetur! Aperiam architecto asperiores atque eos illo illum ipsa itaque libero nisi nostrum officiis, quas quisquam similique veniam, vero voluptas, voluptate voluptates voluptatibus?</span><span>Accusantium asperiores corporis eius enim esse expedita, facere facilis fugit maiores modi nulla numquam optio porro possimus, quasi quis ratione repellendus, velit veritatis voluptate? Autem dolorum officia ratione repellat unde.</span><span>A aliquid aperiam architecto, beatae cumque deserunt dignissimos dolore esse est eum hic id iste iure mollitia placeat possimus sit! Consectetur eum eveniet excepturi labore quam quasi quis repellendus tenetur?</span><span>Delectus id nemo nihil quod rerum suscipit ut? Ab aperiam commodi consectetur culpa cumque dignissimos inventore nobis quibusdam quidem voluptatum! Illum incidunt labore magnam minima omnis, possimus qui repudiandae similique?</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At delectus deleniti dignissimos exercitationem id labore laboriosam nisi perferendis placeat quaerat quia quod repellat repellendus, tempora veniam voluptas voluptatum. Ad excepturi repudiandae saepe! Adipisci beatae cupiditate doloribus esse est ex facilis magni nam nemo nostrum reiciendis, repudiandae sunt ullam voluptatem voluptatibus? Aperiam consequuntur ex ipsum nihil saepe! Ad aliquid consequatur deleniti dolores est, eum fugiat, incidunt libero minima modi mollitia placeat provident quae quia tempore, voluptate voluptates voluptatibus voluptatum? Atque corporis error maxime officia, praesentium quo? Accusamus adipisci dolore facilis, fugit ipsam iste magnam perferendis placeat sint, tempora temporibus vel, voluptatum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate deleniti dicta libero omnis repudiandae. Aliquid consequatur consequuntur, dolores itaque molestias nostrum perferendis, possimus sapiente sit soluta, temporibus vitae! Beatae, deleniti.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores consectetur culpa cum, cumque dolore dolorum ea eligendi eos esse eum exercitationem explicabo illum ipsa iste iure, laboriosam modi natus nesciunt, odio officia provident quibusdam repellat repudiandae rerum soluta vel! Aliquam culpa cum delectus dolore ducimus ea eligendi eos explicabo facilis id impedit iste labore laudantium magnam minus modi nemo neque nulla odio officiis omnis pariatur perferendis porro, possimus quae quaerat quam quas quibusdam quidem quisquam ratione recusandae reprehenderit sapiente tempore totam vel voluptates? Accusantium aliquid commodi consectetur cumque debitis doloremque dolores eligendi ex, facere fugiat id non, numquam, omnis provident quae quasi quibusdam sed similique sunt tempore? A accusantium aliquam, aspernatur at dicta dignissimos dolore ducimus eius, iste minus modi officia quam quibusdam recusandae soluta totam voluptatem! At, atque autem blanditiis consectetur culpa explicabo, illo impedit in laudantium nemo nostrum optio, quisquam ratione reprehenderit soluta tempora ut. Alias aperiam asperiores culpa, cumque cupiditate dolores doloribus error esse facilis inventore, magni maiores natus nihil obcaecati quia quibusdam reprehenderit saepe ullam ut velit? Earum eligendi hic, quaerat reiciendis ullam vel. Aliquid error iure nesciunt qui. Accusamus aliquam aperiam aspernatur atque beatae blanditiis consectetur cupiditate dicta, distinctio dolor dolorem ducimus enim esse est et excepturi expedita explicabo facilis harum incidunt itaque iure laboriosam mollitia nulla odit quia quis quisquam ratione recusandae reiciendis saepe tempore voluptas voluptatem! Cupiditate nemo nihil nostrum perferendis quaerat quibusdam, sed soluta tenetur voluptate voluptatum. A accusamus alias eius et, facere harum laudantium mollitia nobis nostrum provident quasi quibusdam recusandae rem rerum, tempora tenetur unde vitae! Aperiam facilis ipsum itaque iure laboriosam mollitia quisquam sequi veniam voluptates. Accusantium ad adipisci, aliquid asperiores beatae deserunt id incidunt ipsa libero nesciunt numquam officiis optio porro quo, sed tenetur velit? Eaque exercitationem nemo quia quibusdam sapiente sint voluptates. Corporis sed similique tempora!{" "}
            </p>
          </div>
          <ul className="os">
            <li>
              <img src={img_about_01} alt="About 01" />
            </li>
            <li>
              <img src={img_about_02} alt="About 02" />
            </li>
            <li>
              <img src={img_about_03} alt="About 03" />
            </li>
            <li>
              <img src={img_about_04} alt="About 04" />
            </li>
            <li>
              <img src={img_about_05} alt="About 05" />
            </li>
            <li>
              <img src={img_about_06} alt="About 06" />
            </li>
            <li>
              <img src={img_about_07} alt="About 07" />
            </li>
            <li>
              <img src={img_about_08} alt="About 08" />
            </li>
          </ul>
        </div>
      </section>
      <section id="faq" className="faq">
        <div className="page-banner">
          <div className="container">
            <h1 className="page-title">FAQ</h1>
            <div className="page-desc">
              <p>Frequently Asked Questions</p>
            </div>
          </div>
        </div>
        <ul className="faq__list container">
          <li>
            <h2 className="question">HOW DO I BOOK AN APPOINTMENT?</h2>
            <p className="answer">
              Once you’ve selected your preferred artist(s), you can either stop
              by the shop, call us at (212) 219-2799, or send a detailed email
              with a description of the design, some photo reference, and your
              preferred dates to schedule. This will enable us to process your
              request quickly and efficiently. We schedule appointments a
              maximum of three months in advance.
            </p>
            <h2 className="question">
              HOW OLD DO I HAVE TO BE TO GET A TATTOO?
            </h2>
            <p className="answer">
              You must be at least 18 years of age. It is against New York State
              law (Section 260.21) to tattoo a minor, even with parental
              consent. In accordance with this law we have a strict No Minors
              policy. Not only must you be 18, you have to prove it with a valid
              State or Federal Photo ID. No exceptions.
            </p>
            <h2 className="question">HOW MUCH DOES A TATTOO COST?</h2>
            <p className="answer">
              It depends on the artist, but all tattoos start at $600. Final
              price is dependent on size, detail of the design, location on the
              body where it will be placed, and finally which artist you’ve
              chosen. Some artists have a minimum billing, which varies.
            </p>
            <h2 className="question">HOW CAN I GET A PRICE QUOTE?</h2>
            <p className="answer">
              The best way to get an accurate price range is by booking a
              (free!) consultation with the artist—if not in person, then
              through a brief detailed email. In order for us to quote your
              idea, we need to consider the subject, size, placement on the
              body, detail, etc.
              <br />
              <br />
              You are also welcome to come into the shop and talk to one of our
              managers or artists, if they’re available. We’re always more than
              happy to help get you the information you need.
            </p>
            <h2 className="question">
              HOW DO I SCHEDULE A WALK-IN APPOINTMENT?
            </h2>
            <p className="answer">
              Generally our resident artists book a few months in advance. The
              term “walk-in” means you don’t need an appointment. They will be
              offered on a first-come, first-served basis with cancellation
              availability permitting. We will always do our best to accommodate
              your request.
            </p>
          </li>
          <li>
            <h2 className="question">DOES IT HURT?</h2>
            <p className="answer">
              Yes! But in the best possible way. Your brain releases endorphins
              when you go through pain and your body loves endorphins, so yes,
              it hurts, but you’ll kinda like it.
            </p>
            <h2 className="question">HOW LONG DOES A TATTOO TAKE TO HEAL?</h2>
            <p className="answer">
              It takes two weeks to “heal,” but it takes months for the skin to
              fully regenerate.
            </p>
            <h2 className="question">HOW DO I CARE FOR MY NEW TATTOO?</h2>
            <p className="answer">
              Every shop has their own recommended care methods. You will be
              given an instruction card after you’ve been tattooed.
            </p>
            <h2 className="question">WHAT FORMS OF PAYMENT ARE ACCEPTED?</h2>
            <p className="answer">
              We accept cash or credit cards (Visa, Mastercard, Discover,
              American Express). No checks.
            </p>
            <h2 className="question">
              DO I NEED TO LEAVE A DEPOSIT IF I DECIDE TO SCHEDULE AN
              APPOINTMENT?
            </h2>
            <p className="answer">
              Yes. A 25% deposit is required to make an appointment. Deposits
              are non-refundable and non-transferable and will be applied to the
              final price of your tattoo.
            </p>
            <h2 className="question">HOW SHOULD I PREPARE FOR MY TATTOO?</h2>
            <p className="answer">
              We recommend that you eat well before you come in, and remember to
              stay hydrated. If you start to feel woozy, have a soda. Sugar is
              your friend in this situation. Walking around NYC all day in the
              summer, without drinking any water and then coming to get tattooed
              on an empty stomach is a sure recipe for passing out. <br />
              It’s best not to party the night before because alcohol can
              increase bleeding for up to 24 hours. Blood also dilutes our
              pigments, affecting both the appearance of your tattoo as well as
              the healing process. Remember to stay calm and cool, you’re in
              good hands. There’s nothing to stress over—it’s just a tattoo!
            </p>
          </li>
        </ul>
      </section>
      <section id="locations" className="locations">
        <div className="page-banner">
          <div className="container">
            <h1 className="page-title">LOCATIONS</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
