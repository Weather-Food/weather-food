import "../../styles/Home/Recommendation.scss";

const Recommendation = () => {
  return (
    <div className="recommendation-container">
      <div className="recommend-statement--container">
        <p className="statement">지금 날씨에 어울리는 음식은?</p>
      </div>
      <div className="recommended-food--container">
        <p>마라탕</p>
      </div>
      <div className="more-food--container">
        <p>추천 음식 더보기</p>
        <img src="./Home/more.svg" alt="more" />
      </div>
    </div>
  );
};

export default Recommendation;
