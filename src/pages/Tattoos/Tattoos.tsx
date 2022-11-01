import "./Tattoos.scss";
import img_tattoos_01 from "../../images/tattoos/img_tattoos_01.jpeg";
import img_artist_01 from "../../images/tattoos/img_artist_01.jpeg";

const Tattoos = () => {
  const dataStyles = [
    {
      id: "style_01",
      ttl: "FINE LINE TATTOOS",
      txt: `Wanting a small, delicate piece? our Celebrity Ink™ tattoo studios cater for fine line tattoos.`,
    },
    {
      id: "style_02",
      ttl: "MANDALA TATTOOS",
      txt: `Geometric with a compilation of symbols in a symmetrical layout, Manadala tattoos represent eternity, internal balance and the spiritual journey.`,
    },
    {
      id: "style_03",
      ttl: "MINIMALISTIC TATTOOS",
      txt: `Have a small design in mind or you're simply not ready to go big? Celebrity Ink™ tattoo studios specialise in small tattoos.`,
    },
    {
      id: "style_04",
      ttl: "ORIENTAL TATTOOS",
      txt: `Symbolising beauty, femininity and love, Celebrity Ink™ tattoo artists are specialists when it comes to floral tattoos.`,
    },
    {
      id: "style_05",
      ttl: "REALISM TATTOOS",
      txt: `Inspired by the French realism art movement, Realism tattoos are a specialty globally within Celebrity Ink™ tattoo studios.`,
    },
    {
      id: "style_06",
      ttl: "SCRIPT TATTOOS",
      txt: `Using only black and grey tones of ink, Celebrity Ink™ tattoo artists are famous for their amazing black and grey tattoos and a unique ability to apply detailed shading.`,
    },
    {
      id: "style_07",
      ttl: "TRADITIONAL TATTOOS",
      txt: `Bold lines and bright colours, Celebrity Ink™ tattoo studios specialise in the timeless traditional tattoo style.`,
    },
    {
      id: "style_08",
      ttl: "TRIBAL TATTOOS",
      txt: `Considered rebellious, this bold location requires initial thought. Hand tattoos require a steady hand and fine detailing, something Celebrity Ink™ tattoo artists are well adversed in.`,
    },
  ];
  const dataImages = [
    { id: `tattoo_01`, img: img_tattoos_01 },
    { id: `tattoo_02`, img: img_tattoos_01 },
    { id: `tattoo_03`, img: img_tattoos_01 },
    { id: `tattoo_04`, img: img_tattoos_01 },
    { id: `tattoo_05`, img: img_tattoos_01 },
    { id: `tattoo_06`, img: img_tattoos_01 },
    { id: `tattoo_07`, img: img_tattoos_01 },
    { id: `tattoo_08`, img: img_tattoos_01 },
    { id: `tattoo_09`, img: img_tattoos_01 },
    { id: `tattoo_10`, img: img_tattoos_01 },
    { id: `tattoo_11`, img: img_tattoos_01 },
    { id: `tattoo_12`, img: img_tattoos_01 },
  ];
  const dataArtists = [
    {
      id: "artist_01",
      avatar: img_artist_01,
      name: "Elise Reilly",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam officiis eaque eos repellat, explicabo dignissimos reiciendis accusantium sequi corrupti culpa iste repellendus expedita nisi eum earum modi maiores nemo.",
    },
    {
      id: "artist_02",
      avatar: img_artist_01,
      name: "Elise Reilly",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam officiis eaque eos repellat, explicabo dignissimos reiciendis accusantium sequi corrupti culpa iste repellendus expedita nisi eum earum modi maiores nemo.",
    },
    {
      id: "artist_03",
      avatar: img_artist_01,
      name: "Elise Reilly",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam officiis eaque eos repellat, explicabo dignissimos reiciendis accusantium sequi corrupti culpa iste repellendus expedita nisi eum earum modi maiores nemo.",
    },
    {
      id: "artist_04",
      avatar: img_artist_01,
      name: "Elise Reilly",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam officiis eaque eos repellat, explicabo dignissimos reiciendis accusantium sequi corrupti culpa iste repellendus expedita nisi eum earum modi maiores nemo.",
    },
    {
      id: "artist_05",
      avatar: img_artist_01,
      name: "Elise Reilly",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam officiis eaque eos repellat, explicabo dignissimos reiciendis accusantium sequi corrupti culpa iste repellendus expedita nisi eum earum modi maiores nemo.",
    },
    {
      id: "artist_06",
      avatar: img_artist_01,
      name: "Elise Reilly",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam officiis eaque eos repellat, explicabo dignissimos reiciendis accusantium sequi corrupti culpa iste repellendus expedita nisi eum earum modi maiores nemo.",
    },
    {
      id: "artist_07",
      avatar: img_artist_01,
      name: "Elise Reilly",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam officiis eaque eos repellat, explicabo dignissimos reiciendis accusantium sequi corrupti culpa iste repellendus expedita nisi eum earum modi maiores nemo.",
    },
    {
      id: "artist_08",
      avatar: img_artist_01,
      name: "Elise Reilly",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam officiis eaque eos repellat, explicabo dignissimos reiciendis accusantium sequi corrupti culpa iste repellendus expedita nisi eum earum modi maiores nemo.",
    },
  ];
  return (
    <div id="tattoos" className="tattoos">
      <div className="c-bnr">
        <h1 className="heading">Tattoos Gallery</h1>
        {/* <strong className="sub">Back</strong> */}
      </div>
      {/* <div className="tattoos__about"></div>
      <div className="tattoos__story"></div> */}
      <div className="tattoos__style">
        <h2 className="page-heading page-heading--black">Tattoo Style</h2>
        <ul className="list">
          {dataStyles.map((style) => (
            <li key={style.id}>
              <h3 className="ttl">{style.ttl}</h3>
              <p className="txt">{style.txt}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="tattoos__gallery">
        <h2 className="page-heading">Tattoo Gallery</h2>
        <ul className="list">
          {dataImages.map((img) => (
            <li key={img.id}>
              <div className="img">
                <div
                  className="c-thumb"
                  style={{ backgroundImage: `url(${img.img})` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="tattoos__artists">
        <h2 className="page-heading page-heading--black">Artists</h2>
        <ul className="list">
        {dataArtists.map((artist) => (
          <li key={artist.id}>
            <div className="box">
              <div className="box__upper">
                <div
                  className="avatar c-thumb"
                  style={{ backgroundImage: `url(${artist.avatar})` }}
                ></div>
              </div>
              <div className="box__lower">
                <h2 className="name">{artist.name}</h2>
                <p className="des">{artist.des}</p>
              </div>
            </div>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default Tattoos;
