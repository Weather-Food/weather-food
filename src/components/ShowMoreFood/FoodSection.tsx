import styles from "../../styles/ShowMoreFood/FoodSection.module.scss";
import EachFood from "./EachFood";

const FoodSection = () => {
  return (
    <section className={styles.foodSection__container}>
      {/* 각 카테고리별 음식 데이터 패치 후 매핑 예정 */}
      <EachFood />
      <EachFood />
      <EachFood />
      <EachFood />
      <EachFood />
      <EachFood />
      <EachFood />
      <EachFood />
      <EachFood />
      <EachFood />
      <EachFood />
      <EachFood />
    </section>
  );
};

export default FoodSection;
