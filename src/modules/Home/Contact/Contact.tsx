import { SetStateAction } from "react";
import styles from "./Contact.module.scss";

type TContact = {
  setShowForm: React.Dispatch<SetStateAction<boolean>>;
};

const Contact = ({setShowForm}: TContact) => {
  return (
    <section className={styles.Contact}>
      <div className={styles.Line}></div>
      <h2 className={styles.Contact__Heading}>Let's work together!</h2>
      <button className={styles.Contact__Btn} onClick={() => setShowForm(true)}>
        Booking Now
      </button>
    </section>
  );
};

export default Contact;
