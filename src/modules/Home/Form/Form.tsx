import { SetStateAction } from "react";
import styles from "./Form.module.scss";

type TForm = {
  showForm: boolean;
  setShowForm: React.Dispatch<SetStateAction<boolean>>;
};

const Form = ({showForm, setShowForm}: TForm) => {
  return (
    <section
      className={`${styles.Form} ${showForm ? styles["Form--Active"] : ""}`}
    >
      <div className={styles.Form__Container}>
        <button className={styles.Close} onClick={() => setShowForm(false)}></button>
        <div className={styles.Heading}>
          <h2 className={styles.Heading__Ttl}>Booking Detail</h2>
          <p className={styles.Heading__Sub}>Let's create your tatoo.</p>
        </div>
        <div className={styles.Detail}>
          <ul className={styles.Detail__Info}>
            <li>
              <input type="text" />
              <span>What's your type?</span>
            </li>
            <li>
              <input type="text" />
              <span>Position</span>
            </li>
            <li>
              <input type="text" />
              <span>Size</span>
            </li>
            <li>
              <input type="text" />
              <span>Date</span>
            </li>
          </ul>
          <button className={styles.Detail__Booking}>Booking</button>
        </div>
      </div>
    </section>
  );
};

export default Form;
