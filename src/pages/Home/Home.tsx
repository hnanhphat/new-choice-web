import "./Home.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

/* IMAGES */
import img_artist_01 from "../../images/home/img_artist_01.jpeg";
import img_artist_02 from "../../images/home/img_artist_02.jpeg";
import img_artist_03 from "../../images/home/img_artist_03.jpeg";
import img_artist_04 from "../../images/home/img_artist_04.jpeg";
import img_artist_05 from "../../images/home/img_artist_05.jpeg";
import img_artist_06 from "../../images/home/img_artist_06.jpeg";
import img_artist_07 from "../../images/home/img_artist_07.jpeg";
import img_artist_08 from "../../images/home/img_artist_08.jpeg";

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
          <h1 className="page-title">BANG BANG NYC</h1>
          <div className="page-desc">
            <p>
              <a href="#location01">62 Grand Street NYC</a>
            </p>
            <p>
              <a href="#location02">328 Broome Street NYC</a>
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
              62 GRAND STREET <br />
              NEW YORK NY 10013
            </p>
            <p className="txt">
              328 BROOME STREET <br />
              NEW YORK NY 10002
            </p>
            <p className="txt">
              <a href="#website">BANG BANG SHOP</a>
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
            <h2 className="name">BANG BANG</h2>
            <p className="overview">
              Owner/operator Keith “Bang Bang” McCurdy has tattooed Rihanna in
              the tropics, Lebron James in his basement, Cara Delevingne on a
              roof, Katy Perry in Stockholm’s Abba Museum, and Justin Bieber on
              a plane at 30,000 feet. Stay tuned and check Instagram for an
              availability announcement!
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
            <h2 className="name">LIZ</h2>
            <p className="overview">
              Specializes in illustrative fine art in color & black and gray.
              <br />
              <br />
              Liz has a great grasp of feminine style and design along with a
              completely unique take on tattooing. She is sought after and known
              for her laser like precision.
            </p>
          </li>
          <li>
            <div
              className="avatar"
              style={{ backgroundImage: `url('${img_artist_03}')` }}
            ></div>
            <a href="#personal-gallery" className="view">
              VIEW GALLERY
            </a>
            <h2 className="name">KRISTI</h2>
            <p className="overview">
              Specializes in ornamental pattern design, floral & mandalas.
              <br />
              <br />
              Kristi says,"I surround myself with things I enjoy everyday.
              Moving to New York was my main inspiration to become a full time
              tattoo artist. It’s been over 12 years and I still feel
              impassioned and inspired in my artwork."
            </p>
          </li>
          <li>
            <div
              className="avatar"
              style={{ backgroundImage: `url('${img_artist_04}')` }}
            ></div>
            <a href="#personal-gallery" className="view">
              VIEW GALLERY
            </a>
            <h2 className="name">NATASHIA</h2>
            <p className="overview">
              Specializes in realism and fine line.
              <br />
              <br />
              Natashia says, “Each person I work with I see as a unique canvas
              with the intent to be adorned. Nothing truly compares to the
              feeling of giving my clients a meaningful and beautiful tattoo for
              them to cherish on their life’s journey.”
            </p>
          </li>
          <li>
            <div
              className="avatar"
              style={{ backgroundImage: `url('${img_artist_05}')` }}
            ></div>
            <a href="#personal-gallery" className="view">
              VIEW GALLERY
            </a>
            <h2 className="name">DEZ</h2>
            <p className="overview">
              Specializes in black and gray realism.
              <br />
              <br />
              The pride he takes in his work is evident as he continues to build
              his portfolio with unique and original designs. Dez says, "Having
              the opportunity to work with the best artists in the world
              inspires me daily. Words cannot describe how amazing it is to be a
              part of such a fantastic group."
            </p>
          </li>
          <li>
            <div
              className="avatar"
              style={{ backgroundImage: `url('${img_artist_06}')` }}
            ></div>
            <a href="#personal-gallery" className="view">
              VIEW GALLERY
            </a>
            <h2 className="name">ROB</h2>
            <p className="overview">
              Specializes in illustrative color, fine line and graphic new
              school.
              <br />
              <br />
              Rob met Bang Bang while they traded off window shifts at another
              shop. They only put the best artists in the window, so when Bang
              Bang opened his own place, Rob was one of the first hires.
            </p>
          </li>
          <li>
            <div
              className="avatar"
              style={{ backgroundImage: `url('${img_artist_07}')` }}
            ></div>
            <a href="#personal-gallery" className="view">
              VIEW GALLERY
            </a>
            <h2 className="name">HECTOR</h2>
            <p className="overview">
              Specializes in calligraphy and fine line.
              <br />
              <br />
              Hector’s incredible talent, attention to detail, and precise line
              work, combined with an incredibly positive attitude, make him one
              of the shop’s most sought-after artists.
            </p>
          </li>
          <li>
            <div
              className="avatar"
              style={{ backgroundImage: `url('${img_artist_08}')` }}
            ></div>
            <a href="#personal-gallery" className="view">
              VIEW GALLERY
            </a>
            <h2 className="name">YUUZ</h2>
            <p className="overview">
              Specializes in Asian Neo traditional art.
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
          <p className="spaces__txt">62 Grand Street New York NY 10013</p>
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
            <h1 className="page-title">BANG BANG : MY LIFE IN INK</h1>
          </div>
        </div>
        <div className="about__container container">
          <div className="img">
            <img src={img_about_book} alt="BANG BANG : MY LIFE IN INK" />
          </div>
          <div className="content">
            <p>
              The celebrity tattoo artist takes fans on a tour through his life
              and art, combining captivating vignettes and stories with more
              than one hundred color photos.
              <br />
              <br />
              Justin Bieber, Katy Perry, Rita Ora, Cara Delevingne, Rihanna, and
              many more of the hottest celebrities in the world have been seen
              on the red carpet, on concert stages, and in magazine spreads
              wearing stunning ink created by Keith “Bang Bang” McCurdy, the
              most in-demand tattoo artist in the entertainment world. Bang
              Bang’s work has taken him across the country and around the globe,
              to any and every locale a celebrity client may request. From
              Rihanna’s controversial gun tattoos, to inking Justin Bieber at
              40,000 feet. Each of Bang Bang’s tattoos comes with its own epic
              story. Now, this creative genius invites readers along on his
              adventures, sharing amazing tales from his life and career.
            </p>
            <p>
              Named for the duel guns tattooed on his neck, Bang Bang began his
              career in his mom’s tiny Delaware kitchen. Self-taught, he
              practiced with a tattoo kit bought online before eventually moving
              to New York. Over the past decade, Bang Bang’s talent and vision
              propelled his rise into the spotlight, and today, his fresh,
              accessible aesthetic draws men and women, tattoo vets and novices
              alike eager to experience his ultra-fluid and realistic designs
              created with the finest needles and inks. Bang Bang’s visual style
              transcends the clichés of the tattoo world; he creates a truly
              different form of art.
              <br />
              <br />
              Filled with engaging personal stories and striking photographs
              that bring his bold, vibrant designs into detail, Bang Bang is a
              must-have for Bang Bang fans and tattoo lovers everywhere.{" "}
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
