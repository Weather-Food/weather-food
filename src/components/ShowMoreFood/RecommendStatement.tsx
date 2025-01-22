import "../../styles/ShowMoreFood/RecommendStatement.scss";

const RecommendStatement = () => {
  return (
    <div className="recommend-statement--container">
      {/* <h3 className="recommend-title">오늘의 추천</h3> */}
      <img className="bulb-icon" />
      <p className="recommend-statement">
        흐린 날씨에는 따뜻한 국물 요리가 좋습니다. 추천 메뉴를 확인해보세요!
      </p>
    </div>
  );
};

export default RecommendStatement;
