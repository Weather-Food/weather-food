import "../../styles/ShowMoreFood/EachFood.scss";

const EachFood = () => {
  return (
    <div className="each-food--container">
      <img className="food-image" src="./Home/rain.webp" />
      <section className="food-introduction">
        <h3 className="food-title">떡국</h3>
        <p className="food-subtitle">담백한 국물로 마음을 달래보세요</p>
        <div className="category-save--container">
          <div className="category">한식</div>
          <img className="save-icon" />
        </div>
      </section>
    </div>
  );
};

export default EachFood;
