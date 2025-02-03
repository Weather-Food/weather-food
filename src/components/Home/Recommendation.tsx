import styles from "../../styles/Home/Recommendation.module.scss";

const Recommendation = () => {
  return (
    <div className={styles.recommendationContainer}>
      <div className="recommend-statement--container">
        <p className={styles.statement}>
          <img src="./Home/food.svg" alt="food" />
          지금 날씨에 딱인 음식은?
        </p>
      </div>
      <div className={styles.recommendedFood__container}>
        {/* To-do: 날씨 추천 음식 패치 후 리스트 나열  */}
        <p>마라탕</p>
      </div>
      <div className={styles.moreFood__container}>
        <p>추천 음식 더보기</p>
        <img className={styles.moreIcon} src="./Home/more.svg" alt="more" />
      </div>
    </div>
  );
};

export default Recommendation;
