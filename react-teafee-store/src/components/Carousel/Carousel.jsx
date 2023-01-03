import styles from "./Carousel.module.scss";

const Carousel = (props) => {
  const { children } = props;
  return (
    <div className={styles.CarouselContainer}>
      <div className={styles.CarouselWrapper}>
        <button className={styles.LeftArrow}>&lt;</button>
        <div className={styles.CarouselContentWrapper}>
          <button className={styles.RightArrow}>&gt;</button>
          <div className={styles.CarouselContent}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
