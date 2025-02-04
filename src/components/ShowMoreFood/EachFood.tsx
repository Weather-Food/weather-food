import styles from "../../styles/ShowMoreFood/EachFood.module.scss";

const EachFood = () => {
  return (
    <div className={styles.eachFood__container}>
      <img className={styles.foodImage} src="./Home/rain.webp" />
      <section className={styles.foodIntroduction}>
        <h3 className={styles.foodTitle}>떡국</h3>
        <p className={styles.foodSubtitle}>담백한 국물로 마음을 달래보세요</p>
        <div className={styles.categorySave__container}>
          <div className={styles.category}>한식</div>
          <img className={styles.saveIcon} />
        </div>
      </section>
    </div>
  );
};

export default EachFood;
