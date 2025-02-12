import React from "react";
import styles from "../../styles/RecipeDetail/RecipeRecommendFoodsList.module.scss";
import { recommendedFoods } from "./mockRecipeData";

const RecipeRecommendFoodsList = () => {
  return (
    <>
      {/* 추천 음식 섹션 */}
      <div className={styles.recommendedFoods}>
        <h3>추천 음식</h3>
        <div className={styles.recommendedFoodsList}>
          {recommendedFoods.map((food, index) => (
            <div key={index} className={styles.recommendedFoodWrapper}>
              <div className={styles.recommendedFood}>
                <img
                  src={food.image}
                  alt={food.name}
                  className={styles.recommendedFoodImage}
                />
                <h4>{food.name}</h4>
                <p>{food.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecipeRecommendFoodsList;
