import styles from "./Faq.module.scss";
import HomeHeading from "../../../components/HomeHeading/HomeHeading";
import { useState } from "react";

const Faq = () => {
  const [toggle, setToggle] = useState([false, false, false, false, false]);

  return (
    <section className={styles.Faq}>
      <div className={styles.Faq__Container}>
        <div className={styles.Heading}>
          <HomeHeading heading="faqs" color="black" />
        </div>
        <ul className={styles.List}>
          <li>
            <button
              className={styles.Question}
              onClick={() => {
                const arr = [...toggle];
                arr[0] = !arr[0];
                setToggle(arr);
              }}
            >
              How do I schedule an appointment?
            </button>
            <div
              className={`${styles.Answer} ${
                toggle[0] && styles[`Answer--Active`]
              }`}
            >
              <p>
                At this time, bookings for appointments are closed. Check out
                the bookings page for more info on when they will be available.
              </p>
            </div>
          </li>
          <li>
            <button
              className={styles.Question}
              onClick={() => {
                const arr = [...toggle];
                arr[1] = !arr[1];
                setToggle(arr);
              }}
            >
              How much does a tattoo cost?
            </button>
            <div
              className={`${styles.Answer} ${
                toggle[1] && styles[`Answer--Active`]
              }`}
            >
              <p>
                Hourly rates for with Bill are currently set at $300 with a $500
                deposit that goes towards the total cost for your tattoo.{" "}
              </p>
              <p>Full day rates are set at $2500.</p>
              <p>
                Please note that beginning September 2023 hourly for Bill will
                be $400.00 per hour.
              </p>
            </div>
          </li>
          <li>
            <button
              className={styles.Question}
              onClick={() => {
                const arr = [...toggle];
                arr[2] = !arr[2];
                setToggle(arr);
              }}
            >
              What happens if I need to cancel or reschedule my appointment?
            </button>
            <div
              className={`${styles.Answer} ${
                toggle[2] && styles[`Answer--Active`]
              }`}
            >
              <p>
                If you need to reschedule an appointment, we require at least 24
                hours advance notice. You MUST call us at the shop and leave a
                message if it’s outside of business hours. Reschedule requests
                made through e-mail or Instagram DM may not be seen by your
                artist and will not count as proper notice. Failure to give 24
                hour notice will result in you losing your deposit, meaning it
                won’t go towards the cost of your tattoo and you’ll need to put
                down another one to get back on the calendar. You may only
                reschedule an appointment twice. Additional reschedules will
                result in the loss of your deposit.
              </p>
              <p>
                If you contact us at least 24 hours before your appointment, we
                will happily reschedule you (again, only twice!). Please note
                that if an artist is booked out quite far in advance, you will
                be scheduled for their next availability which could be several
                months out. For that reason, the more notice you give for a
                reschedule, the sooner we can get you back on the calendar. We
                will hold on to your deposit for up to six months. If you don’t
                attempt to reschedule within that time frame, you’ll lose your
                deposit. For an outright cancellation with no reschedule, your
                deposit will not be refunded to you. We always seek to respect
                your time and efforts and ask that you do the same for us!
              </p>
              <p>
                You’ll receive text and email notifications from our calendar
                system 7 days before your appointment. If you don’t confirm
                through the link sent to you and we can’t reach you by phone to
                confirm you, you risk losing your appointment and having the
                space given to another client. For that reason, please save our
                number in your phone when you make an appointment and make sure
                that your voicemail is activated and that the mailbox isn’t
                full.{" "}
              </p>
            </div>
          </li>
          <li>
            <button
              className={styles.Question}
              onClick={() => {
                const arr = [...toggle];
                arr[3] = !arr[3];
                setToggle(arr);
              }}
            >
              Do you sell gift certificates?
            </button>
            <div
              className={`${styles.Answer} ${
                toggle[3] && styles[`Answer--Active`]
              }`}
            >
              <p>
                Yes! You can come pick one up at the shop (cash only) or we can
                arrange a digital gift card for you (paid by Paypal) to send to
                the recipient. If you’re coming into the shop to purchase one
                with cash, please call us and give us a heads up!
              </p>
            </div>
          </li>
          <li>
            <button
              className={styles.Question}
              onClick={() => {
                const arr = [...toggle];
                arr[4] = !arr[4];
                setToggle(arr);
              }}
            >
              May I bring friends/guests to my appointment?
            </button>
            <div
              className={`${styles.Answer} ${
                toggle[4] && styles[`Answer--Active`]
              }`}
            >
              <p>
                Currently we don’t allow any visitors. We have no waiting/lounge
                area for guests.
              </p>
              <p>
                If you and a friend or family member are coming in for matching
                tattoos, we can schedule you for back-to-back appointments on
                the same day but will need whoever isn’t currently being
                tattooed to wait outside. There are a ton of great neighboring
                small businesses to check out on 30th Street.{" "}
              </p>
              <p>
                Children are not allowed in the tattoo area at any time but if
                they need to accompany you for your consultation (*not* your
                actual tattoo appointment!), that’s okay. Pets/companion animals
                are not allowed inside of the shop for sanitary reasons. Service
                dogs and psychiatric service dogs are welcome as required by
                California Law.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Faq;
