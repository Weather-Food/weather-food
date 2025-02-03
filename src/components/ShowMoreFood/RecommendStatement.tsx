import styles from "../../styles/ShowMoreFood/RecommendStatement.module.scss";

const RecommendStatement = () => {
  return (
    <div className={styles.recommendStatement__container}>
      <img className={styles.bulbIcon} />
      <p className={styles.recommendStatement}>
        흐린 날씨에는 따뜻한 국물 요리가 좋습니다. 추천 메뉴를 확인해보세요!
      </p>
    </div>
  );
};

export default RecommendStatement;
