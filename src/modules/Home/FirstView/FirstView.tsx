import styles from "./FirstView.module.scss";

const FirstView = () => {
  return (
    <section className={styles.FirstView}>
      <div className={styles.FirstView__Content}></div>
      <div className={styles.FirstView__Img}></div>
    </section>
  );
};

export default FirstView;
