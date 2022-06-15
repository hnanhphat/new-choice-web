import styles from "./HomeHeading.module.scss";

type THomeHeading = {
  heading: string;
  color: 'white' | 'black';
};

const HomeHeading = ({ heading, color }: THomeHeading) => {
  return (
    <h2 className={`${styles.HomeHeading} ${styles[`HomeHeading--${color}`]}`}>
      {heading.split('').map((letter: string, i: number) => (
        <span key={i}>{letter}</span>
      ))}
    </h2>
  );
};

export default HomeHeading;
