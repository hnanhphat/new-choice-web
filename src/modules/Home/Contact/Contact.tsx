import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <section className={styles.Contact}>
      <h2 className={styles.Contact__Heading}>Let's work together!</h2>
      <button className={styles.Contact__Btn}>Booking Now</button>
    </section>
  )
}

export default Contact