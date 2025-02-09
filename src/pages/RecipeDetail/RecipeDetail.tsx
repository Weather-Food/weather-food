import React, { useState } from "react";
import styles from "./RecipeDetail.module.scss";

import RecipeMeta from "../../components/RecipeDetail/RecipeMeta";
import { recipe, recommendedFoods } from "../../components/RecipeDetail/recipe";
import RecipeIngredients from "../../components/RecipeDetail/RecipeIngredients";

const RecipeDetail = () => {
  const [showIngredients, setShowIngredients] = useState(true);

  const toggleIngredients = () => {
    setShowIngredients(!showIngredients);
  };

  return (
    <div className={styles.recipeDetail}>
      <div className={styles.recipeDetail__container}>
        // RecipeMeta 컴포넌트를 RecipeDetail 컴포넌트로 이동
        <RecipeMeta showIngredients={showIngredients} />
        <hr />
        // RecipeIngredients 컴포넌트를 RecipeDetail 컴포넌트로 이동
        <RecipeIngredients
          toggleIngredients={toggleIngredients}
          showIngredients={showIngredients}
        />
        //조리 순서 컴포넌트 이동 필요. (2/10)
        <div className={styles.recipeDetail__sectionSteps}>
          <h3>조리순서</h3>
          <ol className={styles.stepsList}>
            {recipe.steps.map((step, index) => (
              <li key={index} className={styles.recipeStep}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <div className={styles.stepContent}>
                  <p className={styles.stepDescription}>{step.description}</p>
                  {step.image && (
                    <img
                      src={step.image}
                      alt={`Step ${index + 1}`}
                      className={styles.stepImage}
                    />
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
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
      </div>
    </div>
  );
};

export default RecipeDetail;
