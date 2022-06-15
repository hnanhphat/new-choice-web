import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <ul className={styles.Footer__List}>
        <li>
          <h2 className={styles.Ttl}>LOCATIONS</h2>
          <p className={styles.Txt}>
            337/6 NGUYEN DINH CHIEU STREET <br />
            HO CHI MINH city VN 700000
          </p>
        </li>
        <li>
          <h2 className={styles.Ttl}>HOURS OF OPERATION</h2>
          <p className={styles.Txt}>OPEN 6 DAYS 1PM TO 9PM</p>
          <p className={styles.Txt}>CLOSED MONDAYS</p>
        </li>
        <li>
          <h2 className={styles.Ttl}>CONTACT</h2>
          <p className={styles.Txt}>
            <a href="#send-mail">EMAIL</a>
          </p>
          <p className={styles.Txt}>(+84)909.000.000</p>
          <p className={styles.Txt}>
            <a href="#make-appointment">Booking Now</a>
          </p>
        </li>
      </ul>
      <p className={styles.Footer__Copyright}>© Copyright 2022 by New Choice Tattoo</p>
    </footer>
  );
};

export default Footer;
