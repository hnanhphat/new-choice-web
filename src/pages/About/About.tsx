import "./About.scss";
import img_jun from "../../images/about/img_jun.jpeg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="c-bnr">
        <h1 className="heading">ABOUT</h1>
      </div>

      <div className="about__container">
        <div className="img">
          <div
            className="c-thumb"
            style={{ backgroundImage: `url(${img_jun})` }}
          ></div>
        </div>
        <div className="content">
          <h2 className="content__name">Jun Teppei</h2>
          <div className="content__about">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              magni natus, tempora voluptates at suscipit exercitationem
              eligendi similique. Quidem reiciendis, iure quibusdam ipsa facilis
              sapiente laborum officia cupiditate corporis porro?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur eaque beatae nisi eos molestiae atque tempora a
              sapiente? Vitae neque esse sapiente ratione nisi est repudiandae
              illum dignissimos, nesciunt maxime.Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Consequuntur eaque beatae nisi eos
              molestiae atque tempora a sapiente? Vitae neque esse sapiente
              ratione nisi est repudiandae illum dignissimos, nesciunt
              maxime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
